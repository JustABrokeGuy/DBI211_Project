// This idea mostly came from Gemini.

// To add a listener event for checking.
document.addEventListener("DOMContentLoaded", function() {

    const form = document.querySelector(".test_drive_form");

    form.addEventListener("submit", function (event) {

        event.preventDefault();

        // Gets all the inputs.
        const bookingDate = document.getElementById("bookingdate").value;
        const fullName = document.getElementById("fullname").value;
        const email = document.getElementById("email").value;
        const phoneNumber = document.getElementById("phonenumber").value;
        const city = document.getElementById("city").value;
        const fileUpload = document.getElementById("fileupload").value;

        // Checks if the input is only spaces or is empty
        if (bookingDate.trim() === "" || fullName.trim() === "" || email.trim() === "" || phoneNumber.trim() === "" || city.trim() === "" || fileUpload.trim() === "") {

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