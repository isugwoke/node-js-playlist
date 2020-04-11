const form = document.forms['signup'];
const email = form.email;

email.addEventListener('input', function(){
    let usrInput = email.value.trim();

    if (usrInput === ""){
        form.small.textContent = "Email cannot be Empty";
    }
});