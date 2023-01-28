// All Variables Declaration //

const username = document.getElementById('name');
const userEmail = document.getElementById('email');
const userPass = document.getElementById('password');
const userConfirmPass = document.getElementById('confirm-password');
const SignUpBtn = document.getElementById('submit')


//Function for Reset //
function reset(){
    username.value = "";
    userEmail.value = "";
    userPass.value = "";
    userConfirmPass.value = "";
}

// Function for Add User //
function addNewUser(event){
    event.preventDefault();
    if(userPass.value !== userConfirmPass.value){
        alert("Password does not match")
    }
    else if(username.value === "" || userEmail.value == "" || userPass.value === "" || userConfirmPass.value === ""){
        alert("Please Fill Information")
    }
    else{
        let id = Date.now();

        let options = {
            body:JSON.stringify({  
            email : userEmail.value,
            pass : userPass.value,
            }),
        headers : {
            "content-type" : "application/json"
        },
        method:'POST'
        };

        fetch("https://aircampushack.onrender.com/forms/signin",options)
        .then((resolve)=>{
            alert("User Register Successfully")
            window.location.href = "main.html";
            return resolve.json() 

        }).catch((error)=>{
            alert(error);
        })
    }

    reset()
    
}

// Event Listener for SignUp
   SignUpBtn.addEventListener('click',addNewUser)
