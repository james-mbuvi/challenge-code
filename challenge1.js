
const readline = require('readline');

function studentGrade() {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter Student Score: ', (studentScore) => {
        studentScore = parseFloat(studentScore);
        let grade;

        if (studentScore >= 79 && studentScore <= 100) {
            grade = 'A';
        } else if (studentScore >= 60 && studentScore < 79) {
            grade = 'B';
        } else if (studentScore >= 49 && studentScore <= 59) {
            grade = 'C';
        } else if (studentScore >= 40 && studentScore < 49) {
            grade = 'D';
        } else {
            grade = 'E';
        }

        console.log(`Grade: ${grade}`);
        rl.close();
    });
}

studentGrade();
