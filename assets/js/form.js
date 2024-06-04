
const user_name = document.getElementById('name'),
      user_phone = document.getElementById('phone'),
      user_email = document.getElementById('email'),
      submit_btn = document.querySelector('.block10-form .form-btn'),
      popUpThank = document.querySelector('.popUp-thanks');


submit_btn.addEventListener('click', () => {
    checkInputs();
    let successName = user_name.nextElementSibling.classList,
        successPhone = user_phone.nextElementSibling.classList,
        successEmail = user_email.nextElementSibling.classList;

    if(successName == 'success' && successPhone == 'success' && successEmail == 'success') {
        popUpThank.classList.remove('d-none')
    }
})

function checkInputs() {
    let user_value = user_name.value.trim(),
        phone_value = user_phone.value.trim(),
        email_value = user_email.value.trim();

    if(user_value === '') {
        setErrorFor(user_name, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_name)
        user_name.nextElementSibling.classList.add('success');
    }
    
    if(phone_value === '') {
        setErrorFor(user_phone, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_phone)
        user_phone.nextElementSibling.classList.add('success');
    }
    
    if(email_value === '') {
        setErrorFor(user_email, '1px solid #E51017')
    }
        else if(!isEmail(email_value)) {
            setErrorFor(user_email, '1px solid #E47169')
        }
     else {
        setSuccesFor(user_email)
        user_email.nextElementSibling.classList.add('success');
    }
}


// validate
function setErrorFor(input, border) {
    input.style.border = border
    input.parentElement.children[3].classList.add('error');
    input.parentElement.children[3].classList.remove('success');
}
    
function setSuccesFor(input) {
    input.style.border = `1px solid #F8E53B`;
    input.parentElement.children[3].classList.add('success');
    input.parentElement.children[3].classList.remove('error');
} 
    
    function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}    



// input mask
$("#phone").inputmask({"mask": "+7(999) 999-99-99"});