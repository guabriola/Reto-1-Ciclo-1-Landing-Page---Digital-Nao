document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('InputEmail');
    const emailMessage = document.getElementById('emailHelp');
    const okButton = document.getElementById('ok-button');
    const leadButton = document.getElementById('lead-button');
    const nameErrorMessage = document.querySelector('.message-name-error');
    const emailErrorMessage = document.querySelector('.message-email-error');
    const formContainer = document.querySelector('.form-container');
    const thanksContainer = document.querySelector('.thanks-container');
    const homeButton = document.querySelector('.navbar-brand');
    
    // Form Functionality
    form.addEventListener('submit', function (event) {

        let formOk = true;
        // Hide email message 
        emailMessage.style.display = 'none';


        // Name validation
        if (nameInput.value.trim().length < 3) {
            event.preventDefault();
            nameErrorMessage.style.display = 'block';
            formOk = false;
        } else {
            nameErrorMessage.style.display = 'none';
        }

        //Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value.trim())) {
            event.preventDefault();
            emailErrorMessage.style.display = 'block';
            formOk = false;

        } else {
            emailErrorMessage.style.display = 'none';
        }

        // Hide/Show Card and Form
        if (formOk == true) {
            event.preventDefault();
            formContainer.style.display = 'none';
            thanksContainer.style.display = 'block';
        }

    });

    // okButton functionality
    okButton.addEventListener('click', function (event) {
        form.reset();
        formContainer.style.display = 'block';
        thanksContainer.style.display = 'none';
    });

    // homeButton.addEventListener('click', function(event){
    //     location.replace('index.html');
    // });

    // leadButton.addEventListener('click', function(event){
    //     location.replace('leadForm.html');
    // });

});