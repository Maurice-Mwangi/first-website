function checkMail(str){

    let xhr = new XMLHttpRequest();

    if(str.length === 0){
        document.querySelector('.error').innerText = "Email cannot be empty";
    }else{
            
        xhr.onload = function(){
            if(this.status == 200){
                document.querySelector('.error').innerText = this.responseText;
                if(this.responseText.length > 0){
                    document.querySelector('#mail').value = "";
                    return false;
                }else{
                    document.querySelector('.error').innerText = "";
                }
            }
        };

        xhr.open('GET', 'validate.php?mail=' + str, true);

        xhr.send();

    }

}


function checkEntry(){
    let error = 0;
    const names = document.querySelector('#name').value;
    const bdate = document.querySelector('#date').value;
    const email = document.querySelector('#mail').value;

    if(document.querySelector('.error').innerText.length > 0){
        error = 1;
    } else if(names.length === 0){
        error = 1;
    } else if(bdate.length === 0){
        error = 1;
    } else if(email.length === 0){
        error = 1;
    }

    if(error === 1){
        event.preventDefault();
    }
        
}