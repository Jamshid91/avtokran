const rentBtns = document.querySelectorAll('.rent_btn'),
      popUpRent = document.querySelector('.popUp-rent'),
      popUpThanks = document.querySelector('.popUp-thanks');


rentBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        body.classList.add('bodyStopScroll')
        popUpRent.classList.remove('d-none')
    })
})






const user_name2 = document.getElementById('name2'),
      user_phone2 = document.getElementById('phone2'),
      user_email2 = document.getElementById('email2'),
      submit_btn2 = document.querySelector('.popUp .block10-form .form-btn');


submit_btn2.addEventListener('click', () => {
    checkInputs2();
    let successName2 = user_name2.nextElementSibling.classList,
        successPhone2 = user_phone2.nextElementSibling.classList,
        successEmail2 = user_email2.nextElementSibling.classList;

    if(successName2 == 'success' && successPhone2 == 'success' && successEmail2 == 'success') {
        popUpThanks.classList.remove('d-none');
        popUpRent.classList.add('d-none');
    }
})

function checkInputs2() {
    let user_value2 = user_name2.value.trim(),
        phone_value2 = user_phone2.value.trim(),
        email_value2 = user_email2.value.trim();

    if(user_value2 === '') {
        setErrorFor(user_name2, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_name2)
        user_name2.nextElementSibling.classList.add('success');
    }
    
    if(phone_value2 === '') {
        setErrorFor(user_phone2, '1px solid #E51017')
        
        } else {
        setSuccesFor(user_phone2)
        user_phone2.nextElementSibling.classList.add('success');
    }
    
    if(email_value2 === '') {
        setErrorFor(user_email2, '1px solid #E51017')
    }
        else if(!isEmail(email_value2)) {
            setErrorFor(user_email2, '1px solid #E47169')
        }
     else {
        setSuccesFor(user_email2)
        user_email2.nextElementSibling.classList.add('success');
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