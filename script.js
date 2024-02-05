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


// Handle the click event for Health Tech Support button
document.getElementById('healthTechSupportBtn').addEventListener('click', function () {
    // Open the Support Chat Modal
    $('#supportChatModal').modal('show');
});

// Function to send a message
function sendMessage() {
    var messageInput = document.getElementById("messageInput");
    var messageText = messageInput.value.trim();

    if (messageText !== "") {
        // Create a new user message
        var userMessage = document.createElement("div");
        userMessage.className = "message user-message";
        userMessage.textContent = messageText;

        // Append the user message to the chat container
        document.getElementById("liveChatContainer").appendChild(userMessage);

        // Clear the message input
        messageInput.value = "";

        // Simulate a reply from HealthTech Support (you can replace this with actual logic)
        setTimeout(function () {
            var supportMessage = document.createElement("div");
            supportMessage.className = "message support-message";
            supportMessage.textContent = "Thank you for reaching out! How can we assist you today?";
            document.getElementById("liveChatContainer").appendChild(supportMessage);

            // Scroll to the bottom to show the latest message
            var chatContainer = document.getElementById("liveChatContainer");
            chatContainer.scrollTop = chatContainer.scrollHeight;
        }, 500);
    }
}
