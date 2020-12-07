
function calcular() {
	const valorDigitado = document.querySelector('#valor');
	
  	const num = parseInt(valorDigitado.value);

  	if (num == 0) {
  		document.getElementById('resultados').innerHTML += "Fatorial: 1";
  	} else{
  		let msgFatorial = '';
		let fatorial = 1;

		for(let i = 1; i <= num; i++){

			fatorial *= i;

			if (i == num) {
			    msgFatorial += i + '!';
			}

			msgFatorial += i + '! x ' ;
		}

		document.getElementById('resultados').innerHTML = "Fatorial: " + fatorial;
  	}
  	
  		  
}