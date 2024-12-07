function toggleLoginDropdown() {
    const dropdown = document.getElementById('loginDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

function closeDropdown() {
    const dropdown = document.getElementById('loginDropdown');
    dropdown.style.display = 'none';
}

function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    if (username) {
        // Hide the login form and "Login" text
        document.getElementById('loginFormContainer').style.display = 'none';
        document.getElementById('loginText').style.display = 'none';

        // Show the user menu
        const userMenu = document.getElementById('userMenu');
        userMenu.style.display = 'block';

        // Optionally update the login icon text
        const loginIcon = document.querySelector('.login-icon');
        loginIcon.textContent = `Welcome, ${username}`;
    }
    return false;
}
const announcements = [
    "Discounted item 1 available now!",
    "Free shipping on orders above $50!",
    "Limited time sale on gaming PCs!",
];

let currentAnnouncement = 0;
const announcementElement = document.querySelector('.announcement p');

function updateAnnouncement() {
    announcementElement.textContent = announcements[currentAnnouncement];
    currentAnnouncement = (currentAnnouncement + 1) % announcements.length;
}

// Rotate every 10 seconds
setInterval(updateAnnouncement, 10000);

function toggleLoginDropdown() {
    const dropdown = document.getElementById('loginDropdown');
    dropdown.style.display = dropdown.style.display === 'block' ? 'none' : 'block';
}

// Close the login dropdown
function closeDropdown() {
    const dropdown = document.getElementById('loginDropdown');
    dropdown.style.display = 'none';
}

// Handle login submission
function handleLogin(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    if (username) {
        // Replace the login form with the user menu
        document.getElementById('loginFormContainer').style.display = 'none';
        const userMenu = document.getElementById('userMenu');
        userMenu.style.display = 'block';

        // Optionally update the login icon text
        const loginIcon = document.querySelector('.login-icon');
        loginIcon.textContent = `Welcome, ${username}`;
    }
    return false;
}
