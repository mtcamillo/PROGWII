addEventListener('load', function() {
    var alunos = ['Roberto', 'Denilson', 'Carlos']
    
    console.log(alunos.sort());
    for (let i = 0; i < alunos.length; i++) {
        const element = alunos[i];
        console.log(element);
    }
    alunos.push('Fabricio')
    console.log(alunos.length);
    console.log(alunos[1]);
    alunos.map(a => {
        console.log(a);
    })
    var novaLista = alunos.slice(2,3)
    console.log(novaLista);
})