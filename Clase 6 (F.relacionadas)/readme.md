SORT()------> FUNCION que ordena alfabeticamente.
#toma el primer caracter.
como se comparan numero?

A sort(), le pasamos como parametros a y b, y una funcion que compare a y b

arrayNum.sort((a,b)=> a - b);

como se ordena mediante string?

const items = [
{ name: 'Edward', value: 21 },
{ name: 'Sharpe', value: 37 },
{ name: 'And', value: 45 },
{ name: 'The', value: -12 },
{ name: 'Magnetic', value: 13 },
{ name: 'Zeros', value: 37 }
];
items.sort(function (a, b) {
if (a.name > b.name) {
return 1;
}
if (a.name < b.name) {
return -1;
}
// a must be equal to b
return 0;
