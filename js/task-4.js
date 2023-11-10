function getShippingCost(country) {
    let priceDelivery;
    let message;

    switch(country) {
        case "China":
        priceDelivery = 100;
        message = `Shipping to ${country} will cost ${priceDelivery} credits`;
        break;

        case "Chile":
        priceDelivery = 250;
        message = `Shipping to ${country} will cost ${priceDelivery} credits`;
        break;

        case "Australia":
        priceDelivery = 170;
        message = `Shipping to ${country} will cost ${priceDelivery} credits`;
        break;

        case "Jamaica":
        priceDelivery = 120;
        message = `Shipping to ${country} will cost ${priceDelivery} credits`;
        break;

        default:
           message = "Sorry, there is no delivery to your country"
    }
    return message;
}


console.log(getShippingCost("Australia")); // "Shipping to Australia will cost 170 credits"
console.log(getShippingCost("Germany")); // "Sorry, there is no delivery to your country"
console.log(getShippingCost("China")); // "Shipping to China will cost 100 credits"
console.log(getShippingCost("Chile")); // "Shipping to Chile will cost 250 credits"
console.log(getShippingCost("Jamaica")); // "Shipping to Jamaica will cost 120 credits"
console.log(getShippingCost("Sweden")); // "Sorry, there is no delivery to your country"