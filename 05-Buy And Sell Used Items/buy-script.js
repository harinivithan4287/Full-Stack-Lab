document.addEventListener("DOMContentLoaded", function() {
    // Get form data from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const detailsContainer = document.getElementById("details-container");

    // Display form details on the buy.html page
    detailsContainer.innerHTML = `
        <p><strong>First Name:</strong> ${urlParams.get("firstname")}</p>
        <p><strong>Last Name:</strong> ${urlParams.get("lastname")}</p>
        <p><strong>Mobile Number:</strong> ${urlParams.get("mobile")}</p>
        <p><strong>Address:</strong> ${urlParams.get("address")}</p>
        <p><strong>File:</strong> ${urlParams.get("file")}</p>
    `;
});
