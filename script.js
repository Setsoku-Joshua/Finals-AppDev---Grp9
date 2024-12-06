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
        // Replace login form with user menu
        document.getElementById('loginFormContainer').style.display = 'none';
        const userMenu = document.getElementById('userMenu');
        userMenu.style.display = 'block';

        // Optionally, update user-specific display
        const loginTab = document.getElementById('loginTab');
        loginTab.textContent = `Welcome, ${username}`;
    }
    return false;
}
