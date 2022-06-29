var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
    
    name:{
        type:String,
        require:true
    },
    mobile:{
        type:Number,
        require:true,
      
    },
    
    address:{
        type:String
    }
  
    
})
var Person = new mongoose.model("Person",UserSchema);
module.exports = Person;