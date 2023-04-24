const pipe = document.querySelector(".pipe");
const mario = document.querySelector(".mario");

const jump = () => {
    mario.classList.add("jump");
    
    setTimeout(() => {
        mario.classList.remove("jump");


    }, 500);
}


const loop = setInterval (() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');

    console.log(marioPosition)

   if (pipePosition < 120 && pipePosition > 0 && marioPosition < 85) {

    pipe.style.animation = 'none';
    pipe.style.left = `${pipePosition}px`;


    mario.style.animation = 'none';
    mario.style.bottom = `${marioPosition}px`;

    mario.src = './assets/imagens/mario morrendo.jpg';
    mario.style.marginLeft = '50px'
    mario.style.width = '75px'

    clearInterval(loop);

   }

    } , 10)

    

var restartButton = document.getElementById("restart");


function mostrarBotaoRestart() {
  restartButton.style.display = "block";
}

onFaseConcluida = function() {
  mostrarBotaoRestart();
}


document.addEventListener("keydown", jump);







