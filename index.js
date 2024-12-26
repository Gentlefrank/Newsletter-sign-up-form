
const getForm = document.querySelector("form")
const getEmail= document.getElementById("email")
let submitErr= true
let emailValidation= /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const handleSubmit =(e)=> {
    e.preventDefault();
    console.log(getEmail.value)
    if (!emailValidation.test(getEmail.value)){
        console.log("incorrect email pattern")
    } else{
        submitErr= true
        console.log("good ")
    }
}

getForm.addEventListener("submit", handleSubmit)