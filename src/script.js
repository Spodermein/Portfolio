// Function to switch between tabs
function openTab(tabId) {
    // Get all tab content elements
    const tabContents = document.querySelectorAll('.tab-content');
    // Get all tab link buttons
    const tabLinks = document.querySelectorAll('.tab-link');

    // Hide all tab contents
    tabContents.forEach((content) => {
        content.classList.remove('active');
    });

    // Remove 'active' class from all tab links
    tabLinks.forEach((link) => {
        link.classList.remove('active');
    });

    // Show the clicked tab content
    document.getElementById(tabId).classList.add('active');

    // Add 'active' class to the clicked tab link
    const activeLink = Array.from(tabLinks).find(link => link.textContent.toLowerCase() === tabId);
    if (activeLink) {
        activeLink.classList.add('active');
    }
}

// Set the default active tab (Home)
document.addEventListener("DOMContentLoaded", function () {
    openTab('home');  // Set default tab on load
});
