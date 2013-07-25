var choice = prompt("add student, y/n?");

 students = [];
while (choice == "y") {
var name = prompt("student name?");
var age = prompt("age?");
var house = prompt("house?");

  var student = {
  name: name;
  age: age;
  house: house;
  info: function(){
    console.log(this.name", " + this.age", " + this.house", "}
students.push(student);
}
  choice = prompt("add student, y/n?");
}

// function getStudentInfo(name) {
 for (var i = 0; i < students.length; i++){
  for(info in students[i]){
    console.log(students[i][info]);
  }
  console.log(student[i].name + " is " + students[i].age + " in house " + students[i].house)
  // console.log(students[i].name, students[i].age,
    // students[i].house)
}









// function getStudentInfo(name) {
//   console.log(studentHash.name);
//   console.log(studentHash.name.age);
//   console.log(studentHash.name.house);
// }
// var add = prompt("add student, y/n?");
// } else {
// console.log("no more students");
// }
