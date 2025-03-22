// your code goes here
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // You can add code here to handle the form submission
    // For example, you could send the data to a server using AJAX

    // For now, let's just display an alert
    alert('Form submitted! (This is a placeholder - you need to implement the actual submission)');

    // Optionally clear the form
    document.getElementById('contact-form').reset();
});