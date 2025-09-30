document.addEventListener('click', (event) => {
    // Lista de frases
    const frases = [
        "Te amo jaqui ❤️",
        "Eres mi todo 💕",
        "Siempre contigo 💖",
        "Mi vida eres tú 🌹",
        "Te extraño 😘",
        "Mi princesa 👑",
        "Siempre Seras especial para mi✨",
        "Mi corazon es tuyo 😘",
        "Siempre te voy a Amar 💓"
        
    ];

    // Elegir una frase aleatoria
    const frase = frases[Math.floor(Math.random() * frases.length)];

    const lovePopup = document.createElement('div');
    lovePopup.innerText = frase;
    lovePopup.className = 'love-text';

    lovePopup.style.left = `${event.clientX}px`;
    lovePopup.style.top = `${event.clientY}px`;

    document.body.appendChild(lovePopup);

    lovePopup.addEventListener('animationend', () => {
        lovePopup.remove();
    });
});
