function validate_password(){
    var password = document.getElementById('user_password').value;
    var confirm_password = document.getElementById('confirm_password').value;
    var age = document.getElementById('age').value;
    if(age >= 18){
        document.getElementById('status1').innerHTML = "Eligible";
    }
    else{
        document.getElementById('status1').innerHTML = "Not Eligible";
    }
    
    if(password === confirm_password){
        document.getElementById('status').innerHTML = "Password Mactched";
    }else{
        document.getElementById('status').innerHTML = "Password Not Mactched";
    }
}