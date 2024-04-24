//   // Función para validar el formulario
//   function validateForm(event) {
//     // Evitar que el formulario se envíe por defecto
//     event.preventDefault();

//     // Obtener los valores de los campos de entrada
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("InputEmail1").value;

//     // Validar si el nombre está lleno
//     if (name.trim() === "") {
//       alert("Por favor ingresa tu nombre.");
//       return false;
//     }

//     // Validar si el correo electrónico es válido
//     var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (!emailPattern.test(email)) {
//       alert("Por favor ingresa un correo electrónico válido.");
//       return false;
//     }

//     // Si pasa todas las validaciones, enviar el formulario
//     alert("¡Formulario enviado correctamente!");
//     // Aquí puedes agregar código adicional para enviar el formulario a través de AJAX o realizar otras acciones necesarias
//     return true;
//   }

//   // Agregar un listener al evento 'submit' del formulario
//   document.getElementById("form").addEventListener("submit", validateForm);