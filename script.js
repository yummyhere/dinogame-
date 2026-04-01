let game = document.querySelector("#game");
let dino = document.querySelector("#dino");
let cactus = document.querySelector("#cactus");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

let count = 0;
let isGameOver = false ;

document.addEventListener("keydown", (e) => {
    if (isGameOver) return;

    if (e.code === "Space") {
       if(!dino.classList.contains("animatedino"))
        {    
        dino.classList.add("animatedino")
        }  

        count++;
        score.innerHTML = "Score: " + count;

        setTimeout(() => {
            dino.classList.remove("animatedino")     
        }, 500);

    }

});



let collisionCheck = setInterval(() => {
    let dinotop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
    let cactusleft = parseInt(window.getComputedStyle(cactus).getPropertyValue("left"));

    if (cactusleft < 30 && cactusleft > 0 && dinotop > 100) {
      
        cactus.style.animation = "none" ;
        dino.style.animation ="none"
        gameOver.style.visibility = "visible";
        gameOver.style.opacity = "1";
        count = 0;

        isGameOver = true;

        clearInterval(collisionCheck);
             
    }
    
}, 10);
