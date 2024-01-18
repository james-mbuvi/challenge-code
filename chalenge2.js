
const readline = require('readline');

function speedDetector() {
    const defaultSpeed = 70;
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter Your Car Speed: ', (driverSpeed) => {
        driverSpeed = parseFloat(driverSpeed);
        let message;

        if (driverSpeed <= defaultSpeed) {
            message = 'Ok';
        } else {
            let detrementPoints = ((driverSpeed - defaultSpeed) / 2);

            if (detrementPoints > 12) {
                message = 'License Suspended';
            }
        }

        console.log(message);
        rl.close();
    });
}

speedDetector();
