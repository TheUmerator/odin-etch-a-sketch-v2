console.log('and were live')

squareContainer=document.querySelector('.square-container');
// https://fonts.google.com/specimen/Cedarville+Cursive

for(i=1;i<=256;i++){
squareDiv=document.createElement('div');
squareDiv.classList.add('square-div');

squareContainer.appendChild(squareDiv);

// squareDiv.addEventListener('mouseover',()=>{squareDiv.classList.add('hovered')})
}

const squareDivs=document.querySelectorAll('.square-div');

squareDivs.forEach(squareDiv => {
    squareDiv.addEventListener('mouseover',()=>{squareDiv.classList.add('hovered')})
});