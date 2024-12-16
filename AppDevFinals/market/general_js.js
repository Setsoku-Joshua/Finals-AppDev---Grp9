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

        document.getElementById('loginFormContainer').style.display = 'none';
        const userMenu = document.getElementById('userMenu');
        userMenu.style.display = 'block';

        const loginIcon = document.querySelector('.login-icon');
        loginIcon.textContent = `Welcome, ${username}`;

        const loginText = document.querySelector('.dropdown-header span');
        loginText.style.display = 'none';
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

        document.getElementById('loginFormContainer').style.display = 'none';
        const userMenu = document.getElementById('userMenu');
        userMenu.style.display = 'block';

        const loginIcon = document.querySelector('.login-icon');
        loginIcon.textContent = `Welcome, ${username}`;
    }
    return false;
}

document.querySelector('.logo-link').addEventListener('click', (event) => {
    event.preventDefault(); 
    window.scrollTo({ top: 0, behavior: 'smooth' }); 
});


const images = [
    "images/banner1.jpg",
    "images/banner2.jpg",
    "images/banner3.jpg",
    "images/banner4.jpg",
    "images/banner5.jpg"
];

let currentImageIndex = 0;

const bannerImage = document.getElementById('bannerImage');
const dots = document.querySelectorAll('.dot');

function updateBanner() {
    // Update the banner image
    bannerImage.src = images[currentImageIndex];

    // Update the active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentImageIndex].classList.add('active');

    // Move to the next image
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Set an interval to rotate images every 5 seconds
setInterval(updateBanner, 5000);

// Add click event listeners to dots for manual switching
dots.forEach(dot => {
    dot.addEventListener('click', () => {
        currentImageIndex = parseInt(dot.dataset.index, 10);
        updateBanner();
    });
});

// Initialize the first active dot
updateBanner();

function changeBanner(direction) {
    // Adjust the current index based on direction (-1 for left, 1 for right)
    currentImageIndex = (currentImageIndex + direction + images.length) % images.length;
    updateBanner(); // Update the banner image and active dot
}