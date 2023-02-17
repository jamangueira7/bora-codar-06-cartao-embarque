const aviator = document.querySelector('#airplane');
let x = 1000;
let y = 1000;
let direction = true;

moveAirplane = (x, y, direction) => {
    if(direction) {
        aviator.style.left = `${x}px`;
        aviator.style.top = `${y}px`;
    } else {
        aviator.style.left = `${y}px`;
        aviator.style.bottom = `${x}px`;
    }
}

let interval = setInterval(() => {

        moveAirplane(x,y, direction);
        x--;
        y--;
        if(x < 2) {
            x = 1000;
            y = 1000;
            direction = !direction;
        }
},10);