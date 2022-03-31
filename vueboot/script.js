const container = document.querySelector('.container')
const btnBlack = document.createElement('button')
const btnRgb = document.createElement('button')
const btnGray = document.createElement('button')
const btnSize = document.createElement('button')
const section = document.querySelector('.section');
const buttonsContainer = document.querySelector('.buttons');

window.onload = () => {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => box.addEventListener('mouseover', () => {
        box.style.background = 'black'
    }))
}


function creatDivs(col , rows) {
    for(let i = 0;i < (col * rows); i++) {
        const div = document.createElement('div') 
        container.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        container.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
        container.appendChild(div).classList.add('box')
    }
}
creatDivs(16,16)




function blackColor() {
   
    const boxs = container.querySelectorAll('.box')
    btnBlack.textContent = 'BLACK';
    btnBlack.addEventListener('click', function () {
        boxs.forEach(box => box.addEventListener('mouseover', function() {
            this.style.background = 'black'
        }))
    })
    buttonsContainer.appendChild(btnBlack).classList.add('btn')
}
blackColor() 

function reSet() {
    const boxs = container.querySelectorAll('.box')
    boxs.forEach(box => {
        box.remove();
    })
}


function reSize() {
   
    btnSize.textContent = 'GRID SIZE'
    btnSize.addEventListener('click', () => {
        let user = prompt('WHAT SIZE YOU WANT YOUR GRID TO BE?')
        if(user === null || user < 1){
            reSet();
            creatDivs(16,16);
            grayColor();
            rgbColors();
            blackColor();
        } else { 
            reSet();
            creatDivs(user,user);
            grayColor();
            rgbColors();
            blackColor();
        }
    })
    buttonsContainer.appendChild(btnSize).classList.add('btn')
}
reSize()

