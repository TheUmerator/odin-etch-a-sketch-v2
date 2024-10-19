
squareContainer=document.querySelector('.square-container');
// https://fonts.google.com/specimen/Cedarville+Cursive

for(i=1;i<=256;i++){
const squareDiv=document.createElement('div');
squareDiv.classList.add('square-div');
squareContainer.appendChild(squareDiv);
}

const squareDivs=document.querySelectorAll('.square-div');
const createBtn=document.querySelector('.create');
const clearBtn=document.querySelector('.clear');
const gridInput=document.querySelector('input');
squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseover',()=>{squareDiv.classList.add('hovered')})
    clearBtn.addEventListener('click',()=>{squareDiv.classList.remove('hovered')})
});

createBtn.addEventListener('click',()=>{
        // console.log(typeof (Number(gridInput.value)));
    // console.log(gridInput.value)
    // 500px x 500px
    // 16x16 grid is default
    // 500/16=31.25

    // Clear previously created grid
    const inputSquares=gridInput.value*2;

    squareDivs.forEach(squareDiv => {
        squareDiv.remove();
    });
    // Make a new grid


})
