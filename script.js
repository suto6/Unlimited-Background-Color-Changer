const randomColor = function () {
    const hexValue = "0123456789ABCDEF";
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexValue[Math.floor(Math.random() * 16)]
    }
    return color;
}
let intervalId;
const startChangingColor = () => {
    if(!intervalId){
        intervalId = setInterval(changeColor, 1000);
    }
    function changeColor() {
        document.body.style.backgroundColor = randomColor();
    }
};
const stopChangingColor = () => {
    clearInterval(intervalId);
    intervalId = null;
};


document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);


console.log(randomColor());