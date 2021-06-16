// Hello Kiddo
const adult = function (age) {
    if (age >= 18) {
        return true;
    }
};

const checkAge = function (age) {

    if (adult(age)) {
        console.log("Hello there");
    } else {
        console.log("Hello kiddo");
    }
};

checkAge(15);

// VAT 1
const berekenBelasting = function (beginPrijs, hoogteBelasting) {
    let eindPrijs = beginPrijs * hoogteBelasting;
    console.log(eindPrijs);
    return eindPrijs;
};

const totaalBedrag = function (bedrag, soortProduct) {
    let hoogteBelasting;
    if (soortProduct == "food") {
        hoogteBelasting = 0.09;
    } else if (soortProduct == "goederen") {
        hoogteBelasting = 0.21;
    } else {
        hoogteBelasting = 0;
    }
    console.log(hoogteBelasting)
    let eindbedrag = bedrag + berekenBelasting(bedrag, hoogteBelasting)
    console.log("De prijs inclusief belasting is: " + eindbedrag);
}

totaalBedrag(50, null);

//VAT 2
const getPriceAndVat = function (amount, tax) {
    console.log(calculatePriceAndVat(amount, tax));
};

const calculatePriceAndVat = function (amount, tax) {
    let vat = Math.round((amount - (amount / tax))*100) / 100;
    let basePrice = amount - vat;
    const priceAndVat = [basePrice, vat];

    return (priceAndVat)
}

getPriceAndVat(2.18, 1.09);

