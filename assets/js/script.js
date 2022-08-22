var nameError = document.getElementById('name_error');
var nameValid = document.getElementById('name_valid');
var emailError = document.getElementById('email_error');
var emailValid = document.getElementById('email_valid');
var subjectError = document.getElementById('subject_error');

function validateName(){
    var name = document.getElementById('contact-name').value;

    
    if(name.trim() == ""){
        nameValid.innerHTML = "";
        nameError.innerHTML = "Name is required";  
        return false; 
    }
    else if(name.length<6){  
        nameValid.innerHTML = "";
        nameError.innerHTML = "Name must be at least 6 characters long.";  
        return false;  
    }  
    else{
        nameError.innerHTML = "";
        nameValid.innerHTML = "Valid";
        return true;
    }
}

function validateSubject(){
    var subject = document.getElementById('subject').value;
    if(subject.trim() == ""){
        subjectError.innerHTML = "Subject must exists"
        return false;
    }
    else{
        subjectError.innerHTML = "";
        return true;
    }
}

function validateEmail(){
    var email = document.getElementById('email').value;
    var mail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if(email.trim() == ""){
        emailValid.innerHTML = "";
        emailError.innerHTML = "Email is required"
        return false;
    }
    else if(!email.match(mail)){
        emailValid.innerHTML = "";
        emailError.innerHTML = "Invalid Email Format"
        return false;
    }
    else{
        emailError.innerHTML = "";
        emailValid.innerHTML = "Valid";
        return true;
    }
}


$("#submit-form").submit((e)=>{
    let valid_form= validateName() && validateEmail() && validateSubject();
    e.preventDefault()
    if (valid_form){
        $.ajax({
            url:"https://script.google.com/macros/s/AKfycbyNP9skm4BElH6jNf967RoDam818n-L047R12DsEyqn2m6j7lSo/exec",
            data:$("#submit-form").serialize(),
            method:"post",
            success:function (response){
                alert("Form submitted successfully")
                window.location.reload()
                //window.location.href="https://google.com"
            },
            error:function (err){
                alert("Something Error")

            }
        })
    }
})