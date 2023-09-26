// VARIABLE DECLARATION //
let gradeTotal = 0; // The total grade.
let gradeCount = 0; // The number of grades inputted.
let minGrade = 100; // set to 100 to accomodate for later code.
let maxGrade = 0; // sets to 0 to accomodate for later code.
// -------------------- //

// Contextual Console Log //
alert("This program will take multiple grades as inputs and calculate the minimum, maximum and average grade values. When you're done, just type \"done\".");

// DRIVER CODE //
while (true) {

    // Infinite loop until user types "done" into the prompt.
    // Get grade input.
    let grade = prompt("Enter Your Grade Here");

    if (grade != "done") {
        // If the input is not "done" turn the grade input into an integer.
        grade = parseInt(grade)
    }

    if (grade == "done" && gradeCount !== 0) {

        // Calculates the average grade and displays the average, lowest and highest grades. Breaks out of the loop.
        averageGrade = Math.ceil(gradeTotal/gradeCount);
        alert("Results Logged To Console");
        console.log(`Average Grade: ${averageGrade}\nLowest Grade: ${minGrade}\nHighest Grade: ${maxGrade}`);
        break;
    } else if (grade != "done"  && grade >= 0 && grade <= 100) {

        // Checks if the grade is less than the minimum, or if not, if the grade is greater than the maximum.
        if (grade < minGrade) {
            minGrade = grade;
        } else if (grade > maxGrade) {
            maxGrade = grade;
        }

        // adds the input grade to the total grade and increments the gradeCount variable.
        gradeTotal += grade;
        gradeCount += 1;
    } else if (grade < 0 || grade > 100) {

        // Logs invalid if the grade is less than 0 or greater than 100
        alert("Invalid Input.");
    } else if (isNaN(grade) && grade != "done") {

        // If the input is not a number and it is not "done"
        alert("Input must be a number or done");
    }
}
// ----------- //