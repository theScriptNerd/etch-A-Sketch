const runGame = (function(){
    const body = document.getElementById(`body`);
    const container = document.getElementById(`container`);
    const button = document.getElementById(`gridButton`);
    const clear = document.getElementById(`clearButton`);
    const gridSize = document.getElementById(`gridSize`);
    const rangeDiv = document.getElementById(`rangeDiv`);

    gridSize.addEventListener('mousemove', createDivs);
    clear.addEventListener('click', clearGrid);

    const getGridSize = () => {
        return griddy = parseInt(gridSize.value);
    }
    function setRangeDiv(){
        const griddy = getGridSize();
        return rangeDiv.innerHTML = `${griddy} x ${griddy}`;
    }

    function addCSS(e){
        e.target = e.target.classList.add(`hover-stick`);
    }
    function removeCSS(e){
        e.target = e.target.classList.remove(`hover`);
    }
    function clearGrid(){
        container.innerHTML = ``;
    }
    function createDivs(e){
        clearGrid();
        setRangeDiv();
        const num = getGridSize();
        container.style.gridTemplateColumns = `repeat(${num},1fr)`;
        container.style.gridTemplateRows = `repeat(${num},1fr)`;
    
        for(i = 0; i < (num * num); i++){
            const divs = document.createElement('div');
            divs.classList.add(`div`);
            divs.addEventListener('mousedown', addCSS);
            container.appendChild(divs);
        }
    }
    console.log(container);
    window.onload = () => {
        setRangeDiv();
        createDivs();
    };
})()