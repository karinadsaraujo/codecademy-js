console.log('Ano canino');

let nomeHumano = document.getElementById('nome');
let idadeHumano = document.getElementById('idade-humana');
let resultados = document.getElementById('rt-anosdogo')


idadeHumano.addEventListener('keyup',function(event){
    let myName = nomeHumano.value; //meu nome
    const myAge = idadeHumano.value; //idade humana
    let earlyYears = 2 * 10.5; //dos primeiros anos de cachorro (humanos)
    let laterYears = (myAge - 2) * 4; //idades humana

    let myAgeInDogYears = earlyYears + laterYears // ano 2 e restantes

    if(myName && myAge){
        resultados.innerHTML = `
        <p>My name is ${myName}. I am ${myAge} years old in human years which is ${myAgeInDogYears} years old in dog years.</p>
        `
    } else {
        resultado.style.display = 'none';
    }

    event.preventDefault();

})