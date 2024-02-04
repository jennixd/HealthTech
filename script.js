function toggleSubmenu(submenuId) {
    var submenu = document.getElementById(submenuId);
    if (submenu.style.display === 'block') {
        submenu.style.display = 'none';
    } else {
        submenu.style.display = 'block';
    }
}

// Signup form
function handleSignupForm(event) {
    event.preventDefault();
    // Check if successful (replace with your actual logic)
    var isSignupSuccessful = true; 
    if (isSignupSuccessful) {
        // Get the entered username
        var username = document.getElementById('username').value;

        // Update the navigation menu with the image (replace 'path/to/image.jpg' with the actual path)
        var signupNavItem = document.getElementById('signupNavItem');
        signupNavItem.innerHTML = `<a class="nav-link" href="profile.html"><img src="assets\\icons\\pfp.png" alt="${username}" style="width: 60px; height: 60px; border-radius: 50%;"></a>`;

        // Close the modal
        $('#signupModal').modal('hide');
    }
}
