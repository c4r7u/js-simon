const rdmNumber = [];
const requestNumbers = [];
const results = [];

alert('Memorizza i 5 numeri che vedrai!')

while (rdmNumber.length < 5) {
    let numbers = getRndInteger(1, 100)
    alert(numbers)
    rdmNumber.push(numbers)
}
console.log(rdmNumber);

alert('Aspetta 30 secondi, quindi inserisci i 5 numeri memorizzati!')

const time = setTimeout(function() {
    
    while (requestNumbers.length < 5) {
        let Request = parseInt(prompt('inserisci i numeri'))
        requestNumbers.push(Request)
    }

    requestNumbers.forEach((element, index, array) => {
        if (rdmNumber.includes(element)) {
            results.push(element)
        }
    })

    alert('Questi sono i numeri che hai indovinato:' + results)
}, 1000);



function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}