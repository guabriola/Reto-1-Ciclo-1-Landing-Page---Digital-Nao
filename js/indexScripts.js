/*
@fileoverview Index Scripts
It provides functionality to he index.html
*/
// @author Guillermo Abriola

//This function redirects to the lead form when the leads buttons are clicked.
document.addEventListener('DOMContentLoaded', function () {
    const leadButtons = document.querySelectorAll('.lead-button');

    leadButtons.forEach(function(leadButton){
        leadButton.addEventListener('click', function (event) {
            location.replace('leadForm.html');
        });
    })
});