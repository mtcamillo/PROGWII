const alunos = ['Roberto', 'Denilson', 'Carlos'];

document.getElementById('sort').innerHTML = alunos.sort();
alunos.push('Matheus');
document.getElementById('push').innerHTML = alunos;
document.getElementById('length').innerHTML = alunos.length;
document.getElementById('segundo').innerHTML = alunos[1];
var i;
var teste = 0;
for (i = 0; i < alunos.length; i++) {
	if (teste == 0) {
		teste = document.getElementById('for').innerHTML = alunos[i];
	} else {
		teste = document.getElementById('for').innerHTML = teste + " " + alunos[i];
	}
}
document.getElementById('slice').innerHTML = alunos.slice(1, 3);