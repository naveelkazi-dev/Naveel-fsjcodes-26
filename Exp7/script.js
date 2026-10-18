
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const responseDiv = document.getElementById('formResponse');

    // Validate fields are not empty
    if (name === "" || email === "" || message === "") {
        responseDiv.className = "form-response error";
        responseDiv.innerText = "Error: All fields are required!";
        return;
    }

    // Comprehensive email structure verification regex
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+\$/;
    if (!emailPattern.test(email)) {
        responseDiv.className = "form-response error";
        responseDiv.innerText = "Error: Please enter a valid email address!";
        return;
    }

    // Success deployment execution
    responseDiv.className = "form-response success";
    responseDiv.innerText = `Success! Thank you ${name}, your message has been sent.`;
    
    // Clear structural values out of elements
    document.getElementById('contactForm').reset();
});
