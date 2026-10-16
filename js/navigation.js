/* Close the mobile menu after following a section link. */
const menu = document.getElementById('navbarSupportedContent');
const links = document.querySelectorAll('.navbar .nav-link');

links.forEach((link) => {
    link.addEventListener('click', () => {
        links.forEach((item) => item.removeAttribute('aria-current'));
        link.setAttribute('aria-current', 'location');

        if (menu.classList.contains('show') && window.bootstrap) {
            const collapse = window.bootstrap.Collapse.getOrCreateInstance(menu, { toggle: false });
            menu.addEventListener('hidden.bs.collapse', () => {
                const target = document.querySelector(link.hash);
                target.setAttribute('tabindex', '-1');
                target.focus({ preventScroll: true });
            }, { once: true });
            collapse.hide();
        }
    });
});
