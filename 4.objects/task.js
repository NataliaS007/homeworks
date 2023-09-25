function Student(name, gender, age) {
    this.name = name,
    this.gender = gender,
    this.age = age,
    this.marks = []
}

let student2 = new Student("Natalia", "female", 19);
let student3 = new Student("Vitaly", "male", 20);

Student.prototype.setSubject = function(subjectName) {
    return this.subject = subjectName
}
let student = new Student("Ivan", "male", 21);
student.setSubject("Algebra");

Student.prototype.addMarks = function(...marks) {
    if (this.marks !== undefined) {
        return this.marks.push(...marks)
    }
}

Student.prototype.getAverage = function() {
    let sum = 0;
    let l = 0;
    if (this.marks !== undefined) {
        l = this.marks.length
    }
    if (l === 0) {
        return 0
    }
    for (let i = 0; i < l; i++) {
        sum = sum + Number(this.marks[i]);
    }
    return sum / l
}

Student.prototype.exclude = function(reason) {
    delete this.subject
    delete this.marks
    return this.excluded = reason
}
