// Hello Kiddo
const isAdult = function (age) {
    if (age >= 18) {
        return true;
    }
};

const checkAge = function (age) {
    if (isAdult(age)) {
        console.log("Hello there");
    } else {
        console.log("Hello kiddo");
    }
};

checkAge(15);

const berekenBelasting = function (beginPrijs, hoogteBelasting) {
    return beginPrijs *( hoogteBelasting/ 100);  
};

const totaalBedrag = function (bedrag, hoogteBelasting) {
    return eindbedrag = bedrag + berekenBelasting(bedrag, hoogteBelasting);
}

console.log("De prijs inclusief belasting is: " + totaalBedrag(1000, 21));

//VAT 2
const getPriceAndVat = function (amount, tax) {
    console.log(calculatePriceAndVat(amount, tax));
};

const calculatePriceAndVat = function (amount, tax) {
    let vat = Math.round((amount - (amount / tax))*100) / 100;
    let basePrice = amount - vat;
    return [basePrice, vat];
}
