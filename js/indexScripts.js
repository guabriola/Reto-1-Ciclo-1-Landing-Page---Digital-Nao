document.addEventListener('DOMContentLoaded', function () {
    const leadButtons = document.querySelectorAll('.lead-button');

    leadButtons.forEach(function(leadButton){
        leadButton.addEventListener('click', function (event) {
            location.replace('leadForm.html');
        });
    })
});