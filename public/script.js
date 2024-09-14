document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const userMessage = document.getElementById('user-message');
    const chatbox = document.getElementById('chatbox');

    sendButton.addEventListener('click', () => {
        const message = userMessage.value.trim();
        if (message) {
            chatbox.innerHTML += `<div>User: ${message}</div>`;
            userMessage.value = '';
            // Simulate a response from the AI
            setTimeout(() => {
                chatbox.innerHTML += `<div>Bot: This is a simulated response.</div>`;
                chatbox.scrollTop = chatbox.scrollHeight; // Scroll to the bottom
            }, 1000);
        }
    });

    userMessage.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            sendButton.click();
        }
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', () => {
        navbar.classList.toggle('active');
    });
});
function clearChat() {
    document.getElementById('chatbox').innerHTML = '';
}