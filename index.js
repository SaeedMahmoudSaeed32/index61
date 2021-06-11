function validation()
{
    'use strict';
    var age=document.getElementById("age"),
        number=document.getElementById("number"),
        pass=document.getElementById("pass"),
        first=(pass.value).substr(0,1);

    if(age.value<0)
    {
        document.getElementById("div3").innerHTML="please,enter a valid age";
        return false;
    }

    if(isNaN(age.value))
    {
        document.getElementById("div3").innerHTML="please,enter a valid age";
        return false;
    }

    if(isNaN(number.value))
    {
        document.getElementById("div4").innerHTML="please,enter a valid phone number";
        return false;
    }

    if((pass.value).length!==8)
    {
        document.getElementById("div8").innerHTML="password must be 8 characters";
        return false;
    }
    if((pass.value).search(/[ ]/)!=-1)
    {
        document.getElementById("div8").innerHTML="password cannot contain a space";
        return false;
    }

    if(!(first.match(/[A-Z]/))){
        document.getElementById("div8").innerHTML="password must start with an aupper character";
        return false;
    }

    if((pass.value).search(/[a-z]/)==-1){
        document.getElementById("div8").innerHTML="password must contain at least 1 lower character";
       return false;//
   }
    
    if((pass.value).search(/[0-9]/)==-1){
    document.getElementById("div8").innerHTML="password must contain a number";
    return false;
    }

    if((pass.value).search(/[!/@/#/$/%/^/&/*/>/<]/)==-1)
    {
        document.getElementById("div8").innerHTML="password must contain at least 1 special character";
        return false;
    }
    else
    {
     return true;
    }
}