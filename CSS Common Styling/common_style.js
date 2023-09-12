// first name while typing

function typeFirst_name(){
    first_name = document.querySelector('#first_name');
    warn_first = document.querySelector('#warn_firstname');
    if(first_name.value.length >= 3 && first_name.value.length <= 20){
        warn_first.innerText = first_name.value.length + "/20 characters.";
        warn_first.classList.remove('error_warn');
    }else{
        warn_first.classList.add('error_warn');
        warn_first.innerText = first_name.value.length + " characters not allowed"
    }
}


// firstname after losing focus

function leaveFirst_name(){
    first_name = document.querySelector('#first_name');
    warn_first = document.querySelector('#warn_firstname');
    if(first_name.value.length < 3 || first_name.value.length > 20){
        first_name.classList.add('error_input');
        warn_first.innerText= first_name.value.length + " characters not allowed!!";
        warn_first.classList.add('error_warn');
    }else{
        first_name.classList.remove('error_input');
        warn_first.innerText="";
        warn_first.classList.remove('error_warn');
    }
}


// sir name while typing

function typeSir_name(){
    sir_name = document.querySelector('#sir_name');
    warn_sir = document.querySelector('#warn_sirname');
    if(sir_name.value.length >= 3 && sir_name.value.length <= 20){
        warn_sir.innerText = sir_name.value.length + "/20 characters.";
        warn_sir.classList.remove('error_warn');
    }else{
        warn_sir.classList.add('error_warn');
        warn_sir.innerText = sir_name.value.length + " characters not allowed"
    }
}


// sirname after losing focus

function leaveSir_name(){
    sir_name = document.querySelector('#sir_name');
    warn_sir = document.querySelector('#warn_sirname');
    if(sir_name.value.length < 3 || sir_name.value.length > 20){
        sir_name.classList.add('error_input');
        warn_sir.innerText= sir_name.value.length + " characters not allowed!!";
        warn_sir.classList.add('error_warn');
    }else{
        sir_name.classList.remove('error_input');
        warn_sir.innerText="";
        warn_sir.classList.remove('error_warn');
    }
}

// phone while typing

function typePhone(){
    phone = document.querySelector('#phone');
    warn_phone = document.querySelector('#warn_phone');
    if(phone.value.length == 10){
        warn_phone.innerText = phone.value.length + " characters allowed";
        warn_phone.classList.remove('error_warn');
    }else{
        warn_phone.classList.add('error_warn');
        warn_phone.innerText = phone.value.length + " characters not allowed"
    }
}


// phone after losing focus

function leavePhone(){
    phone = document.querySelector('#phone');
    warn_phone = document.querySelector('#warn_phone');
    if(phone.value.length != 10){
        phone.classList.add('error_input');
        warn_phone.innerText= phone.value.length + " characters not allowed!!";
        warn_phone.classList.add('error_warn');
    }else{
        phone.classList.remove('error_input');
        warn_phone.innerText="";
        warn_phone.classList.remove('error_warn');
    }
}


// sir name while typing

function typeUsername(){
    username = document.querySelector('#username');
    warn_username = document.querySelector('#warn_username');
    if(username.value.length >= 5 && username.value.length <= 20){
        warn_username.innerText = username.value.length + "/20 characters.";
        warn_username.classList.remove('error_warn');
    }else{
        warn_username.classList.add('error_warn');
        warn_username.innerText = username.value.length + " characters not allowed"
    }
}


// sirname after losing focus

function leaveUsername(){
    username = document.querySelector('#username');
    warn_username = document.querySelector('#warn_username');
    if(username.value.length < 6 || username.value.length > 20){
        username.classList.add('error_input');
        warn_username.innerText= username.value.length + " characters not allowed!!";
        warn_username.classList.add('error_warn');
    }else{
        username.classList.remove('error_input');
        warn_username.innerText="";
        warn_username.classList.remove('error_warn');
    }
}


// password while typing

function typePassword(){
    password = document.querySelector('#pass');
    warn_pass = document.querySelector('#warn_pass');
    if(password.value.length >= 6 && password.value.length <= 20){
        warn_pass.innerText =  "Password is of valid length";
        warn_pass.classList.remove('error_warn');
    }else{
        warn_pass.classList.add('error_warn');
        warn_pass.innerText = password.value.length + " characters not allowed"
    }
}


// password after losing focus

function leavePassword(){
    password = document.querySelector('#pass');
    warn_pass = document.querySelector('#warn_pass');
    if(password.value.length < 6 || password.value.length > 20){
        password.classList.add('error_input');
        warn_pass.innerText= password.value.length + " characters not allowed!!";
        warn_pass.classList.add('error_warn');
    }else{
        password.classList.remove('error_input');
        warn_pass.innerText="";
        warn_pass.classList.remove('error_warn');
    }
}

// password after losing focus

function leavecPassword(){
    cPass = document.querySelector('#cPass');
    password = document.querySelector('#pass');
    warn_cpass = document.querySelector('#warn_cpass');
    if(password.value.length == 0){
        cPass.classList.add('error_input');
        warn_cpass.innerText = "Input Password First!!!!";
        warn_cpass.classList.add('error_warn');
    }else if(password.value != cPass.value){
        cPass.classList.add('error_input');
        warn_cpass.innerText = "Passwords do not match!!!!";
        warn_cpass.classList.add('error_warn');
    }else{
        cPass.classList.remove('error_input');
        warn_cpass.innerText="";
        warn_cpass.classList.remove('error_warn');
    }
}