'use strict';


function Student(name, surname, yearOfBirth) {

    this.name = name;
    this.surname = surname;
    this.yearOfBirth = yearOfBirth;
    this.attendance = new Array(10);
    this.rating = new Array(10);
};


Student.prototype.age = function () {
    return 2022 - this.yearOfBirth
};
Student.prototype.findEmptyElement = function (arr) {
    let emptyElementIndex = arr.findIndex((item) => item === undefined);
    return emptyElementIndex
};
Student.prototype.present = function () {
    let emptyElementIndex = this.findEmptyElement(this.attendance);
    this.attendance[emptyElementIndex] = true
};
Student.prototype.absent = function () {
    let emptyElementIndex = this.findEmptyElement(this.attendance);
    this.attendance[emptyElementIndex] = false
};
Student.prototype.mark = function (ratingValue) {
    let emptyElementIndex = this.findEmptyElement(this.rating);
    this.rating[emptyElementIndex] = ratingValue
};
Student.prototype.getAverageRating = function () {
    let numOfElementsRating = 0;

    let sumRating = this.rating.reduce((prevValue, item) => {
        ++numOfElementsRating;
        return item + prevValue
    }, 0);
    let averageRating = sumRating / numOfElementsRating;
    return averageRating

};
Student.prototype.getAverageAttendance = function () {
    let numOfElementsAttendance = 0;
    let sumAttendance = this.attendance.reduce((prevValue, item) => {
        ++numOfElementsAttendance;
        return +item + prevValue
    }, 0);
    let averageAttendance = sumAttendance / numOfElementsAttendance;
    return averageAttendance
};
Student.prototype.summary = function () {

    let averageRating = this.getAverageRating()
    let averageAttendance = this.getAverageAttendance();

    if (averageRating >= 9 && averageAttendance >= 0.9) {
        return 'Ути какой молодчинка!'
    };

    if ((averageRating < 9 && averageAttendance >= 0.9) || (averageRating >= 9 && averageAttendance < 0.9)) {
        return 'Норм, но можно лучше'
    };

    if (averageRating < 9 && averageAttendance < 0.9) {
        return 'Редиска!'
    };
};


let student1 = new Student('Max', 'Black', 1990);

student1.mark(10);
student1.mark(8);
student1.mark(10);
student1.mark(10);

student1.present();
student1.present();
student1.absent();
student1.present();

console.log(student1);
console.log(student1.age());
console.log(student1.getAverageRating());
console.log(student1.summary());


let student2 = new Student('Eva', 'White', 1995);

student2.mark(5);
student2.mark(10);
student2.mark(1);
student2.mark(10);

student2.present();
student2.absent();
student2.absent();
student2.absent();


console.log(student2);
console.log(student2.age());
console.log(student2.getAverageRating());
console.log(student2.summary());




