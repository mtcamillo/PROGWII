var valor3 = 5;
var valor;
var valor1;


console.log('Tabuada do ' + valor3);
console.log(valor3 + ' x ' + '0 ' + ' = ' + (valor3 * 0));
console.log(valor3 + ' x ' + '1 ' + ' = ' + (valor3 * 1));
console.log(valor3 + ' x ' + '2 ' + ' = ' + (valor3 * 2));
console.log(valor3 + ' x ' + '3 ' + ' = ' + (valor3 * 3));
console.log(valor3 + ' x ' + '4 ' + ' = ' + (valor3 * 4));
console.log(valor3 + ' x ' + '5 ' + ' = ' + (valor3 * 5));
console.log(valor3 + ' x ' + '6 ' + ' = ' + (valor3 * 6));
console.log(valor3 + ' x ' + '7 ' + ' = ' + (valor3 * 7));
console.log(valor3 + ' x ' + '8 ' + ' = ' + (valor3 * 8));
console.log(valor3 + ' x ' + '9 ' + ' = ' + (valor3 * 9));

console.log('');

for (valor1 = 1; valor1 <= 9; valor1++) {
    console.log('Tabuada do ' + valor1)
    for (valor = 0; valor <= 9; valor++) {
        console.log(valor1 + ' x ' + valor + ' = ' + (valor1 * valor));
    }
    console.log('');
}