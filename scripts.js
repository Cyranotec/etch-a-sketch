const container = document.querySelector('#container');
const log = document.querySelector('#log');

function generateGrid(x) {
    container.innerHTML = '';
    total = (x * x) + 1;
    for (let i = 1; i < total; i++) {
        const div = document.createElement('div');
        // div.textContent = i;
        div.style.setProperty('opacity', '.1');
        div.addEventListener('mouseenter', follow)

        container.appendChild(div);
    }
    document.documentElement.style.setProperty('--columns', x)
}

function askForColumns() {
    const columnas = prompt('Indica el número de columnas (<=64)');
    if (columnas <= 64) {
        generateGrid(columnas);
    }
    else {
        alert('El número de columnas debe ser igual o menor a 64');
    }
}

function follow(e) {
    // poner color aleatorio al MediaElementAudioSourceNode
    const color = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    e.target.style.setProperty('background-color', color);
    // aumentar la opacidad hasta llegar a q
    const opacidad = parseFloat(window.getComputedStyle(e.target).opacity);
    //Si la opacidad está al máximo se resetea
    const nuevaOpacidad = opacidad == 1 ? .1 : Math.min(opacidad + .1, 1);
    e.target.style.setProperty('opacity', nuevaOpacidad);   

    console.log(`${e.target.textContent} : ${nuevaOpacidad}`)

}


document.querySelector('#genNew').addEventListener('click', askForColumns);
generateGrid(16);