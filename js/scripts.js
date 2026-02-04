// Handle contact form submission
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent actual form submission

    // get user input
    const contactData = {
        firstName: document.getElementById("firstName").value,
        lastName: document.getElementById("lastName").value,
        phone: document.getElementById("phone").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    // Log data to console
    console.log(contactData);

    // return user to Home page
    window.location.href = "index.html";
});
