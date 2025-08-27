const counterDisplay = document.querySelector('.counter-display');
const minusBtn = document.querySelector('.minusBtn');
const plusBtn = document.querySelector('.plusBtn');
const colorBtn = document.querySelector('.colorBtn');
let count = 0;

function plusCount() {   //증가
    count = count + 1;
    counterDisplay.textContent = count; 
}

function minusCount() {   //감소
    count = count - 1;
    counterDisplay.textContent = count;
}

function getRandomColor() {
    const r = Math.floor(Math.random() * 256);   // 0~255 사이의 빨강  
    const g = Math.floor(Math.random() * 256);   // 0~255 사이의 초록
    const b = Math.floor(Math.random() * 256);   // 0~255 사이의 파랑
    
    return `rgb(${r}, ${g}, ${b})`;
}

function changeBackgroundColor() {
    const newColor = getRandomColor(); 
    document.body.style.backgroundColor = newColor;
}



plusBtn.addEventListener('click', plusCount);
minusBtn.addEventListener('click', minusCount);
colorBtn.addEventListener('click', changeBackgroundColor);