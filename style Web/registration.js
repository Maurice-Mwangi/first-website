// Executed when user is typing in real-time
function show_first_len(){
    const first_name = document.querySelector('#first_name');

    if(first_name.value.length < 3){
        document.querySelector('#warn_firstname').innerHTML = "<b>" + first_name.value.length + "/20 </b>";
        document.querySelector('#warn_firstname').style.color = 'red';
    }else if(first_name.value.length >= 3 && first_name.value.length < 21){
        document.querySelector('#warn_firstname').innerHTML = "<b>" + first_name.value.length + "/20 </b>";
        document.querySelector('#warn_firstname').style.color = 'black';
    }else{
        document.querySelector('#warn_firstname').innerHTML = "<b>" + first_name.value.length + "/20 </b>";
        document.querySelector('#warn_firstname').style.color = 'red';
    }
}


// Executed after user is done typing
function lostfocus(){
    if(document.querySelector('#first_name').value.length < 21 && document.querySelector('#first_name').value.length > 2){
        document.querySelector('#warn_firstname').innerHTML = "Accepted Range";
        document.querySelector('#warn_firstname').style.color = 'black';
    }else{
        document.querySelector('#warn_firstname').innerHTML = "<b>" + first_name.value.length + "/20 characters not accepted!!</b>";
        document.querySelector('#warn_firstname').style.color = 'red';
    }
}


function show_sir_len(){
    const sir_name = document.querySelector('#sir_name');

    if(sir_name.value.length < 3){
        document.querySelector('#warn_sirname').innerHTML = "<b>" + sir_name.value.length + "/20 </b>";
        document.querySelector('#warn_sirname').style.color = 'red';
    }else if(sir_name.value.length >= 3 && first_name.value.length < 21){
        document.querySelector('#warn_sirname').innerHTML = "<b>" + sir_name.value.length + "/20 </b>";
        document.querySelector('#warn_sirname').style.color = 'black';
    }else{
        document.querySelector('#warn_sirname').innerHTML = "<b>" + sir_name.value.length + "/20 </b>";
        document.querySelector('#warn_sirname').style.color = 'red';
    }
}

function sir_lostfocus(){
    if(document.querySelector('#sir_name').value.length < 21 && document.querySelector('#sir_name').value.length > 2){
        document.querySelector('#warn_sirname').innerHTML = "Accepted Range";
        document.querySelector('#warn_sirname').style.color = 'black';
    }else{
        document.querySelector('#warn_sirname').innerHTML = "<b>" + sir_name.value.length + "/20 characters not accepted!!</b>";
        document.querySelector('#warn_sirname').style.color = 'red';
    }
}