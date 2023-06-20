/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';

/**
 * Write any other JavaScript below
 */


+(function () {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
})();

// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')
  var success = document.getElementById('succes-form')
  var formulario = document.getElementById('formulario')
  var titulo = document.getElementById('titulo')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        event.preventDefault()

        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()

        } else {
          formulario.setAttribute("style", "display:none;");
          titulo.setAttribute("style", "display:none;");
          success.setAttribute("style", "display:block;");
        }

        form.classList.add('was-validated')

      }, false)
    })
})()
