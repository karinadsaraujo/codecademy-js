console.log('magic ball');

let nomeBola = document.querySelector('#nome-magica');
let resulBola = document.getElementById('rt-bolamagica');
let pergunta = document.querySelector('#pergunta');

let randomNumber = Math.floor(Math.random() * 8)
let eightBall = ''

switch(randomNumber){
  case 0:
    eightBall = 'It is certain';
    break;
  case 1:
    eightBall = 'It is decidedly so';
    break;
  case 2:
    eightBall = 'Reply hazy try again';
    break;
  case 3:
    eightBall = 'Cannot predict now';
    break;
  case 4:
    eightBall = 'Do not count on it';
    break;
  case 5:
    eightBall = 'My sources say no';
    break;
  case 6:
    eightBall = 'Outlook not so good';
    break;
  case 7:
    eightBall = 'Signs point to yes';
    break;
  }

//console.log(`The eight ball answered: ${eightBall}`);

nomeBola.addEventListener('keyup',function(){
    if(nomeBola){
        resulBola.innerHTML = `
            <p> Olá, ${nome}<p>
        `
    } else {
        resulBola.innerHTML = `
            <p>Olá!</p>
        `
    }
})

pergunta.addEventListener('keyup',function(){
    

    if(pergunta){
        resulBola.innerHTML = `
        <p>${pergunta} : ${eightBall}</p>
        `
    } else {
        resultado.style.display = 'none';
    }
})