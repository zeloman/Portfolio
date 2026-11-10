
  document.getElementById("envoyer").addEventListener("click", function () {
    const nom = document.getElementById("nom").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!nom || !email || !message) {
      alert("Remplis tous les champs avant d'envoyer.");
      return;
    }

    const texte = "Bonjour, je suis " + nom + " (" + email + "). " + message;
    const lien = "https://wa.me/2250789043523?text=" + encodeURIComponent(texte);
    window.open(lien, "_blank");
  });