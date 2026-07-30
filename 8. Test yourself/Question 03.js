


function calculateAiCost(tokensUsed) {
    if (tokensUsed < 0 ||  typeof tokensUsed !== "number") {
        return "Invalid";
    }
    if (tokensUsed <= 500){
        return 0;
    }

    let payableTokens = tokensUsed - 500;
    payableTokens = Math.floor(payableTokens / 100);
    let payment = payableTokens * 5;
    return payment;
}



console.log(calculateAiCost(300));
console.log(calculateAiCost(500));
console.log(calculateAiCost(650));
console.log(calculateAiCost(1000));
console.log(calculateAiCost(-10));
console.log(calculateAiCost("650"));
