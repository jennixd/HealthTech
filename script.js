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
        signupNavItem.innerHTML = `<a class="nav-link" href="index.html"><img src="assets\\icons\\points.png" alt="${username}" style="width: 50px; height: 50px; border-radius: 50%;"></a>`;

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

//submit form
function submitAppointment() {
    // Perform form validation here (you can use a more robust validation library)
    var fullName = $("#fullName").val();
    var ic = $("#ic").val();
    var email = $("#email").val();
    var phone = $("#phone").val();
    var appointmentCategory = $("#appointmentCategory").val();
    var appointmentDate = $("#appointmentDate").val();
    var appointmentTime = $("#appointmentTime").val();
    var additionalInformation = $("#additionalInformation").val();

    if (fullName && ic && email && phone && appointmentCategory && appointmentDate && appointmentTime) {
        // Form is valid, show alert and reset form
        alert("Appointment Submitted!\nYou have earned yourself a badge!\nGratitude for supporting health checkup, community well-being uplifted\n(Appointment cancelling will lead to removal of badge)");
        // Reset the form
        document.getElementById("appointmentForm").reset();
    } else {
        // Form is not valid, show an error message or handle it as needed
        alert("Please fill in all required fields.");
    }
}

//quiz
function submitQuiz() {
    // Get the selected answer
    var selectedAnswer = document.querySelector('input[name="quizOption"]:checked');
    
    if (selectedAnswer) {
        var selectedValue = selectedAnswer.value;
        // Check the selected answer against the correct answer
        var correctAnswer = "Sweets"; // Correct answer is "Sweets"
        
        if (selectedValue === correctAnswer) {
            // If the selected answer is correct
            alert("Congratulations! You answered correctly and earned 100 points!");

            // Redirect to points.html
            window.location.href = "points.html";
        } else {
            // If the selected answer is incorrect
            alert("Oops! That's not the correct answer. Try again!");
        }
    } else {
        // If no answer is selected
        alert("Please select an answer.");
    }
}

function validateForm() {
    var reportingFor = document.getElementById("reportingFor").value;
    var name = document.getElementById("name").value;
    var icNumber = document.getElementById("icNumber").value;
    var positiveTestImage = document.getElementById("positiveTestImage").value;
    var address = document.getElementById("address").value;

    // Check if any field is empty
    if (reportingFor === "" || name === "" || icNumber === "" || positiveTestImage === "" || address === "") {
        alert("Please fill in all fields.");
        return false;
    }

    // Add additional validation logic here if needed

    // Show success alert and return true for form submission
    alert("Done! Thank you for submitting your covid results. Keep going until you are negative! :)\nYou have earned: 25 points");
    return true;
}

// Function to create a new forum post
function createPost() {
    const postTitle = document.getElementById('post-title').value;
    const postContent = document.getElementById('post-content').value;

    if (postTitle.trim() !== '' && postContent.trim() !== '') {
        // Create HTML structure for new post
        const newPostHTML = `
            <div class="forum-topic">
                <h3 class="topic-title">${postTitle}</h3>
                <p class="topic-content">${postContent}</p>
                <div class="forum-replies"></div>
                <div class="reply-form" style="display: none;">
                    <label for="reply-content">Your Reply:</label>
                    <textarea class="form-control" rows="2" placeholder="Enter your reply"></textarea>
                    <div class="button-container">
                        <button class="btn comment-btn reply-btn" onclick="postReply(this)">Reply</button>
                        <button class="btn comment-btn reply-btn" onclick="toggleReplyForm(this)">Comment</button>
                    </div>
                </div>
            </div>
        `;
        
        // Append new post to forum container
        document.getElementById('forum-container').innerHTML += newPostHTML;

        // Clear input fields
        document.getElementById('post-title').value = '';
        document.getElementById('post-content').value = '';
    } else {
        // Show error message for incomplete post
        alert('Please enter both title and content for the post.');
    }
}

// Function to toggle reply form visibility
function toggleReplyForm(button) {
    const parentTopic = button.closest('.forum-topic'); // Find the closest parent with class 'forum-topic'
    const replyForm = parentTopic.querySelector('.reply-form'); // Find the reply form within the parent topic
    if (replyForm.style.display === 'none' || replyForm.style.display === '') {
        replyForm.style.display = 'block';
    } else {
        replyForm.style.display = 'none';
    }
}

// Function to post a reply
function postReply(button) {
    const replyContent = button.parentNode.querySelector('textarea').value;

    if (replyContent.trim() !== '') {
        // Create HTML structure for the reply
        const replyHTML = `
            <div class="forum-reply">
                <p>${replyContent}</p>
            </div>
        `;
        
        // Find the closest parent forum topic
        const parentTopic = button.closest('.forum-topic');

        // Append the reply to the corresponding forum topic
        const forumReplies = parentTopic.querySelector('.forum-replies');
        forumReplies.innerHTML += replyHTML;

        // Clear reply input field and hide the reply form
        button.parentNode.querySelector('textarea').value = '';
        button.parentNode.style.display = 'none';
    } else {
        alert('Please enter your reply.');
    }
}

