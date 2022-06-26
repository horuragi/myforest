var express = require('express');
var router = express.Router();
var home_admin = require('../lib/home_admin');
var admin_upload = home_admin.adadd().single('file1');
var camping_info = require('../lib/camping_info');
const camping_image = require('../lib/camping_image');
var picture_upload = camping_info.pic_insert().single('file1');
const image_upload = camping_image.pic_update().single('file1');
//var naverlogin = require('../lib/naverlogin');

/* GET admin listing. */
router.get('/', function(req, res, next) {
        renderPage = "admin_reservation"
        session_check(req, res, renderPage);
});


// 관리자 예약승인
router.get('/admin_reservation',function(req,res,next){
	console.log('/admin reservation');
        renderPage = "admin_reservation"
        session_check(req, res, renderPage);
});

// 관리자 방 관리
router.get('/admin_room',function(req,res,next){
        renderPage = "admin_room"
        session_check(req, res, renderPage);
});

router.get('/admin_advertise',function(req,res,next){
	renderPage = "admin_advertise"
	session_check(req,res,renderPage);
});

router.get('/camping_info/:roomtype',function(req,res,next){
    
        String.prototype.replaceAll = function(org, dest) {
			return this.split(org).join(dest);
		}
		
       renderPage = "admin_camping_info";
       
       var handler = function(req,res,result){
          replaceField(result);
          var idxv=generateidx(req.params.roomtype);
          var v = result[idxv].pagetext.toString();
		  var v2 = v.replaceAll('"','\\"');
		  var v3 = v2.replaceAll("'","\\'");
          res.render(renderPage,{session:req.session,data:result,params:req.params,idx:idxv,contents:v3}); 
       }

       var errhandler = function(res,err){
           console.log(err);
           res.end(err);
       }
       if (req.session.isadmin==true) {
       camping_info.get(req,res,handler,errhandler);
       }else{
           res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
       }
       //session_check(req,res,renderPage);
       
});

router.get('/camping_image/:image_name', function(req,res,next) {
    const handler = function (req, res, result){
        res.json({ result });
    }    
    
    const errhandler = function (req, err) {
        res.json({ result : err });
    }
    
    camping_image.get(req, res, handler ,errhandler);
});

router.post('/camping_info',function(req,res,next){

     var handler = function(req,res){
          res.json({"result":"Success"});
     }

     var errhandler = function(req,err){
          console.log(err);
          res.json({"result":err});
     }

     camping_info.update(req,res,handler,errhandler);

});

router.post('/camping_explan/:roomtype',function(req,res,next){
   camping_info.explan_update(req,res);
});

router.post('/camping_picture/:picname',function(req,res,next){
    picture_upload(req,res,function(err){
    if(err){
     console.log(err);
     res.json({result:'error'});
    }else{
    res.json({result:'success'});
    }
    });

});

router.post('/camping_image', function(req, res, next){
    image_upload(req, res, function(err){
       if(err){
           res.json({ result : 'error' });
       }else {
           res.json({ result : 'success'});
       } 
    });
});

router.get('/camping_picture_del/:roomtype/:number',function(req,res,next){
    camping_info.pic_delete(req,res);
});

router.get('/etc',function(req,res,next){
       renderPage = "admin_etc"
       session_check(req,res,renderPage);
});

router.post('/adadd/:adurl',function(req,res,next){
  console.log(decodeURIComponent(req.params.adurl));
  admin_upload(req,res,function(err){
    if(err){
      console.log(err)
      res.json({result:'error'});
      return
    }
    res.json({result:'success'});

  })
});

router.get('/adlist',function(req,res,next){
	if (req.session.isadmin==true) {
  home_admin.adlist(req,res);
	}else{
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
	}
});

router.get('/addel/:id',function(req,res,next){
	if (req.session.isadmin==true) {
  home_admin.addel(req,res);
	}else{
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
	}
});

router.get('/admin_users/passing/:cur',function(req,res){
	if (req.session.isadmin==true) {
home_admin.userlist(req,res);
	}else{
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
	}
});

router.get('/admin_users/delete/:idx',function(req,res){
	if (req.session.isadmin==true) {
	home_admin.userdel(req,res);
	}else{
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
	}
});

router.get('/admin_visit/passing/:cur/:date',function(req,res){
	if (req.session.isadmin==true) {
 home_admin.get_visit_list(req,res);
	}else{
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");
	}
});


function session_check(req, res, renderPage) {
	if (req.session.isadmin==true) {
		res.render(renderPage, {session:req.session})
	} else {
		res.send("<script>alert(\"관리자가 아니면 접근할 수 없습니다.\")</script><script>history.back()</script>");

	}
}

function replaceField(result){
   for(var i=0;i<result.length;i++){
              switch(result[i].Field){
                case "bluebird":
                result[i].Field = "파랑새";
                break;
                case "owl":
                result[i].Field = "부엉이";
                break;
                case "pension":
                result[i].Field = "펜션";
                break;
                case "raccoon":
                result[i].Field = "너구리";
                break;
                case "scops_owl":
                result[i].Field = "소쩍새";
                break;
                case "site_cypress":
                result[i].Field = "사이트1";
                break;
                case "site_zelkova":
                result[i].Field = "사이트2";
                break;
                case "cuckoo":
                result[i].Field = "뻐꾸기";
                break;
                case "nightingale":
                result[i].Field = "꾀꼬리";
                break;
                case "site_grass":
                result[i].Field = "사이트3";
                break;
                case "firstetc":
                result[i].Field = "기타1";
                break;
                case "secondetc":
                result[i].Field = "기타2";
                break;
                default:
                break;
              }
          }
}
function generateidx(roomtype){
     switch(roomtype){
                case "bluebird":
                return 0;
                break;
                case "owl":
                return 1;
                break;
                case "pension":
                return 2;
                break;
                case "raccoon":
                return 3;
                break;
                case "scops_owl":
                return 4;
                break;
                case "site_cypress":
                return 5;
                break;
                case "site_zelkova":
                return 6;
                break;
                case "cuckoo":
                return 7;
                break;
                case "nightingale":
                return 8;
                break;
                case "site_grass":
                return 9;
                break;
                case "firstetc":
                return 10;
                break;
                case "secondetc":
                return 11;
                break;
                default:
                return 0;
                break;
              }
}
module.exports = router;
