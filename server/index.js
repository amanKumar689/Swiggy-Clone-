const http = require("http");
const express = require("express");
const app = express(http);
const PORT = process.env.PORT || 3030;
const User = require("./schema");
const bcrypt = require('bcrypt');
const passport = require('passport')
const STRATEGY = require('./strategies')
const jwt = require('jwt-simple')



app.use(passport.initialize() )
passport.use(STRATEGY.LocalStrategy)
passport.use(STRATEGY.Jwt_Strategy)
 app.use(passport.session());
 
 
                                                  /*   1. authentication   */

app.use(
  express.urlencoded({
    extended: true,
  })
);


                                               /*    -->   CORS  MIDDLEWARE   -- >      */
 
function ALLOW_CORS(req,res,next) {
	console.log('i think it is running')
	res.setHeader('access-control-allow-origin','*')
	next()
}

                                              /*     Function to create JWT           */

function createToken(id) {
	
const secret = "SECRET____KEY";
	return jwt.encode(id ,secret)	
}



                                        /*      <--   SIGN UP SECTION    -->    */

app.post("/signup",  ALLOW_CORS ,passport.authenticate('local',{session:false }) ,(req, res) => {
	
	console.log('everything is good',req.user);
	
	
	 if(!req.user.user) 
	 {
		 // Let's create new one 
		   
	  const new_user = new User({
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
		  message: "saved succefully  Plz set Given token to your localstorage / session", 
	      token 
	  });
	  
    })
    .catch((err) => {
		console.log('error:::---',err)
      res.status(400).send ({
        message: err.errors?.email.message || err.keyPattern && " Email already exist " || " something gone wrong",
      });
    });
		  
	 }
	else 
	{
		 res.send({message: " sorry account is already registered"}) 
	}
	
});

                                        /*        <--   LOGIN  SECTION  -->   (  jwt /  no jwt )      


app.post('/login',ALLOW_CORS ,passport.authenticate('jwt',{session:false }) ,(req,res)=>{
	
		
	res.send({messgae:"successfully logged in" ,email:req.user.email})
	
})

										*/

//            < --    JWT AUTHENTICATION   -->


/*
function IS_JWT_PRESSENT ( req,res,next) {
	
	console.log(req.headers.authorization)
	next()
	
}
*/
function  Authenticate(req,res,next) {
	
	 passport.authenticate('jwt',{session:false} , (error,user,info,status)=>{
		   
		   if(!user) 
		   {
			    
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

 
   IsMatch ? next() : res.send({message:" password incorrect"})
   
			    		 
				 }
				 
		   else 
		   {
			   
			    res.send({message:" email is not registered yet"})
		   }
			      })
		   }
				  
				  else 
				  {
					
  res.send({mode :" JWT mode"})					
					  
				  }
				  
		   
	   } )
	    (req,res,next) 
	   
	
}

  app.get('/login_using_jwt' ,Authenticate ,(req,res,next)=>{
	  
	  res.send({message:" welcome my user you have passed my security layer"})
	  
	   
	})
 

app.listen(3030, () => {
  console.log("listening at port :", PORT);
});















