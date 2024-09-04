// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
    'use strict'

    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.querySelectorAll('.needs-validation')

    // Loop over them and prevent submission
    Array.prototype.slice.call(forms)
        .forEach(function (form) {
            form.addEventListener('submit', function (event) {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }

                form.classList.add('was-validated')
            }, false)
        })
})()

// Form Handling

// Email Handling

var sendMail = function () {
    (function () {
        emailjs.init("2BVln4tRECisJ02fq");
    })();
    var params = {
        name: document.querySelector("#floatingName").value,
        email: document.querySelector("#floatingEmail").value,
        phone: document.querySelector("#floatingPhone").value,
        message: document.querySelector("#floatingTextArea").value
    };

    var serviceID = "service_ytygjvk";
    var templateID = "template_b1er2ae";

    emailjs.send(serviceID, templateID, params)
        .then(res => {
            swal("Message Sent", "Please wait for reply 😊", "success");
        }).catch();
}