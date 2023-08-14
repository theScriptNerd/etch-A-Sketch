const container = document.querySelector('.container');

const numOfDivs = () => {
    return parseInt(prompt('How much grid do you need? 8 x 8 , 16 x 16, 32 x 32 & 64 x 64 is what is needed'))
}
const num = numOfDivs();

function createDivs(){
    container.style.gridTemplateColumns = `repeat(${num},1fr)`;
    container.style.gridTemplateRows = `repeat(${num},1fr)`;

    for(i = 0; i < num * num; i++){
        const div = document.createElement('div');
        div.classList.add(`div`);
        container.appendChild(div);
    }
}
console.log(container);
createDivs()
