// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'icon-box'
    const iconBoxes = document.querySelectorAll('.icon-box');
    
    // Loop through each iconBox and add the click event listener
    iconBoxes.forEach(function(iconBox) {
        iconBox.addEventListener('click', function() {
            // You can redirect to individual item pages here if needed
            window.location.href = '#';  // Replace with actual URL or logic
        });
    });
});
