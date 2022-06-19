var express = require('express');
var router = express.Router();
var jsboard = require('../lib/jsboard')
var mysql = require('../lib/mysql');
var fs = require('fs');
var ejs = require('ejs')
var home_admin = require('../lib/home_admin');

//게시글 리시트
router.get("/pasing/:cur", function (req, res) {
	console.log('passing')
	jsboard.list(req,res,'review');
});

//review redirect
router.get("/", function (req, res) {
	//review로 들어오면 바로 페이징 처리
	res.redirect('/review/pasing/' + 1)
});

//삭제
router.get("/delete/:id", function (req, res) {
	console.log("/delete")
	jsboard.delete(req,res,'review');
});

//삽입 페이지
router.get("/insert", function (req, res) {
	console.log("/insert")
var adarr = home_admin.get_adlist();
	
	fs.readFile('./views/review_insert.html', 'utf-8', function (error, data) {
	res.send(ejs.render(data, {
		boardtype : 'review',
        filename:'views/board_insert.html',
        session:req.session,
	"adarr":adarr
		}))
	})
	
});
	
router.post("/insert", function (req, res) {
	console.log('/insert');
	jsboard.insert(req,res,'review');
});
	
	
router.get("/edit/:id", function (req, res) {
	console.log("/edit/:id")
var adarr = home_admin.get_adlist();
	
	
	var errhandler = function(res,err){
	  console.log(err);
	  res.end(err);
	}
	
	var queryString = 'select * from review where id = '+req.params.id;
	
	fs.readFile('./views/review_edit.html', 'utf-8', function (err, data) {
	  if(err){
		res.send(err);
	  }else{
	  var handler = function(req,res,result){
		String.prototype.replaceAll = function(org, dest) {
			return this.split(org).join(dest);
		}
		  var v = result[0].contents.toString()
		  var v2 = v.replaceAll('"','\\"');
		  var v3 = v2.replaceAll("'","\\'");
		res.send(ejs.render(data, {
		  data: result[0],
		  contents : v3,
		  boardtype:'review',
          filename:'views/board_edit.html',
          session:req.session,
	  "adarr":adarr
		  }))
	  }
	  mysql.get(queryString,req,res,handler,errhandler);
	}
	});
	
});
	
	
router.post("/edit/:id", function (req, res) {
	console.log('/edit');
	jsboard.edit(req,res,'review');
});
	
	
//글상세보기
router.get("/detail/:id", function (req, res) {
	console.log("get delete/:id")
var adarr = home_admin.get_adlist();
	
	var errhandler = function(res,err){
	  console.log(err);
	  res.end(err);
	}
	
	var queryString = 'select id,subject,contents,user_id,user_name,hits,date_format(reg_date, \'%Y-%m-%d\') as reg_date from review where id = '+req.params.id;
 var queryString2 = 'select id,board_id,comment,user_id,user_name,date_format(reg_date, \'%Y-%m-%d\') as reg_date from review_comment where board_id = '+req.params.id;
	fs.readFile('./views/review_detail.html', 'utf-8', function (err, data) {
	  if(err){
		res.send(err);
	  }else{
		var middle_handler = function(req,res,result){
			var comment_handler = function(req,res,result2){
			res.send(ejs.render(data, {
				data: result[0],
				data2: result2,
				boardtype:'review',
                filename:'views/board_edit.html',
                session:req.session,
		"adarr":adarr
				}))
			}
			mysql.zero_get(queryString2,req,res,comment_handler,errhandler);
			
		}//middle handler

		var handler = function(req,res,result){
			middle_handler(req,res,result)
		}// handler

		mysql.get(queryString,req,res,handler,errhandler);
	  }
	});
});
	

router.post('/comment/insert',function(req,res,next){
	console.log("/comment/insert")
	jsboard.comment_insert(req,res,'review');
});

router.get('/comment/delete/:id/:board_id',function(req,res,next){
	console.log("/comment/delete/:id");
	jsboard.comment_delete(req,res,'review');
});

module.exports = router;
