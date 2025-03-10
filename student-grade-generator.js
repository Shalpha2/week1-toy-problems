function getGrade(marks) {
    if (marks > 79) {
        return "A";
    } else if (marks >= 60) {
        return "B";
    } else if (marks >= 50) {
        return "C";
    } else if (marks >= 40) {
        return "D";
    } else {
        return "E";
    }
}

// Example usage:
let studentMarks = 55;  // Change this value to test different marks
console.log("Student Grade:", getGrade(studentMarks));


