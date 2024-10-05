document.addEventListener('DOMContentLoaded', () => {
    const sendButton = document.getElementById('send-button');
    const userMessage = document.getElementById('user-message');
    const chatbox = document.getElementById('chatbox');
    const userlogin=document.getElementById('login-signup')
    const userloginWin=document.getElementById('login-signup-popup')
    userlogin.addEventListener("click",()=>{
        userloginWin.classList.remove("hidden")
    })

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
    var iframe = document.getElementById('chatbox');
    iframe.src = iframe.src;
}
const signupPage = document.getElementById('signupPopup');
const loginPage = document.getElementById('loginPopup');
const createAccBtn = document.getElementById('acc-btn');
const loginBtn = document.getElementById('login-btn');
const closeBtn = document.getElementById('close-btn');

createAccBtn.addEventListener("click", () => {
    signupPage.classList.remove('hidden');
});

loginBtn.addEventListener("click", () => {
    loginPage.classList.remove('hidden');
});

closeBtn.addEventListener("click", () => {
    signupPage.classList.add("hidden");
    loginPage.classList.add("hidden");
});

document.getElementById('signupForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        name: formData.get("name"),
        email: formData.get("email"),
        password: formData.get("password")
    };

    try {
        const response = await fetch("/auth/signup", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            alert("Thank you for signing in...You may now login to access X")
            signupPage.classList.add("hidden");
            loginPage.classList.remove("hidden");
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
    }
});
document.getElementById('loginForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const userData = {
        email: formData.get("email"),
        password: formData.get("password")
    };

    try {
        const response = await fetch("/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(userData)
        });

        const result = await response.json();
        if (response.ok) {
            alert(result.message);
            alert("Login Successful...redirecting you")
            window.location.href = "/welcome"
        } else {
            alert(result.message);
        }
    } catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
});
