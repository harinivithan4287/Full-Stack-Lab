document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior

    // Get form values
    const firstName = document.getElementById("firstname").value;
    const lastName = document.getElementById("lastname").value;
    const mobile = document.getElementById("mobile").value;
    const address = document.getElementById("address").value;
    const file = document.getElementById("file").files[0]; // Assuming only one file is selected

    // Create a FormData object to append form data
    const formData = new FormData();
    formData.append("firstname", firstName);
    formData.append("lastname", lastName);
    formData.append("mobile", mobile);
    formData.append("address", address);
    formData.append("file", file);

    // Redirect to buy.html with form data
    window.location.href = "buy2.html?" + new URLSearchParams(formData).toString();
});
