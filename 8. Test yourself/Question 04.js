


function topRatedRestaurant(restaurants) {
    if (Array.isArray(restaurants) === false || restaurants.length === 0){
        return "Invalid";
    }

    let nameHighRateRes = restaurants[0].name;
    let maxRating = restaurants[0].rating;
    for (let res of restaurants){
        if (res.rating > maxRating){
            maxRating = res.rating;
            nameHighRateRes = res.name;
        }
    }
    return nameHighRateRes.toUpperCase();
}


console.log(topRatedRestaurant([{name:"Chillox",rating:4.5},{name:"Sultan's Dine",rating:4.8}]));
