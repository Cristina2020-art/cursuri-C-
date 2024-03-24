document.addEventListener('DOMContentLoaded', function() {
    const imagini = document.querySelectorAll('.imagini img');

    imagini.forEach(function(img) {
        img.addEventListener('click', function() {
            this.classList.toggle('marita');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const formular = document.getElementById('contact-form');
    const rezultat = document.getElementById('rezultat');

    formular.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenirea trimiterii formularului

        const formData = new FormData(this);

        // Aici puteți face ceva cu datele formularului, cum ar fi trimiteți-le la un server

        rezultat.innerHTML = '<p>Mesajul a fost trimis cu succes!</p>';

        // În cazul în care doriți să resetați formularul după trimiterea cu succes, puteți folosi următoarea linie
        // this.reset();
    });
});
