var request = require('request');
var mysql = require('./mysql');
var admin_list = require('./admin_list');
var naver_credential = require('./config/naver_log_config');

/**
 * 네이버 로그인 로직
 *
 * 로그인 버튼클릭 -> 
 * 네이버로 권한요청(비로그인시 로그인) -> 
 * 권한승인시 callback url로 redirect -> 
 * 네이버로 접근 토큰요청-> 
 * 토큰받아서사용자정보를 받아옴 ->
 * -> req.session에 정보저장
 *  관리자일시 req.session.isadmin = true;
    req.session.userid = temp.response.email;
    req.session.nickname = decodeURI(temp.response.nickname);
    req.session.name = decodeURI(temp.response.name);
    req.session.logined = "no";
 * -> 내안의숲 db에 유저정보 없다면 회원가입페이지이동 -> 
 * 성공시 -> 
 * 로그인처리(req.session.logined="yes")
 * 
 **/
module.exports=(function(){
var naverlogin = {};

var client_id = naver_credential.client_id;
var client_secret = naver_credential.client_secret;
var callback_uri = naver_credential.callback_uri;
var redirectURI = encodeURI(callback_uri);

function getRandom(){
	return Math.floor(Math.random() * 99999) + 1;
}

naverlogin.login=function(req,res,renderPage,args){
  var state = String(getRandom());
res.render(renderPage,{"session":req.session,"client_id":client_id,"redirectURI":redirectURI,"state":state,"adarr":args});
}

naverlogin.getToken=function(req,res){

	return new Promise(function(resolve,reject){
	var code = req.query.code;
	var state = req.query.state;

	var api_url = 'https://nid.naver.com/oauth2.0/token?grant_type=authorization_code&client_id='+client_id+'&client_secret='+client_secret+'&redirect_uri='+redirectURI+'&code='+code+'&state='+state;

    var options = {
        url: api_url,
        headers: {'X-Naver-Client-Id':client_id, 'X-Naver-Client-Secret': client_secret}
     };
    request.get(options, function (error, response, body) {
      if (!error && response.statusCode == 200) {
        //res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
        //res.end(body);
	resolve(body);
      } else {
        //res.status(response.statusCode).end();
        //console.log('error = ' + response.statusCode);
	reject({error:response.statusCode});
      }
    });
	});
}

naverlogin.registerCheck = function(req,res){
	return naverlogin.getToken(req,res).then((result)=>{
                console.log(result);
		obj = JSON.parse(result);
		console.log("access_token:"+obj.access_token);
		var token =  obj.access_token;
   var api_url = 'https://openapi.naver.com/v1/nid/me';
   var header = "Bearer "+token;
   var options = {
       url: api_url,
       headers: {'Authorization': header}
    };
		return new Promise(function(resolve,reject){
   request.get(options, function (error, response, body) {
     if (!error && response.statusCode == 200) {
       //res.writeHead(200, {'Content-Type': 'text/json;charset=utf-8'});
       //res.end(body);
console.log("성공");
       resolve(body);
     } else {
       console.log('error');
       if(response != null) {
         //res.status(response.statusCode).end();
         //console.log('error = ' + response.statusCode);

       }
	     reject('Response null or status is not 200. exiting...');
     }
   });
		});
                //res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		//res.end("성공");
	}).then((info)=>{
		console.log(info);
    var temp = JSON.parse(info);
    req.session.isadmin = false;
    admin_list.forEach(item => {
            if(item==temp.response.id){
              req.session.isadmin=true;
              console.log(item);
            }
    });
    if(!temp.response.nickname){
	  req.session.nickname = "annoymous" 
    }else{
          req.session.nickname = decodeURI(temp.response.nickname);
    }
    if(!temp.response.name){
	  req.session.name = "annoymous"
    }else{
          req.session.name = decodeURI(temp.response.name);
    }

    req.session.userid = temp.response.id;
    req.session.logined = "no";
    console.log("userid:"+req.session.userid);
    console.log("nickname:"+req.session.nickname);
    console.log("name:"+req.session.name);
    console.log("logined:"+req.session.logined);
     mysql.zero_get("SELECT * FROM user WHERE id='"+req.session.userid+"'",req,res,gethandler,errhandler);
		//
	}).catch((err)=>{
		console.log(err);
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
		res.end("실패");
	});
}

naverlogin.register = function(req,res){
  var data =[req.session.userid,req.session.nickname,req.session.name];
  var sql = 'INSERT INTO user (id, nickname, name) VALUES(?, ?, ?)';
  mysql.put(sql,data,req,res,puthandler,errhandler);
};

function gethandler(req,res,rows){
  if(rows.length>0){
  req.session.logined="yes";
  res.redirect("/");
  }else{
  res.redirect("/register");
  }
};

function puthandler(req,res){
  req.session.logined="yes";
  res.redirect("/");
}

function errhandler(res,err){
  res.json({"error":err});
}

return naverlogin;
})();
