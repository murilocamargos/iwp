const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

function verificaEstados(c1, c2, c3) {
    if (estadoCaixa[c1] !== undefined && 
        estadoCaixa[c1] === estadoCaixa[c2] &&
        estadoCaixa[c2] === estadoCaixa[c3]) {
            return estadoCaixa[c1];
        }
    return null;
}

function verificaGanhador() {
    const venceuLinha = verificaEstados('cx1', 'cx2', 'cx3') ||
        verificaEstados('cx4', 'cx5', 'cx6') ||
        verificaEstados('cx7', 'cx8', 'cx9');
    
    const venceuColuna = verificaEstados('cx1', 'cx4', 'cx7') ||
        verificaEstados('cx2', 'cx5', 'cx8') ||
        verificaEstados('cx3', 'cx6', 'cx9');
    
    const venceuDiagonal = verificaEstados('cx1', 'cx5', 'cx9') ||
        verificaEstados('cx3', 'cx5', 'cx7');
    
    const vencedor = venceuLinha || venceuColuna || venceuDiagonal;
    
    if (vencedor) {
        for (const caixa of caixasVazias) {
            caixa.removeEventListener('click', marcaX);
        }
        const h1 = document.querySelector('#vencedor');
        h1.textContent = 'Vencedor: ' + vencedor;
    }
}

function marcaO() {
    const indexCaixaEscolhida = Math.floor(Math.random() * caixasVazias.length);
    const caixaEscolhida = caixasVazias[indexCaixaEscolhida];
    
    if (caixaEscolhida) {
        const img = document.createElement('img');
        img.src = O_IMAGE_URL;
        caixaEscolhida.appendChild(img);
        caixaEscolhida.removeEventListener('click', marcaX);
        caixasVazias.splice(indexCaixaEscolhida, 1);
        estadoCaixa[caixaEscolhida.dataset.name] = 'o';
        verificaGanhador();
    }
}

function marcaX(event) {
    const caixaClicada = event.currentTarget;
    
    const img = document.createElement('img');
    img.src = X_IMAGE_URL;

    caixaClicada.appendChild(img);
    caixaClicada.removeEventListener('click', marcaX);

    const indiceCaixaClicada = caixasVazias.indexOf(caixaClicada);
    if (indiceCaixaClicada !== -1) {
        caixasVazias.splice(indiceCaixaClicada, 1);
    }

    estadoCaixa[caixaClicada.dataset.name] = 'x';
    verificaGanhador();

    marcaO();
}


const estadoCaixa = {};
const caixasVazias = [];
const caixas = document.querySelectorAll('#grid div');
for (let caixa of caixas) {
    caixa.addEventListener('click', marcaX);
    caixasVazias.push(caixa);
}