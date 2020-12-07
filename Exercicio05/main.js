function iniciar() {
	var numero = document.getElementById('num').value;
	numero = parseInt(numero);

	if (numero < 5 | numero > 15) {
		document.getElementById("resultados").innerHTML = "Digite um número entre 5 e 15";
	} else{
		var contador = setInterval(Timer, 1000);
		function Timer() {
			if (numero >= 0) {
				document.getElementById("resultados").innerHTML = numero;
		  		numero = numero - 1;		
			} else{
				clearInterval(contador);
			}
		}
	}
}