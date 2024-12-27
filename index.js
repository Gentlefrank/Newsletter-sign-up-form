
const getForm = document.querySelector("form")
const getEmail= document.getElementById("email")
const getSubmitBtn=document.querySelector(".suscribe-btn")
const getError= document.getElementById("errorMsg")
//get div containers
const getSignupDiv= document.querySelector(".signup")
const getSuccessDiv= document.querySelector(".success")
const getDismissBtn= document.querySelector(".dismiss-btn")
const getDismissBtnLg= document.querySelector(".dismiss-btn-lg")
const largeDevices=  window.matchMedia("(min-width: 48rem)")
let emailValidation= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 
let theError= ""
 
getEmail.addEventListener('input', function(){
    if (getEmail.value===""){
        
        theError= "email cannot be empty"
        getSubmitBtn.style.opacity = "0.7"
        getSubmitBtn.disabled = true
        getEmail.style.border= "2px solid red"
         
        getError.textContent= `${theError}`
    }else if(!emailValidation.test(getEmail.value)){
        
        theError= "Please enter a correct email format"
        getSubmitBtn.style.opacity = "0.7"
        getSubmitBtn.disabled = true
          getError.textContent= `${theError}`
    }else if(emailValidation.test(getEmail.value)){
        getEmail.style.border= "2px solid green"
        getSubmitBtn.disabled = false
        getSubmitBtn.style.opacity = "1"
        theError= ""
        getError.textContent= `${theError}`
    }
})

const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(getEmail.value)
   
    if (getEmail.value!=="" && emailValidation.test(getEmail.value)){
        getSignupDiv.style.display = "none"
        getSuccessDiv.style.display = "flex"
        console.log("here we are")
        console.log(getSuccessDiv)
        console.log(getSuccessDiv.offsetHeight > 0); 
    } else{
        theError= "Something's not right. Please cross-check your email"
        getError.textContent= `${theError}`
        console.log("Cross-check your information")
    }
}

getForm.addEventListener("submit", handleSubmit)

getDismissBtn.addEventListener('click', function(){
    if (largeDevices.matches){
          getSignupDiv.style.display = "flex"
    getSuccessDiv.style.display = "none"
    }else{
          getSignupDiv.style.display = "block"
    getSuccessDiv.style.display = "none"  
    }

})


 