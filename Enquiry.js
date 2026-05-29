// This idea mostly came from Gemini.

// To add a listener event for checking.
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".enquiry_form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        const radioButtons = document.querySelectorAll('input[name="type"]');
        let radioSelected = false;

        // This is to check if the selection menu has been selected or not.
        for (let radio of radioButtons) {

            if (radio.checked) {

                radioSelected = true;
                break;

            }

        }

        // Will output this alert if no selection made.
        if (!radioSelected) {

            alert("Please select a type of enquiry!");
            return;

        } 

        // Gets all the inputs.
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phonenumber").value;
        const city = document.getElementById("city").value;
        const message = document.getElementById("message").value;

        // Checks if the input is only spaces or is empty
        if (fullName.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || city.trim() === "" || message.trim() === "") {

            // Will output this alert if there are empty or space fields.
            alert("Please fill in all the requested fields!");
            return;

        }   else {

            // Brings the user back to the main page.
            window.location.href = 'index.html';

            // Will output this alert if everything has been filled.
            alert("Enquiry form submitted successfully!");

        }

    });


});