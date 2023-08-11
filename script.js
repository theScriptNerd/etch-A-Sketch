const container = document.querySelector('.container');

const numOfDivs = () => {
    return parseInt(prompt('How much grid do you need? 8 x 8 , 16 x 16, 32 x 32 & 64 x 64 is what is needed'))
}
const num = numOfDivs();

function setGrid(){
    if(num === 16){
        container.classList.add(`sixteen`);
        container.classList.remove(`oneHundred`,`thirtySix`,`sixtyFour`);
    }
    else if(num === 36){
        container.classList.add(`thirtySix`);
        container.classList.remove(`sixteen`,`sixtyFour`,`oneHundred`);
    }
    else if(num === 64){
        container.classList.add(`sixtyFour`);
        container.classList.remove(`sixteen`,`thirtySix`,`oneHundred`);
    }
    else if(num === 100){
        container.classList.add(`oneHundred`);
        container.classList.remove(`sixteen`,`sixtyFour`,`thirtySix`);
    }
}
function createDivs(){
    for(i = 0; i < num; i++){
        const div = document.createElement('div');
        div.classList.add(`div`);
        container.appendChild(div);
    }
}
console.log(container);
createDivs()
setGrid()

// while (num !== 16 || 36 || 64 || 100){
//     numOfDivs();
// }