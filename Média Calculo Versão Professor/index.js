document.addEventListener('DOMContentLoaded', () => {
    const inputNotas = document.getElementById('nota-input');
    const notasDiv = document.getElementById('notas');
    const mediaDiv = document.getElementById('media');
    const addButton = document.getElementById('add-button');
    const mediaButton = document.getElementById('calculate-button');
    let notasMediaList = [];

    const adicionarNota = () => {
        const nota = parseFloat(inputNotas.value);

        if (isNotaValida(nota)) {
            notasMediaList.push(nota);
            inputNotas.value = '';
            exibirNotas();
        }
        else {
            alert('Por favor, insira um número de 0 a 10!');
        }
    };

    const isNotaValida = (nota) => {
        return !isNaN(nota) && nota >= 0 && nota <= 10;
    };

    const exibirNotas = () => {
        notasDiv.innerHTML = `<p>Notas: ${notasMediaList.join(', ')}</p>`;
    };

    addButton.addEventListener('click', adicionarNota);

    const calcularMedia = () => {
        let mediaValor = 0;
        for (let i = 0; i < notasMediaList.length; i++) {
            mediaValor += notasMediaList[i];
        }
        return mediaValor / notasMediaList.length;
    };

    const exibirMedia = () => {
        const mediaCalculada = calcularMedia();

        if (isNaN(mediaCalculada)) {
            alert('Não há notas para calcular a média!');
            return;
        }

        const liMedia = document.createElement('li');
        liMedia.innerHTML = `
            <span>Média: ${mediaCalculada.toFixed(2)}</span>
        `;
        mediaDiv.appendChild(liMedia);
    };

    mediaButton.addEventListener('click', exibirMedia);
});