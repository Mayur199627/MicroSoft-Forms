// All Variable Declaration //
const logoutBtn = document.getElementById('logout-btn');
const editName = document.querySelector('.form-text');
const newForm = document.querySelector(".template-img");

logoutBtn.addEventListener('click',()=>{
    window.location.href = "index.html";
})

newForm.addEventListener('click',()=>{
    window.location.href = "form.html";
})