// ================= TASK 1 =================
// Callback


function getStudent(id, callback){

    setTimeout(() => {

        let student = {
            id: id,
            name: "Sita"
        };

        callback(student);

    },2000);

}


getStudent(1, function(student){

    console.log("Task 1 Output");

    console.log("Student Name:", student.name);

});





// ================= TASK 2 =================
// Callback Hell


function getStudentData(callback){

    setTimeout(() => {

        console.log("Student fetched");

        callback({
            id:1,
            name:"Sita"
        });

    },1000);

}


function getAssignments(callback){

    setTimeout(() => {

        console.log("Assignments fetched");

        callback([
            "Assignment1",
            "Assignment2"
        ]);

    },1000);

}



function getFeedback(callback){

    setTimeout(() => {

        console.log("Feedback fetched");

        callback([
            "Good",
            "Excellent"
        ]);

    },1000);

}



// Nested callbacks

console.log("Task 2 Output");


getStudentData(function(student){

    getAssignments(function(assignments){

        getFeedback(function(feedback){


            console.log("Student:",student);

            console.log("Assignments:",assignments);

            console.log("Feedback:",feedback);


        });

    });

});






// ================= TASK 3 =================
// Promise Version


function studentPromise(){

    return new Promise((resolve)=>{


        setTimeout(()=>{

            resolve({
                id:1,
                name:"Sita"
            });


        },1000);


    });

}



function assignmentPromise(){

    return new Promise((resolve)=>{


        setTimeout(()=>{

            resolve([
                "Assignment1",
                "Assignment2"
            ]);


        },1000);


    });

}



function feedbackPromise(){

    return new Promise((resolve)=>{


        setTimeout(()=>{

            resolve([
                "Good",
                "Excellent"
            ]);


        },1000);


    });

}




console.log("Task 3 Output");


studentPromise()

.then((student)=>{


    console.log("Student:",student);


    return assignmentPromise();


})

.then((assignments)=>{


    console.log("Assignments:",assignments);


    return feedbackPromise();


})

.then((feedback)=>{


    console.log("Feedback:",feedback);


})

.catch((error)=>{


    console.log(error);


});







// ================= TASK 4 =================
// Async / Await


async function showData(){


    console.log("Task 4 Output");


    let student = await studentPromise();


    let assignments = await assignmentPromise();


    let feedback = await feedbackPromise();



    console.log("Student:",student);


    console.log("Assignments:",assignments);


    console.log("Feedback:",feedback);



}



showData();