const fs=require("fs")

var user=[];

function userExist(mobileNumber){

 
}
function userValidation(mobileNumber){

    if(mobileNumber.length==10){
        return true;
    }else{
        return false;
    }
}

exports.registerMob=(req,res)=>{

    
    user.push[req.body.mob]

    res.send(user[15])
       
}
exports.userData=(req,res)=>{

    res.send(user);
    
}

