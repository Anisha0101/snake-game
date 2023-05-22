//game constants
let inputDir = {x: 0, y: 0};
let speed = 6;
let lastpainttime = 0;
let snakeArr = [
    {x: 13, y: 15}
];
food1 = {x: 6, y:7};
food2 = {x: 4, y: 5};
food3 = {x: 10, y: 2};
food4 = {x: 15, y: 8};
food5 = {x: 16, y: 17};
var array=[]
let score = 0;

//game functions
function main(ctime) {
    window.requestAnimationFrame(main);
    //console.log(ctime)
    if((ctime - lastpainttime)/1000 < 1/speed){
        return;
    }
    lastpainttime = ctime;
    gameEngine();
    
}
function isCollide(snake) {
    // If you bump into yourself
    for (let i = 1; i < snakeArr.length; i++) {
        if(snake[i].x === snake[0].x && snake[i].y === snake[0].y){
            return true;
        }
    }
    // If you bump into the wall
    if(snake[0].x >= 20 || snake[0].x <=0 || snake[0].y >= 20 || snake[0].y <=0){
        return true;
    }   
    

}

function gameEngine(){
    //part 1: updating snake array
    if(isCollide(snakeArr)){
        inputDir = {x: 0, y: 0};
        alert("Game Over. Press any key to play again");
        snakeArr = [{x: 13, y: 15}];
        score = 0;
    }

    //if you have eaten the food,increment the score and regenerate the food
    if(snakeArr[0].y === food1.y && snakeArr[0].x === food1.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        score += 1;
    if(score>hiscoreval){
        hiscoreval = score;
        localStorage.setItem("hiscore", JSON.stringify(hiscoreval))
        hiscoreBox.innerHTML = "HiScore: " + hiscore;

    }
        scoreBox.innerHTML = "Score: " + score;
        let a = 2;
        let b = 18;
        food1 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }

    if(snakeArr[0].y === food2.y && snakeArr[0].x === food2.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        let a = 2;
        let b = 18;
        food2 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }  

    if(snakeArr[0].y === food3.y && snakeArr[0].x === food3.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        let a = 2;
        let b = 18;
        food3 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }  

    if(snakeArr[0].y === food4.y && snakeArr[0].x === food4.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        let a = 2;
        let b = 18;
        food4 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }  

    if(snakeArr[0].y === food5.y && snakeArr[0].x === food5.x){
        snakeArr.unshift({x: snakeArr[0].x + inputDir.x, y: snakeArr[0].y + inputDir.y});
        score += 1;
        scoreBox.innerHTML = "Score: " + score;
        let a = 2;
        let b = 18;
        food5 = {x: Math.round(a + (b-a)* Math.random()), y: Math.round(a + (b-a)* Math.random())}
    }  

    // Moving the snake
    for (let i = snakeArr.length - 2; i>=0; i--) {
        snakeArr[i+1] = {...snakeArr[i]};
    }

    snakeArr[0].x += inputDir.x;
    snakeArr[0].y += inputDir.y;

    //part 2: render the snake and food

    //display the snake
    board.innerHTML = "";
    snakeArr.forEach((e, index)=>{
        snakeElement = document.createElement('div');
        snakeElement.style.gridRowStart = e.y;
        snakeElement.style.gridColumnStart = e.x;
        snakeElement.classList.add('snake');
        if(index === 0){
            snakeElement.classList.add('head');
        }     
        else{
            snakeElement.classList.add('snake');
        }
        board.appendChild(snakeElement);

    });

    //display the food
    food1Element = document.createElement('div');
    food1Element.style.gridRowStart = food1.y;
    food1Element.style.gridColumnStart = food1.x;
    food1Element.classList.add('food1')
    board.appendChild(food1Element);

    //display the food
    food2Element = document.createElement('div');
    food2Element.style.gridRowStart = food2.y;
    food2Element.style.gridColumnStart = food2.x;
    food2Element.classList.add('food2')
    board.appendChild(food2Element);

    //display the food
    food3Element = document.createElement('div');
    food3Element.style.gridRowStart = food3.y;
    food3Element.style.gridColumnStart = food3.x;
    food3Element.classList.add('food3')
    board.appendChild(food3Element);

    //display the food
    food4Element = document.createElement('div');
    food4Element.style.gridRowStart = food4.y;
    food4Element.style.gridColumnStart = food4.x;
    food4Element.classList.add('food4')
    board.appendChild(food4Element);

    //display the food
    food5Element = document.createElement('div');
    food5Element.style.gridRowStart = food5.y;
    food5Element.style.gridColumnStart = food5.x;
    food5Element.classList.add('food5')
    board.appendChild(food5Element);


}







//game logic
let hiscore = localStorage.getItem("hiscore");
if (hiscore === null){
    hiscoreval = 0;
    localStorage.setItem("hiscore" , JSON.stringify(hiscoreval))
}
else{
    hiscoreval = JSON.parse(hiscore);
    hiscoreBox.innerHTML = "HiScore: " + hiscore;
}

window.requestAnimationFrame(main);
window.addEventListener('keydown', e=>{
    inputDir = {x: 0, y: 1} //game starts
    switch (e.key) {
        case "ArrowUp":
            console.log("ArrowUp");
            inputDir.x = 0;
            inputDir.y = -1;
            break;
        
        case "ArrowDown":
            console.log("ArrowDown");
            inputDir.x = 0;
            inputDir.y = 1;
            break;
        
        case "ArrowLeft":
            console.log("ArrowLeft");
            inputDir.x = -1;
            inputDir.y = 0;
            break;
        
        case "ArrowRight":
            console.log("ArrowRight");
            inputDir.x = 1;
            inputDir.y = 0;
            break;
        
    }

 const startingMinutes = 1;
 let time = startingMinutes * 60;
 const countdownEl = document.getElementById('countdown');

 setInterval(updateCountdown, 1000);

 function updateCountdown() {
    const minutes = Math.floor(time/60);
    let seconds = time % 60;

    seconds = seconds < 1 ? '0' + seconds : seconds;
    countdownEl.innerHTML = `${minutes} : ${seconds}`;
    time--;
 }

    

});
