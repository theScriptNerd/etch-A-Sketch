const runGame = (function(){
    const container = document.getElementById(`container`);
    const button = document.getElementById(`gridButton`);
    const clear = document.getElementById(`clearButton`);
    const gridSize = document.getElementById(`gridSize`);
    const rangeDiv = document.getElementById(`rangeDiv`);
    let isMouseDown = false;

    container.addEventListener('mousedown', () => {
        isMouseDown = true;
    });
    container.addEventListener('mouseup', () => {
        isMouseDown = false;
    });
    container.addEventListener('mouseleave', () => {
        isMouseDown = false;
    })
    gridSize.addEventListener('mousedown', () => {
        isMouseDown = true;
    })
    gridSize.addEventListener('mouseup', () => {
        isMouseDown = false;
    })
      
    container.addEventListener('mouseover', addCSS);
    gridSize.addEventListener('mousemove', setUpGrid);
    clear.addEventListener('click', clearGrid);

    const getGridSize = () => {
        return griddy = parseInt(gridSize.value);
    }
    function setRangeDiv(){
        const griddy = getGridSize();
        return rangeDiv.innerHTML = `${griddy} x ${griddy}`;
    }
    function setUpGrid(e){
        if(isMouseDown){
            setRangeDiv();
            createDivs();
        }
    }
    function addCSS(e) {
        if (isMouseDown) {
            e.target.classList.add(`hover-stick`);
        }
    }
    function clearGrid(){
        container.innerHTML = ``;
    }
    function createDivs(){
        clearGrid();
        const num = getGridSize();
        container.style.gridTemplateColumns = `repeat(${num},1fr)`;
        container.style.gridTemplateRows = `repeat(${num},1fr)`;
        for(i = 0; i < (num * num); i++){
            const divs = document.createElement('div');
            divs.classList.add(`div`);
            container.appendChild(divs);
        }
    }

    console.log(container);
    window.onload = () => {
        setRangeDiv();
        createDivs();
    };
})()
