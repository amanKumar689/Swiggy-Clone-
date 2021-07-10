const http = require("http");
const express = require("express");
const app = express(http);
const PORT = process.env.PORT || 3030;
const User = require("./schema");
const bcrypt = require('bcrypt');
const passport = require('passport')
const STRATEGY = require('./strategies')
const jwt = require('jwt-simple')
const flash = require('connect-flash')
const cookieParser = require('cookie-parser')
const session = require('express-session')


app.use(cookieParser())
app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(passport.initialize() )
passport.use(STRATEGY.LocalStrategy)
passport.use(STRATEGY.Jwt_Strategy)
 app.use(passport.session());
app.use(flash())
 
const secret = "SECRET____KEY";
 
                                                  /*   1. authentication   */

app.use(
  express.urlencoded({
    extended: true,
  })
);

                                               /*    -->   CORS  MIDDLEWARE   -- >      */
app.use(ALLOW_CORS)
 
function ALLOW_CORS(req,res,next) {
	
	
	res.setHeader('access-control-allow-origin','http://localhost:3000')
	res.setHeader('Access-Control-Allow-Credentials' ,true)
	res.setHeader('Access-Control-Allow-Headers' , 'Authorization');
	next()
}

                                              /*     Function to create JWT           */

function createToken(id) {
	
	return jwt.encode(id ,secret)	
}

                                        /*      <--   SIGN UP SECTION    -->    */

					function 	signup_middleware(req,res,next){
						
						
						passport.authenticate('local',{session:false ,failureFlash:true},(err,user,info,status) =>{
							
							!user &&  req.flash('message',info.message)
							 req.user = user
							 next()
							
						})(req,res,next)
						
					}				
									
app.post("/signup", signup_middleware ,(req, res) => {
	
	
	 if(!req.user.user) 
	 {
		 // Let's create new one 
		   
	  const new_user = new User({           // model using schema 
		  username: req.body.username,
          password: req.body.password,
          email:req.body.email
  });
  
		  
 
  new_user
     .save()
    .then((user) => {
      console.log(" saved successfully");
	  
	  // Let's create jwt for  my client
	  const token = createToken(user.id)
	   
	   res.send(
	  {
		  message: "saved succefully  Plz set given token to your localstorage / session", 
	      token 
	  });
	  
    })
    .catch((err) => {
      res.status(400).send ({
        message: req.flash('message')[0],
      });
    });
		  
	 }
	else 
	{
		 res.send({message: " sorry account is already registered"}) 
	}
	
});

function  Authenticate(req,res,next) {
	
	 passport.authenticate('jwt',{session:false} , (error,user,info,status)=>{
		   
	// When No JWT  -->   Login with username and password
	
		   if(req.body.email) 
		   {
			    console.log('local entry ',user)
				// local  authentication
				
				const login_user= {
					email:req.body.email 
				}
			   
			   User.findOne(login_user, (err,user) =>{ 
			   
			    if(user)
				// Let's check password 
				{
 const user_password = req.body.password ;
 const  stored_password = user.password

 const  IsMatch =	bcrypt.compareSync(user_password,stored_password)

 if(IsMatch)
 {
	 req.user= user
	 req.flash('message',info.message)
    next() 
 }
 else 
 {
	 
	res.send({message:" password incorrect"})
	 
 }
   
			    		 
				 }
				 
		   else 
		   {
			   res.send({message:" email is not registered "})
		   }
			      })
		   }
				  
  //                  When    -->   JWT   <-- is  available  
  
				  else if(!user)
				  {
					res.send({status:true ,message_2:info.message})	
		/*
			let token = req.headers.authorization.includes('null')
	  if(!token)
	  {
	token  =  req.headers.authorization.replace('Bearer',"") 
		  
	   token = token.replace(' ','')
	   const id = jwt.decode(token , secret)
	  User.findOne({_id:id },(err,user)=>{
       if(user) {
		   
					res.send({status:true })	
		   
	   } 
else 
{
	res.send(' you are fake user')
}	
		  
	  })
	  
	  }
 
 else {
	 res.send(' Not logged In')
 }
  
					  
				*/
				}
				  
				  
		   
	   } )
	    (req,res,next) 
	   
	
}

  app.post('/login' ,Authenticate ,(req,res,next)=>{
	  console.log('Main function')
   
     if(!req.user.id)
	 {
		 res.send({message:req.flash('message')[0]})
	 }
  
 const token = createToken(req.user.id)
	   
	  res.send({message:" welcome my user you have passed my security layer"  ,token })
	  
	   
	})
 

app.listen(3030, () => {
  console.log("listening at port :", PORT);
});















