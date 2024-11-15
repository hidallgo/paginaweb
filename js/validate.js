// Array para almacenar los datos del formulario
let favoriteArtists = [];

// Validación del formulario
function validateForm() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const artist = document.getElementById("artist").value.trim();
    const album = document.getElementById("album").value.trim();

    let valid = true;

    // Validar campos
    if (name === "") {
        document.getElementById("form-name").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("form-name").style.display = "none";
    }

    if (email === "" || !email.includes("@")) {
        document.getElementById("form-email").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("form-email").style.display = "none";
    }

    if (artist === "") {
        document.getElementById("form-artist").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("form-artist").style.display = "none";
    }

    if (album === "") {
        document.getElementById("form-album").style.display = "inline";
        valid = false;
    } else {
        document.getElementById("form-album").style.display = "none";
    }

    // Si los campos son válidos, agregar el artista y mostrar el mensaje
    if (valid) {
        addArtist({ name, email, artist, album });
        showNotification(artist);
        displayUserInfo(name, artist, album);
    }
}

// Función para agregar datos al array
function addArtist(data) {
    favoriteArtists.push(data);
    console.log("Lista de cantantes favoritos actualizada:", favoriteArtists);
}

// Mostrar notificación personalizada
function showNotification(artist) {
    alert(`¡Qué gran gusto tienes! A nosotros también nos gusta "${artist}".`);
}

// Mostrar la información del usuario debajo del formulario
function displayUserInfo(name, artist, album) {
    document.getElementById('displayName').textContent = name;
    document.getElementById('displayArtist').textContent = artist;
    document.getElementById('displayAlbum').textContent = album;

    // Mostrar el cuadro con la información del usuario
    document.getElementById('userInfo').style.display = 'block';
}
ñ