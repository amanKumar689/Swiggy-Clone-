const  LocalStrategy = require( 'passport-local').Strategy
const JwtStrategy = require('passport-jwt').Strategy
const ExtractJwt  =require('passport-jwt').ExtractJwt
const User = require("./schema");
const bcrypt = require('bcrypt')
//  local login  on every visit on  '/login '  (No  TOKEN BASED )



//                                       LOCAL AUTHENTICATION

const LOCAL_STRATEGY = new LocalStrategy({
	usernameField:'email'
	} ,
function(email,password,done){
	
	console.log('authenticaiton process ....')
	const signup_user = { email } 

 User.findOne(signup_user , function (err,user){
	 
 if(err) {return done(err) } //there is err
   if(!user) {
	   return done(null,{ user:false  }) // no error  BUT  user is  present
   }
 else {
	 return done(false,{user:true , message:" plzz choose different account"})  // no error &&  no user 
 }   
   
   
   /*
 const user_password = password ;
 const  stored_password = user.password

 const  IsMatch =	bcrypt.compareSync(user_password,stored_password)

 
   IsMatch ? done(null,user) :done(null,false)
   
   */
 })
	
	
})

//                                      JWT AUTHENTICATION



const options ={
	
	 jwtFromRequest :ExtractJwt.fromAuthHeaderAsBearerToken() ,
	 secretOrKey : 'SECRET____KEY'  
	 
	
}
const JWT_STRATEGY =  new JwtStrategy( options , 
 
  function (jwt_Payload ,done) {
	  
	  
	 return   done(null , {message: `Your secret code ${jwt_Payload.sub}`})
	 
	  User.findOne({id:jwt_Payload.sub} ,(err,user) =>{
		  
		  if(err){return done(err,false)}
		  if(!user) { return done(null, false)}
		  else { return done(null,user) } 
		   
	  })
	  
	  
  }
 
)


exports.LocalStrategy = LOCAL_STRATEGY 
exports.Jwt_Strategy = JWT_STRATEGY







