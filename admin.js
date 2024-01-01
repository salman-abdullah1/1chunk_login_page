// <!-- Add this block to your HTML file, just before the closing </body> tag -->

    // Function to handle admin registration form submission
    function submitAdminRegistrationForm() {
        // Get form elements
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var email = document.getElementById("email").value;
        var cnic = document.getElementById("cnic").value;
        var age = document.getElementById("age").value;
        var address = document.getElementById("address").value;
        var gender = document.getElementById("gender").value;
        var contactNumber = document.getElementById("contactNumber").value;

        // Validate form data (you can add more validation logic)
        if (firstName === "" || lastName === "" || email === "" || age === "" || address === "" || gender === "") {
            alert("Please fill in all the required fields");
            return false;
        }

        // Validate CNIC (numeric value only)
        if (!/^\d+$/.test(cnic)) {
            alert("Please enter a valid CNIC (numeric values only)");
            return false;
        }

        // Validate contact number (numeric value only)
        if (!/^\d+$/.test(contactNumber)) {
            alert("Please enter a valid contact number (numeric values only)");
            return false;
        }

        // You can add more specific validation logic for other fields if needed

        // If all validations pass, you can submit the form or perform further actions
        alert("Admin registration form submitted successfully!");
        return true;
    }

                    