function calcular() {
	var data = document.getElementById('data').value;
	var mes;
	

	if (data == "") {
		document.getElementById('resultados').innerHTML = "Escreva uma data Valida";
	} else{
		data = data.split("/");
		if (data[1] == "01") {
			mes = "janeiro";
		}
		if (data[1] == "02") {
			mes = "fevereiro";
		}
		if (data[1] == "03") {
			mes = "março";
		}
		if (data[1] == "04") {
			mes = "abril";
		}
		if (data[1] == "05") {
			mes = "maio";
		}
		if (data[1] == "06") {
			mes = "junho";
		}
		if (data[1] == "07") {
			mes = "julho";
		}
		if (data[1] == "08") {
			mes = "agosto";
		}
		if (data[1] == "09") {
			mes = "setembro";
		}
		if (data[1] == "10") {
			mes = "outubro";
		}
		if (data[1] == "11") {
			mes = "novembro";
		}
		if (data[1] == "12") {
			mes = "dezembro";
		}
		document.getElementById('resultados').innerHTML = data[0] + " de " + mes + " de " + data[2];
	}
}