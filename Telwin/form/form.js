document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    // Get form data
    let name = document.getElementById("name").value;
    let location = document.getElementById("location").value;
    let isDisabled = document.getElementById("checkbox").checked;

    // Store data in an object
    let formData = {
        name: name,
        location: location,
        isDisabled: isDisabled
    };

    console.log(formData); // Logs the form data object
});
