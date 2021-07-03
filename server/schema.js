const mongoose = require("mongoose");
const bcrypt = require('bcrypt')
mongoose.connect("mongodb://localhost:27017/USERS", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});



// Model

const user_schema = mongoose.Schema({
 email :{
	 type:String ,
	 unique:true ,
	 validate:[validator ,' Not a Valid gmail']
	 
 } ,
    username: {
        type:String ,
    },
    password: {
        type:String ,
    }
  })
  
  
  
user_schema.pre('save',function(next){


// Let have some magic here in some middle of the process of  saving our model to mongo db database

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync(this.password , salt);
this.password = hash 
next();

})  
  

 
  
  
const User = mongoose.model("swiggy_users_2", user_schema );
module.exports = User;

function validator (email) {

       var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  
           return re.test(email)

}

