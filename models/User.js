const mongoose=require("mongoose");
const   UserSchema= new mongoose.Schema({
 ID:{
type:String,
 },
 JobTitle:{
     type:String,
 },
 FirstNameLastName:{
     type:String,

 },
 Email:{
     type:String,

 },
Phone:{
type:String,
},
Company:{
    type:String,

},
ProfilePicture:{
    type:String,
}
},{timestamps:true})
module.exports=mongoose.model('User',UserSchema)
// "ID":"1",

// "JobTitle":"Production Painter",

// "EmailAddress":"Charlize_Murray5969@fuliss.net",

// "FirstNameLastName":"Charlize Murray",

// "Email":"Charlize_Murray9641@bungar.biz",

// "Phone":"3-688-586-4848",

// "Company":"Leadertech Consulting"
