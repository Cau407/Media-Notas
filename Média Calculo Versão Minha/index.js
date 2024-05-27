document.addEventListener('DOMContentLoaded', () => {
    const inputNotas = document.getElementById('nota-input');
    const notasDiv = document.getElementById('notas');
    const mediaDiv = document.getElementById('media');
    const addButton = document.getElementById('add-button');
    const mediaButton = document.getElementById('calculate-button');
    let notasMediaList = [];

    const addNota = () => {
        const notaValor = parseFloat(inputNotas.value);
        if (!isNaN(notaValor) && notaValor <= 10) {
            const liNota = document.createElement('li');
            liNota.innerHTML = `
            <span>Nota: ${notaValor}</span>
            <button class='delete-btn'>Delete</button>
            `;
            notasDiv.appendChild(liNota);

            liNota.querySelector('.delete-btn').addEventListener('click', () => {
                liNota.remove();
                notasMediaList = notasMediaList.filter(nota => nota !== notaValor);
            });

            liNota.addEventListener('click', () => {
                liNota.classList.toggle('completed');
            });
            notasMediaList.push(notaValor);

            inputNotas.value = '';
        }
    };
    addButton.addEventListener('click', addNota);

    inputNotas.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addNota();
        }
    });

    const calcMedia = () => {
        let mediaValor = 0;
        for (let i = 0; i < notasMediaList.length; i++) {
            mediaValor += notasMediaList[i];
        }
        const mediaCalculada = mediaValor / notasMediaList.length;
        const liMedia = document.createElement('li');
        liMedia.innerHTML = `
        <span>Média: ${mediaCalculada.toFixed(2)}</span>
        <button class='delete-btn'>Delete</button>
        `;
        mediaDiv.appendChild(liMedia);
        liMedia.querySelector('.delete-btn').addEventListener('click', () => {
            liMedia.remove();
        });

        liMedia.addEventListener('click', () => {
            liMedia.classList.toggle('completed');
        });
    };
    mediaButton.addEventListener('click', calcMedia);
});