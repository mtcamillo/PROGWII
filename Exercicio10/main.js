const temperatura = document.querySelector('input[name="temperatura"]')
const resultados = document.querySelector('div.resultados')


temperatura.addEventListener('blur', function(evento) {
	var num = parseInt(temperatura.value)
	var resultado = (1.8 * num) + 32
    resultados.innerHTML = `<h1>${resultado}<h1>`
})