$(document).ready(function() {
    $("#registrationForm").on("submit", function(e) {
        e.preventDefault(); // Prevent default form submission
        this.submit(); // Submit the form
    });
});