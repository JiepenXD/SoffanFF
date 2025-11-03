document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const menu = document.querySelector('.menu');

    // Toggle the mobile menu visibility
    if (menuToggle && menu) {
        menuToggle.addEventListener('click', function () {
            menu.classList.toggle('active');
        });
    }

    // Dropdown functionality for mobile
    const dropdownLinks = document.querySelectorAll('.menu > li > a');

    dropdownLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            const dropdown = this.nextElementSibling;

            if (dropdown && dropdown.classList.contains('dropdown')) {
                event.preventDefault(); // Prevent the default link behavior
                // Toggle the dropdown visibility
                dropdown.classList.toggle('active');

                // Close other dropdowns
                const allDropdowns = document.querySelectorAll('.dropdown.active');
                allDropdowns.forEach(d => {
                    if (d !== dropdown) {
                        d.classList.remove('active');
                    }
                });
            }
        });
    });

    // Close dropdowns if clicking outside
    document.addEventListener('click', function(event) {
        const dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(dropdown => {
            if (!dropdown.contains(event.target) && !event.target.closest('.menu > li')) {
                dropdown.classList.remove('active');
            }
        });
    });
});
