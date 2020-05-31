var mongoose=require('mongoose');
mongoose.connect('mongodb://test:secret123@ds123929.mlab.com:23929/unirely-v2',{useNewUrlParser:true});
var conn=mongoose.connection;
var phoneSchema=new mongoose.Schema({
    name:String,
    email:String,
    number:Number,
    dob:Date,
    phone_no:[
        {
            type: String,
            default: null
        }
    ]
});

var phoneDetailModel=mongoose.model('PhoneDetail',phoneSchema);
// var phonedetails=new phoneDetailModel({
//  name:'Ayesha',
//  email:'ayeshaferozahmad8@gmail.com',
//  number:6284279176,
//  dob:21-09-2019   
// });

//console.log(phonedetails);

// conn.on('connected',function(){
//     console.log("conne ction created")
// });

// conn.on('disconnected',function(){
//     console.log("disconnection created")
// });

// conn.on('error',console.error.bind(console,'conneection error'));

// conn.once('open', function(){
//     phonedetails.save(function(err,res){
//        if(err) throw err;
//         console.log(res);
//         conn.close();
//     })
// })

module.exports=phoneDetailModel;