const mongoose=require("mongoose");

const Schema=mongoose.Schema;

const placeSchema=new Schema({
  name:{
    type:String,
    required:true,
  },  

   age:{
    type:String,
    required:true,
  } ,

  profile:{
    type:String,
    required:true,
  } ,

    phoneno:{
    type:String,
    required:true,
  } ,
  description:{
    type:String,
    required:false,
  } , 

});
const places = mongoose.model('place',placeSchema);

module.exports= places;
