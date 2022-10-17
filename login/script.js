const password = document.querySelector(".password");
const username = document.querySelector(".username");
const usernamemsg = document.querySelector(".username-msg");
const passwordmsg = document.querySelector(".password-msg");
const loginbtn = document.querySelector(".btn");
const loginstatus = document.querySelector(".login-status");

loginbtn.addEventListener("click", logIn);



function logIn() {
//   event.PreventDefult();

const usernamevalid = username.value;
const passwordvalid = password.value;



  if (passwordvalid.length === 0) {
    passwordmsg.innertext = "please enter password";

  }
 
  else if (passwordvalid.length <= 4) {
    passwordmsg.innerText = "your password is tooshort";

  }

  if (usernamevalid.length === 0) {
    usernamemsg.innerText = "please enter username";

  }
  if (
    usernamevalid.length !==
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  ) {
    usernamemsg.innerText = "please entervalid username";
   
  }
}