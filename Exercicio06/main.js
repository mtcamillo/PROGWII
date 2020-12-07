function calcular() {
	var salarioOld = document.getElementById('salario').value;
	salarioOld = parseFloat(salarioOld);
	var salarioNew;
	var aumentoPct;
	var aumentoValor;

	if (salario == "") {
		document.getElementById('resultados').innerHTML = "Digite um Valor";
	} else{
		if (salarioOld < 980) {
			aumentoPct = 0.20;
			aumentoValor = salarioOld * aumentoPct;
			salarioNew = salarioOld + aumentoValor;
			document.getElementById('resultados').innerHTML = "Salário antigo: R$" + salarioOld + " | Salário com Reajuste: R$" + salarioNew + " | Aumento Percentual: " + aumentoPct + " | Valor do Aumento: R$" + aumentoValor;
		}
		if (salarioOld >= 980 && salarioOld < 1300) {
			aumentoPct = 0.15;
			aumentoValor = salarioOld * aumentoPct;
			salarioNew = salarioOld + aumentoValor;
			document.getElementById('resultados').innerHTML = "Salário antigo: R$" + salarioOld + " | Salário com Reajuste: R$" + salarioNew + " | Aumento Percentual: " + aumentoPct + " | Valor do Aumento: R$" + aumentoValor;
		}
		if (salarioOld >= 1300 && salarioOld < 1800) {
			aumentoPct = 0.10;
			aumentoValor = salarioOld * aumentoPct;
			salarioNew = salarioOld + aumentoValor;
			document.getElementById('resultados').innerHTML = "Salário antigo: R$" + salarioOld + " | Salário com Reajuste: R$" + salarioNew + " | Aumento Percentual: " + aumentoPct + " | Valor do Aumento: R$" + aumentoValor;
		}
		if (salarioOld >= 1800) {
			aumentoPct = 0.05;
			aumentoValor = salarioOld * aumentoPct;
			salarioNew = salarioOld + aumentoValor;
			document.getElementById('resultados').innerHTML = "Salário antigo: R$" + salarioOld + " | Salário com Reajuste: R$" + salarioNew + " | Aumento Percentual: " + aumentoPct + " | Valor do Aumento: R$" + aumentoValor;
		}
	}
}