console.log("I am working and connected");

const menuBtn = document.querySelector('.nav-toggle');
const form = document.querySelector('.sign-up-box');

console.log(menuBtn);

menuBtn.addEventListener('click', () => {
    if(form.style.visibility === "hidden" || form.style.visibility === "" ) {
        form.style.visibility = "visible"
    } else if (form.style.visibility === "visible") {
        form.style.visibility = "hidden";
    }
    console.log(form.style.visibility);
})

const loginBox = document.querySelector('.login-box');
const loginLink = document.querySelector('.login-link');

loginLink.addEventListener('click', () => {
    loginBox.style.visibility = 'visible';
    form.style.visibility = "hidden";
});

const closeBtn = document.querySelector('.close-btn');
closeBtn.addEventListener('click', () => {
    loginBox.style.visibility = 'hidden';
})

const signUpBtn = document.querySelector('.sign-up-btn');
signUpBtn.addEventListener('click', () =>{
    form.style.visibility = "hiden";
})



console.log(closeBtn);