document.getElementById('submit-btn').addEventListener('click', function(){
    // user email address:
    const userEmail = document.getElementById('user-email');
    const emailValue = userEmail.value; 

    // user email password: 
    const userPassword = document.getElementById('user-password');
    const passwardValue = userPassword.value;

    // btn e valid input dile arekta page e niye jabar jonno: 
    if (emailValue == 'shawon@bankac' && passwardValue == 'secret'){
        window.location.href = 'banking.html';
    }


});