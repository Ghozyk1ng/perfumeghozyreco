const user = localStorage.getItem('loggedUser');
const loginLink = document.querySelector('a[href*="login"]');

if (user && loginLink) {
    loginLink.textContent = 'Halo, ' + user;
    loginLink.href = '#';
    loginLink.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('loggedUser');
        location.reload();
    });
}
