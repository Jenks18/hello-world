document.addEventListener('DOMContentLoaded', () => {
    const sidebar = document.querySelector('.sidebar');
    const sidebarToggle = document.querySelector('.sidebar-toggle');
    const hasSubmenuItems = document.querySelectorAll('.has-submenu > a');
    const owesBanner = document.querySelector('.owes-banner');
    const currentBalance = document.querySelector('.summary-cards .balance');
    const payButton = document.querySelector('.header-actions .btn-primary');

    // Simulate user owing money
    const userOwes = true;

    if (userOwes) {
        owesBanner.classList.add('visible');
        currentBalance.classList.add('negative');
        currentBalance.textContent = "-$500.00";
        payButton.classList.add('attention');
    }


    sidebarToggle.addEventListener('click', () => {
        sidebar.classList.toggle('collapsed');
    });

    hasSubmenuItems.forEach(item => {
        item.addEventListener('click', (e) => {
            e.preventDefault();
            const parent = item.parentElement;
            parent.classList.toggle('open');
        });
    });
});
