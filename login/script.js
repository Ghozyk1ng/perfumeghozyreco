document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Cek manual karena API kena CORS
    if (username === 'heri' && password === '123') {
        localStorage.setItem('loggedUser', 'heri');
        window.location.href = '../index.html';
    } else if (username === 'admin' && password === '123') {
        localStorage.setItem('loggedUser', 'admin');
        window.location.href = '../index.html';
    } else {
        alert('Login gagal! Username atau password salah.');
    }
});
