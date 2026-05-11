// ================================
// VALUES, DATA TYPES, AND OPERATIONS
// ================================

// Store student information using variables and data types
let studentName = "Jordan";
let completedTasks = 4;
let totalTasks = 10;

// Calculate study progress percentage
let progress = (completedTasks / totalTasks) * 100;

// Test output
console.log("Study Progress:", progress + "%");


// ================================
// STRINGING CHARACTERS TOGETHER
// ================================

// Use template literals to create a welcome message
let welcomeMessage = `Welcome back, ${studentName}! You have ${totalTasks - completedTasks} tasks remaining.`;

// Test output
console.log(welcomeMessage);


// ================================
// CONTROL STRUCTURES AND LOGIC
// ================================

// Check if all assignments are complete
if (completedTasks === totalTasks) {
    console.log("Great job! All assignments are complete.");
} else {
    console.log("Keep going! You still have assignments to finish.");
}


// ================================
// BUILDING ARRAYS
// ================================

// Create an array to store assignments
let assignments = ["Math Homework", "Science Project", "History Notes"];

// Test output
console.log(assignments);


// ================================
// USING ARRAYS
// ================================

// Add a new assignment to the array
assignments.push("English Essay");

// Check if a specific assignment exists
console.log(assignments.includes("Math Homework"));

// Test output
console.log(assignments);


// ================================
// WORKING WITH LOOPS
// ================================

// Loop through assignments and display each task
for (let i = 0; i < assignments.length; i++) {
    console.log(`Assignment ${i + 1}: ${assignments[i]}`);
}