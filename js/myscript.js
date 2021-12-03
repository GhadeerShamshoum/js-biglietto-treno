let userInputKm = prompt ('inserisci numero di chilometri');
let userInputAge = prompt('Quanti anni hai?');
let priceKm =  (userInputKm * 0.21);
console.log(priceKm);
let scontoM  = (priceKm * 20 / 100);
let scontoOvre65  = (priceKm * 40 / 100);


if (userInputAge < 18){
    document.writeln(((priceKm - scontoM).toFixed(2)) + '€' );

}else if (userInputAge>65){
    document.writeln(((priceKm - scontoOvre65) .toFixed(2)) + '€' );

}else {
    document.writeln((priceKm) .toFixed(2)) + '€';
}





