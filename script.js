// script.js
document.getElementById('jeromeButton').addEventListener('click', function() {
    let password = prompt('Entrez le mot de passe:');
    if (password == 'motDePasseCorrect') { // Remplacez 'motDePasseCorrect' par votre mot de passe réel
        let isAtOffice = confirm('Êtes-vous au bureau ?');
        if (isAtOffice) {
            document.getElementById('officeStatus').src = 'images.jpg'; // Remplacez par l'image correspondante
        } else {
            document.getElementById('officeStatus').src = 'pasla.jpg'; // Remplacez par l'image correspondante
        }
    } else {
        alert('Mot de passe incorrect!');
    }
});
