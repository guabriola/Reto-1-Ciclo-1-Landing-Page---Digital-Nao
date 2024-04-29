/*
@fileoverview 
Lead form functions
It provides functionality and validates name and email.
*/
// @author Guillermo Abriola

//Funcion del EvenListener.
document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('InputEmail');
    const emailMessage = document.getElementById('emailHelp');
    const okButton = document.getElementById('ok-button');
    const nameErrorMessage = document.querySelector('.message-name-error');
    const emailErrorMessage = document.querySelector('.message-email-error');
    const formContainer = document.querySelector('.form-container');
    const thanksContainer = document.querySelector('.thanks-container');
    const catcherCards = document.querySelectorAll('.lead-catcher-card')
    const leadButtons = document.querySelectorAll('.lead-button');
    
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

    //Leads Button to Form
    //This function hide cards and shows the lead form.
    leadButtons.forEach(function(leadButton){
        leadButton.addEventListener('click', function (event) {
            catcherCards.forEach(function(catcherCard){
                catcherCard.style.display = 'none';
            })
            formContainer.style.display = 'block';
        });
    })

    //okButton functionality
    okButton.addEventListener('click', function (event) {
        form.reset();
        thanksContainer.style.display = 'none';
        catcherCards.forEach(function(catcherCard){
            catcherCard.style.display = 'block';
        })
    });

});