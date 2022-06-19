var mysql = require('./mysql.js')
var fs = require('fs')
var ejs = require('ejs')
var home_admin = require('./home_admin.js');
var adarr = home_admin.get_adlist();
module.exports = (function(){

    /* jsboard 시작 */
var jsboard = {};

jsboard.list = function(req,res,board_type){

    console.log("[jsboard list]");
//페이지당 게시물 수 : 한 페이지 당 10개 게시물
var page_size = 10;

//페이지의 갯수 : 1 ~ 10개 페이지
var page_list_size = 10;

//limit 변수
var no = "";

//전체 게시물의 숫자
var totalPageCount = 0;

var queryString = 'select count(*) as cnt from '+board_type

var listhandler = function(req,res,data){

//전체 게시물의 숫자
totalPageCount = data[0].cnt

//현제 페이지
var curPage = req.params.cur;

console.log("현재 페이지 : " + curPage, "전체 페이지 : " + totalPageCount);


//전체 페이지 갯수
if (totalPageCount < 0) {
totalPageCount = 0
}

var totalPage = Math.ceil(totalPageCount / page_size);// 전체 페이지수
var totalSet = Math.ceil(totalPage / page_list_size); //전체 세트수
var curSet = Math.ceil(curPage / page_list_size) // 현재 셋트 번호
var startPage = ((curSet - 1) * 10) + 1 //현재 세트내 출력될 시작 페이지
var endPage = (startPage + page_list_size) - 1; //현재 세트내 출력될 마지막 페이지


//현재페이지가 0 보다 작으면
if (curPage < 0) {
no = 0
} else {
//0보다 크면 limit 함수에 들어갈 첫번째 인자 값 구하기
no = (curPage - 1) * 10
}

console.log('[0] curPage : ' + curPage + ' | [1] page_list_size : ' + page_list_size + ' | [2] page_size : ' + page_size + ' | [3] totalPage : ' + totalPage + ' | [4] totalSet : ' + totalSet + ' | [5] curSet : ' + curSet + ' | [6] startPage : ' + startPage + ' | [7] endPage : ' + endPage)

var result2 = {
"curPage": curPage,
"page_list_size": page_list_size,
"page_size": page_size,
"totalPage": totalPage,
"totalSet": totalSet,
"curSet": curSet,
"startPage": startPage,
"endPage": endPage
};


fs.readFile('./views/'+board_type+'_list.html', 'utf-8', function (error, data) {

if (error) {
console.log("ejs오류" + error);
res.send(error);
return 
}

var queryString = 'select id,subject,contents,user_id,user_name,hits,date_format(reg_date, \'%Y-%m-%d\') as reg_date from '+board_type+' order by id desc limit '+no+','+page_size;

var errhandler = function(res,err){
    console.log(err);
    res.end(err);
  }

  var handler = function(req,res,result){
    res.send(ejs.render(data, {
        data: result,
        pasing: result2,
        boardtype:board_type,
        filename:'views/'+board_type+'_list.html',
        session:req.session,
	"adarr":adarr
        }));
  }

  mysql.zero_get(queryString,req,res,handler,errhandler);

});

}

var errhandler = function(res,err){
    console.log(err);
    res.end(err);
}

mysql.zero_get(queryString,req,res,listhandler,errhandler);

} // function list

//삭제
jsboard.delete = function(req,res,board_type){
console.log("[jsboard delete]")

var queryString = 'delete from '+board_type+' where id = ?'

var deletehandler = function(req,res){
    res.redirect('/'+board_type);
}

var errhandler = function(res,err){
    console.log(err);
    res.end(err);
}

mysql.put(queryString,[req.params.id],req,res,deletehandler,errhandler);

}//function delete


//삽입 포스터 데이터
jsboard.insert = function(req,res,board_type){

console.log("[jsboard insert]")
var queryString = 'insert into '+board_type+'(subject,contents,user_id,user_name,hits) values (?,?,?,?,?)'

var inserthandler = function(req,res){
    res.redirect('/'+board_type);
}

var errhandler = function(res,err){
    console.log(err);
    res.render('error',{message:'error',error:err});
}

var body = req.body;

mysql.put(queryString,[body.subject, body.ir1, /* body.user_id */req.session.userid,/*body.user_name*/req.session.nickname,0],req,res,inserthandler,errhandler);

}//function insert


//수정
jsboard.edit = function(req,res,board_type){

console.log("[jsboard edit]")

var queryString = "update "+board_type+" set subject = ?, contents = ? where id = ?"

var edithandler = function(req,res){
    res.redirect('/'+board_type)
}

var errhandler = function(res,err){
    console.log(err);
    res.end(err);
}

var body = req.body;
console.log(body.contents);
mysql.put(queryString,[body.subject, body.ir1 , req.params.id],req,res,edithandler,errhandler);

}

//댓글쓰기

jsboard.comment_insert = function(req,res,board_type){
  console.log("[jsboard comment insert]");
  var body = req.body;
  var queryString = 'insert into '+board_type+'_comment(board_id,comment,user_id,user_name) values (?,?,?,?)'
  
var inserthandler = function(req,res){
  res.redirect('/'+board_type+'/detail/'+body.board_id);
}

var errhandler = function(res,err){
  console.log(err);
  res.render('error',{message:'error',error:err});
}

mysql.put(queryString,[body.board_id, body.comment, /* body.user_id */req.session.userid,/*body.user_name*/req.session.nickname],req,res,inserthandler,errhandler);

}

jsboard.comment_delete = function(req,res,board_type){
  console.log("[jsboard comment delete]");
  var queryString = 'delete from '+board_type+'_comment where id = ?'

  var deletehandler = function(req,res){
      res.redirect('/'+board_type+'/detail/'+req.params.board_id);
  }
  
  var errhandler = function(res,err){
      console.log(err);
      res.end(err);
  }
  
  mysql.put(queryString,[req.params.id],req,res,deletehandler,errhandler);
}

jsboard.particle_list = function(req,res,board_type){
  console.log("[jsboard particle list]");
  var queryString = 'select id,subject,contents,user_id,user_name,hits,date_format(reg_date, \'%Y-%m-%d\') as reg_date from '+board_type+' order by id desc limit 5';
  var particle_handler = function(req,res,rows){
  var result = rows;
  res.json({rows:result});
}
  var errhandler = function(res,err){
    console.log(err);
    res.end(err);
}
mysql.get(queryString,req,res,particle_handler,errhandler);
}

jsboard.visit = function(req,res,boardtype){
	var queryString = 'update '+boardtype+' set hits=hits+1 where id=?';
	var visithandler = function(req,res){
		res.json({result:"success"});
	}
	var errhandler = function(res,err){
		console.log(err);
		res.json({result:err});
	}
	mysql.put(queryString,[req.params.id],req,res,visithandler,errhandler);

}

function logined_check(req){
  if(req.session.logined=="yes"){
    return true;
  }else{
    return false;
  }
}

function admin_check(req){
  if(req.session.isadmin){
    return true;
  }else{
    return false;
  }
}


return jsboard;

})();
