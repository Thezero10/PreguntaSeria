const btnNo = document.getElementById('btnNo');
const button = document.getElementById('button');

btnNo.addEventListener('mouseenter', () => {
    const x = Math.floor(Math.random() * (window.innerWidth - btnNo.clientWidth));
    const y = Math.floor(Math.random() * (window.innerHeight - btnNo.clientHeight));
    btnNo.style.left = `${x}px`;
    btnNo.style.top = `${y}px`;
});

button.addEventListener('click', () => {
    button.style.transform = 'scale(1.2)'; // Botón "Sí" se hace más grande
    const audio = document.getElementById('audio');
    const imagen = document.getElementById('imagen');
    const buttons = document.querySelector('.buttons');
    const message = document.createElement('h2');
    const acad = document.createElement('h3');
    
    audio.play();
    imagen.style.display = 'block';
    buttons.style.display = 'none'; // Oculta los botones
    
    message.textContent = '¡Te Agradece!';
    message.style.textAlign = 'center';
    message.style.marginTop = '1px';
    acad.textContent = 'Thezero Academy';
    acad.style.textAlign = 'center';
    acad.style.marginTop = '1px';
    
    document.body.appendChild(message); // Muestra el mensaje de agradecimiento
    document.body.appendChild(acad); // Muestra el mensaje adicional
});