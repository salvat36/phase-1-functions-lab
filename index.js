let hq = 42;
function distanceFromHqInBlocks(pickUp) {
return Math.abs(pickUp - hq);
}

function distanceFromHqInFeet(pickUp) {
return distanceFromHqInBlocks(pickUp) * 264;
}

function distanceTravelledInFeet(start, destination) {
let totalFeet = Math.abs(start - destination)
return totalFeet * 264;
}

function calculatesFarePrice(start, destination) {
    const distanceInFeet = distanceTravelledInFeet(start, destination);
    if (distanceInFeet < 400) {
    return 0;
    } else if (distanceInFeet >= 400 && distanceInFeet < 2000) {
    return (distanceInFeet - 400) * .02;
    } else if (distanceInFeet <= 2500) {
    return 25;
    } else {
    return 'cannot travel that far';
    }
}