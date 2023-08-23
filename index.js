const DEFAULT_COLOR = `#333333`;
const DEFAULT_MODE = `color`;
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentMode = DEFAULT_MODE;
let currentSize = DEFAULT_SIZE;

function setCurrentColor(newColor){
    currentColor = newColor;
}

function setCurrentMode(newMode){
    activateButton(newMode);
    currentMode = newMode;
}

function setCurrentSize(newSize){
    currentSize = newSize;
}

const colorPicker = document.getElementById('colorPicker')
const colorBtn = document.getElementById('colorBtn')
const rainbowBtn = document.getElementById('rainbowBtn')
const eraserBtn = document.getElementById('eraserBtn')
const clearBtn = document.getElementById('clearBtn')
const gridSize = document.getElementById(`gridSize`);
const sizeValue = document.getElementById(`rangeDiv`);
const container = document.getElementById(`container`);

colorPicker.oninput = (e) => setCurrentColor(e.target.value);
colorBtn.onclick = () => setCurrentMode(`color`);
rainbowBtn.onclick = () => setCurrentMode(`rainbow`);
eraserBtn.onclick = () => setCurrentMode(`eraser`);
clearBtn.onclick = () => reloadGrid();
gridSize.onmousemove = (e) => updateSizeValue(e.target.value);
gridSize.onchange = (e) => changeSize(e.target.value);

let mouseDown = false
document.body.onmousedown = () => (mouseDown = true)
document.body.onmouseup = () => (mouseDown = false)

function changeSize(value){
    setCurrentSize(value);
    updateSizeValue(value);
    reloadGrid();
}

function updateSizeValue(value){
    sizeValue.innerHTML = `${value} x ${value}`;
}

function reloadGrid(){
    clearGrid();
    setupGrid(currentSize);
}

function clearGrid(){
    container.innerHTML = '';
}

function setupGrid(size){
    container.style.gridTemplateColumns = `repeat(${size},1fr)`;
    container.style.gridTemplateRows = `repeat(${size},1fr)`;

    for (i = 0; i < (size * size); i++){
        const div = document.createElement('div')
        div.classList.add('div')
        div.addEventListener('mouseover', changeColor)
        div.addEventListener('mousedown', changeColor)
        container.appendChild(div)
    }
}

function changeColor(e){
    if(e.type === 'mouseover' && !mouseDown) return
    if(currentMode === `rainbow`){
        const randomR = Math.floor(Math.random() * 256);
        const randomG = Math.floor(Math.random() * 256);
        const randomB = Math.floor(Math.random() * 256);
        e.target.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;
    } else if(currentMode === `color`){
        e.target.style.backgroundColor = currentColor;
    } else if(currentMode === `eraser`){
        e.target.style.backgroundColor = `#fefefe`;
    }
}

function activateButton(newMode) {
    if(currentMode === `rainbow`){
        rainbowBtn.classList.remove('active');
    } else if(currentMode === `color`){
        colorBtn.classList.remove('active');
    } else if(currentMode === `eraser`){
        eraserBtn.classList.remove('active');
    }

    if(newMode === `rainbow`){
        rainbowBtn.classList.add('active');
    } else if(newMode === `color`){
        colorBtn.classList.add('active');
    } else if(newMode === `eraser`){
        eraserBtn.classList.add('active');
    }
}

window.onload = () => {
    setupGrid(DEFAULT_SIZE);
    activateButton(DEFAULT_MODE);
}