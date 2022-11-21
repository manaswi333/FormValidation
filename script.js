function validate(){
    //Get the values of username, email, phone number, password from registration form
    var user = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var pwd = document.getElementById("pwd").value;
    var con_pwd = document.getElementById("con_pwd").value;
   
    //Create regular expressions of your own choice
    var reg =/^[A-Za-z]{5,}$/;
    var reg1 =/^[A-Za-z0-9,|@#$^&*-_!?'"]{8,}$/;
    var reg2 =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/;
    var reg4 =/^[A-Za-z0-9]{10}$/;
    
    //If username matches given regex
    if(user.match(reg)){
        document.getElementById('usererror').innerHTML="";
    }
    //If username doesn't matches with given regex display text
    else{
        document.getElementById('usererror').innerHTML="Enter a valid username";
        return false;
    }

    //If email matches given regex
    if(email.match(reg2)){
        document.getElementById('emailerror').innerHTML="";
    }
    //If email doesn't matches with given regex display text
    else{
        document.getElementById('emailerror').innerHTML="Enter correct email";
        return false;
    }

    //If phone number matches given regex
    if(phone.match(reg4)){
        document.getElementById('phoneerror').innerHTML="";
    }
    //If phone number doesn't matches given regex
    else{
        document.getElementById('phoneerror').innerHTML="Enter 10-digit phone number";
        return false;
    }

    //If username and password are equal display text
    if(user == pwd){
        document.getElementById('pwderror').innerHTML="Password should not match with username";
        return false;
    }
    //If password matches with given regex
    else if(pwd.match(reg1)){
        document.getElementById('pwderror').innerHTML="";
    }
    //If password doesn't match with given regex
    else{
        document.getElementById('pwderror').innerHTML="Enter strong password";
        return false;
    }

    //If password and confirm password doesn't match then display text
    if(con_pwd != pwd){
        document.getElementById('con_pwderror').innerHTML="Passwords should match";
        return false;
    }
    //If password and confirm password are matched
    else{
        document.getElementById('con_pwderror').innerHTML="";
    }

}