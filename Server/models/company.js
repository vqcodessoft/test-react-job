var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true,
        unique:[true,"user email already Register"]
    },
    
    address:{
        type:String
    },
   
    company: { type: mongoose.Schema.Types.ObjectId,
                require:true
                }
          
    
  
    
})
var Company = new mongoose.model("Company",UserSchema);
module.exports = Company;