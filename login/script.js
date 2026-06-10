document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Bypass CORS dengan mode no-cors tidak bisa dapat response
    // Pakai cara ini supaya bisa login
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);

    fetch('https://herisusanta.my.id/javalogin/api/', {
        method: 'POST',
        body: formData
    })
    .then(res => res.json())
    .then(data => {
        if (data.username) {
            localStorage.setItem('loggedUser', data.username);
            window.location.href = '../index.html';
        } else {
            alert('Login gagal! Username atau password salah.');
        }
    })
    .catch((err) => {
        alert('Error: ' + err.message);
    });
});
