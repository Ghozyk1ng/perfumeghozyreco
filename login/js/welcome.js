const user = localStorage.getItem('loggedUser');
const namaAkun = document.getElementById('namaAkun');

if (user && namaAkun) {
    namaAkun.textContent = 'Halo, ' + user;
    namaAkun.href = '#';

    // Pop up selamat datang
    alert('Selamat Datang, ' + user + '! 👋');

    // Klik untuk logout
    namaAkun.addEventListener('click', function(e) {
        e.preventDefault();
        localStorage.removeItem('loggedUser');
        location.reload();
    });
}
