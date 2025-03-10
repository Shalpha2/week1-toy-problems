function speedDetector(speed) {
    const speedLimit = 70;
    const kmPerDemeritPoint = 5;
    
    if (speed < speedLimit) {
        console.log("Ok");
    } else {
        let points = Math.floor((speed - speedLimit) / kmPerDemeritPoint);
        if (points > 12) {
            console.log("License suspended");
        } else {
            console.log("Points:", points);
        }
    }
}

// Example usage:
let carSpeed = 80; // Change this value to test different speeds
speedDetector(carSpeed);
