// script.js
// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', function() {
    // Select all elements with the class 'veg-icon-box'
    const vegIconBoxes = document.querySelectorAll('.veg-icon-box');
    
    // Loop through each iconBox and add the click event listener
    vegIconBoxes.forEach(function(iconBox) {
        iconBox.addEventListener('click', function() {
            // Redirect to the veg menu page
            window.location.href = 'veg_menu.html';
        });
    });

    // Select all elements with the class 'nonveg-icon-box'
    const nonVegIconBoxes = document.querySelectorAll('.nonveg-icon-box');
    
    // Loop through each iconBox and add the click event listener
    nonVegIconBoxes.forEach(function(iconBox) {
        iconBox.addEventListener('click', function() {
            // Redirect to a non-veg page (example)
            window.location.href = 'https://www.google.com';  // Replace with actual link
        });
    });
});


