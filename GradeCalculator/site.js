let gradeTotal = 0;
let gradeCount = 0;
let minGrade = 100;
let maxGrade = 0;
let averageGrade = 0;

$(document).ready(() => {

    setInterval(() => {
        let totalGrade = document.querySelector("#totalGrade");
        let gradeMin = document.querySelector("#gradeMin");
        let gradeMax = document.querySelector("#gradeMax");
        let gradeAve = document.querySelector("#gradeAve");

        totalGrade.innerHTML = String(gradeTotal);
        gradeMin.innerHTML = String(minGrade);
        gradeMax.innerHTML = String(maxGrade);
        gradeAve.innerHTML = String(averageGrade);
    })

    function add_to_grade_pool() {
        inputElement = document.querySelector("#gradeInput");
        grade = inputElement.value;
        // console.log(grade);
        grade = parseFloat(grade);
        if (!isNaN(grade) && grade >= 0 && grade <= 100) {
            if (grade < minGrade) {
                minGrade = grade;
                if (maxGrade == 0) {
                    maxGrade = grade;
                }
            } else if (grade > maxGrade) {
                maxGrade = grade;
                if (minGrade == 100) {
                    minGrade = grade;
                }
            }
            gradeTotal += grade;
            gradeCount += 1;
            averageGrade = Math.ceil(gradeTotal/gradeCount);
        } else {
            alert("Invalid Input Value.");
        }
        inputElement.value = "";
    }

    $("#submitGrade").click(() => {add_to_grade_pool()});
    $("#resetGrades").click(() => {
        gradeTotal = 0;
        gradeCount = 0;
        minGrade = 100;
        maxGrade = 0;
        averageGrade = 0;
    });
    $("#gradeInput").keypress((e) => {
        if (e.which == 13) {
            add_to_grade_pool()
        }
    });
})