// All Variable Declaration //
const userEmail = document.getElementById('email');
const userPassword = document.getElementById('password');
const signinBtn = document.getElementById('login-form'); 

// Function for Reset Input //

function reset(){
    userEmail.value = "";
    userPassword.value = "";
}

// Function for check user

function checkUser(event){
    event.preventDefault();
    let options = {
    body:JSON.stringify({  
        email : userEmail.value,
        pass : userPassword.value,
    }),
    headers : {
        "content-type" : "application/json"
    },
    method:'POST'
    };

fetch("https://aircampushack.onrender.com/forms/login",options)
.then((resolve)=>{
    alert("User Logged In Successfully")
    window.location.href = "main.html";
    return resolve.json() 

}).catch((error)=>{
    alert("User Not Available")
    alert(error);
})
    reset();
}

// Event Listener on Signin

signinBtn.addEventListener('submit',checkUser)
