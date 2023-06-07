function Student(name, gender, age) {
    this.name = name;
    this.gender = gender;
    this.age = age;
} 
let student1 = new Student("Васелиса", "женский", 20);
let student2 = new Student("Артем", "мужской", 21);

Student.prototype.setSubject = function (subjectName) {
    this.subject = subjectName;
}

Student.prototype.addMarks = function (...marks) {
    
  if (this.marks === undefined) {
    this.marks = []; 
  } else {
    this.marks.concat(marks);
  }
}

Student.prototype.getAverage = function () {
  if (this.marks === undefined) {
    return 'плохая учёба';
  } else {
    return this.marks.reduce ( ( acc, num ) => acc + num, 0 ) / this.marks.length;;
  }
}

Student.prototype.exclude = function (reason) {
    delete this.marks;
    delete this.subject;
    this.exclude = reason;
}

student1.setSubject("Algebra");
console.log(student1.getAverage()); // 0
student1.addMarks(4, 5, 4, 5);
console.log(student1.getAverage()); // 4.5
console.log(student1);
// {age: 19, gender: "женский", marks: [4, 5, 4, 5], name: "Василиса", subject: "Algebra"}
student2.setSubject("Geometry");
student2.exclude('плохая учёба')
console.log(student2)
// {name: "Артём", gender: "мужской", age: 25, excluded: "плохая учёба"}