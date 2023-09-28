
function login(){
var username = document.getElementById('uname').value;
var password = document.getElementById('pass').value;

if(username=='Bhoomi' && password=='123')
{
    console.log('Login successfully');
    location.assign('file:///C:/Users/HP/Desktop/New%20Task/JS/Login%20Page/Welcome.html');
}
else
{
    window.alert('Wrong Username or Password');
}
}