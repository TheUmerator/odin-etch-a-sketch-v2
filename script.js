
squareContainer=document.querySelector('.square-container');
// https://fonts.google.com/specimen/Cedarville+Cursive

for(i=1;i<=256;i++){
squareDiv=document.createElement('div');
squareDiv.classList.add('square-div');

squareContainer.appendChild(squareDiv);


}

const squareDivs=document.querySelectorAll('.square-div');
const createBtn=document.querySelector('.create');
const clearBtn=document.querySelector('.clear');

squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseover',()=>{squareDiv.classList.add('hovered')})
    clearBtn.addEventListener('click',()=>{squareDiv.classList.remove('hovered')})
});
