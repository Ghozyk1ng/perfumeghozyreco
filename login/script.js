document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    fetch('https://herisusanta.my.id/javalogin/api/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: username, password: password })
    })
    .then(res => res.json())
    .then(data => {
        if (data.username) {
            localStorage.setItem('loggedUser', data.username);
            window.location.href = '../index.html';
        } else {
            alert('Login gagal! Cek username dan password.');
        }
    })
    .catch(() => {
        alert('Gagal konek ke server.');
    });
});
