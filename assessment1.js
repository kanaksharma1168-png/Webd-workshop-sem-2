let students=[];
function addstudent(){

    let name = document.getElementById("name").value;
    let rollno = document.getElementById("rollno").value;
    let maths = document.getElementById("maths").value;
    let science = document.getElementById("science").value;
    let english= document.getElementById("english").value;

    if(name === "" || rollno === "" || maths === "" || science === "" || english ===""){
        alert("Please fill all fields properly");
        return;
    }

    let student = {
        name: name,
        rollno: rollno,
        maths: maths,
        english: english
    };

    students.push(student);

    alert("Student Added Successfully!");

    document.getElementById("name").value = "";
    document.getElementById("rollno").value = "";
    document.getElementById("maths").value = "";
    document.getElementById("science").value = "";
    document.getElementById("english").value = ""
}
function displaystudent(){

    let output = document.getElementById("output");

    if(students.length === 0){
        output.innerHTML = "No student added yet.";
        return;
    }

    let text = "";

    students.forEach(std => {
        text +=
        "Name: " + std.name + "<br>" +
        "ROLLNO: " + std.rollno + "<br>" +
        "MATHS: " + std.maths + "<br>" +
        "SCIENCE: " + std.science + "<br>"+
        "ENGLISH:"+std.english+"<br><br>";
    });

    output.innerHTML = text;
}
function totalmarks(){
    let total = 0;

    students.forEach(std => {
        total += std.maths+std.science+std.english;
    });

    document.getElementById("output").innerHTML =
    "Total Marks of a Student: " + total;
}


