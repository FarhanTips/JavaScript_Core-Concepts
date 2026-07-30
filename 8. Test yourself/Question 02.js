


function isElevatorSafe(weights) {
    if (Array.isArray(weights)){
        let totalWeight = 0;
        for (let i of weights){
            totalWeight += i;
        }

        if (totalWeight > 400){
            return false;
        }
        else {
            return true;
        }

    }
    else {
        return "Invalid";
    }
}



console.log(isElevatorSafe([]));
console.log(isElevatorSafe([60, 75, 50]));
console.log(isElevatorSafe([400]));
console.log(isElevatorSafe("60,75,50"));
console.log(isElevatorSafe([90,100,95,120]));
console.log(isElevatorSafe([401]));

