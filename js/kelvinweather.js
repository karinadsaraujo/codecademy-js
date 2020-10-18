console.log('Temperatura');

let resultado = document.getElementById('resultados');
let idCelsius = document.getElementById('valor-celsius');

idCelsius.addEventListener('keyup',function(event){
   
    let celsius = idCelsius.value; //constante para calcular o grau kelvin
    let kelvin = celsius + 273; //calculo de grau celsius
    let fahrenheit = celsius * (9/5) + 32; //calculo de grau fahrenheit
    let newton = celsius * (33/100); //converte para newton

    fahrenheit = Math.floor(fahrenheit); //arredondando o valor de fahrenheit
    newton = Math.floor(newton); //arredonda o valor

    if(celsius){
        resultado.style.display = 'block'
        resultado.innerHTML = `
       <p>${idCelsius.value}°C</p>
       <ul>
           <li>Kelvin: ${kelvin}</li>
           <li>Fahrenheit: ${fahrenheit}</li>
           <li>Newton: ${newton}</li>
       </ul>`
    } else {
        resultado.style.display = 'none';
    }

    //perguntar como manter o codigo funcionando depois de apagar uma vez o input

    event.preventDefault();

})
// ,{once: true}