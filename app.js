var express = require('express');
var app = express();
var request = require('request');
var mongoose = require('mongoose');
var Query = require('./models/query');
var Blog  = require('./models/blog');
var bodyParser= require('body-parser');

mongoose.set('useUnifiedTopology', true);
mongoose.set('useNewUrlParser', true);
mongoose.connect('mongodb+srv://krish:kanha123@cluster0-svhr0.mongodb.net/test?retryWrites=true&w=majority');
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static(__dirname+'/public'));
app.set('view engine','ejs');


app.get('/',function(req,res){



request('https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=&type=0&ind_id=4',function(error,response,body){

				if(!error && response.statusCode==200){
					var data = JSON.parse(body);
						request('https://appfeeds.moneycontrol.com/jsonapi/market/marketmap&format=&type=0&ind_id=9',function(error,response,body)	{
					if(!error && response.statusCode==200){
						var data1 = JSON.parse(body);
						res.render('home',{data:data,data1:data1});
					}
				});
				}
		});
	
	
	
});

app.get('/downloads',function(req,res){
	res.render('downloads');
});

app.get('/about-us',function(req,res){
	res.render('about');
});

app.get('/login',function(req,res){
	res.render('login');
});

app.get('/register',function(req,res){
	res.render('register');
});

app.post('/',function(req,res){
	var name = req.body.name;
	var email = req.body.email;
	var number = req.body.mob;
	var wp = req.body.wp;
	var query = req.body.query;
	
	var newQuery = {
		name: name,
		email: email,
		mobile_no: number,
		whatsapp: wp,
		qry: query
	};
	Query.create(newQuery,function(err,newQuery){
		if(err){
			console.log(err);
		}else{
			res.redirect('/');
		}
	});
});

app.get('/admin-control',function(req,res){
	
	Query.find({},function(err,allQuery){
		if(err){
			console.log(err);
			
		}else{
			res.render('admin',{query:allQuery});
		}
	});
});

app.get('/admin-control/blog-new',function(req,res){
	res.render('new');
});

app.post('/admin-control',function(req,res){
	var title = req.body.title;
	var message = req.body.message;
	
	var newBlog ={
		title: title,
		message: message
	};
	Blog.create(newBlog,function(err,newBlog){
		if(err){
			console.log(err);
		}else{
			res.redirect('/admin-control');
		}
	});
});

app.get('/blogs',function(req,res){
	Blog.find({},function(err,blogs){
		if(err){
			console.log(err);
		}else{
			res.render('blog',{blog:blogs});
		}
	});
});

app.get('/insurance',function(req,res){
	
	res.render('insurance');
});

app.get('/market-feed',function(req,res){
	
	request('http://appfeeds.moneycontrol.com/jsonapi/market/indices&ind_id=4',function(error,response,body)	{
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			
				res.render('market',{data:data});
					
		}
		
	});
	
});

app.listen(process.env.PORT,process.env.IP,function(){
	console.log('AFS has started');
});