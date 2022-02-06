'use strict';

// Неправильно (методы должны лежать в прототипе), смотри script2 !

function Student(name, surname, yearOfBirth) {
    const studentData = {

        name: name,
        surname: surname,
        yearOfBirth: yearOfBirth,

        get age() {
            return 2022 - this.yearOfBirth
        },
        set age(userAge) {
            return this.yearOfBirth = 2022 - userAge
        },

        attendance: new Array(10),
        rating: new Array(10),

        findEmptyElement(arr) {
            let emptyElementIndex = arr.findIndex((item) => item === undefined);
            return emptyElementIndex
        },

        present() {
            let emptyElementIndex = this.findEmptyElement(this.attendance);
            this.attendance[emptyElementIndex] = true
        },

        absent() {
            let emptyElementIndex = this.findEmptyElement(this.attendance);
            this.attendance[emptyElementIndex] = false
        },

        mark(ratingValue) {
            let emptyElementIndex = this.findEmptyElement(this.rating);
            this.rating[emptyElementIndex] = ratingValue
        },

        getAverageRating() {
            let numOfElementsRating = 0;

            let sumRating = this.rating.reduce((prevValue, item) => {
                ++numOfElementsRating;
                return item + prevValue
            }, 0);
            let averageRating = sumRating / numOfElementsRating;
            return averageRating

        },

        getAverageAttendance() {
            let numOfElementsAttendance = 0;
            let sumAttendance = this.attendance.reduce((prevValue, item) => {
                ++numOfElementsAttendance;
                return +item + prevValue
            }, 0);
            let averageAttendance = sumAttendance / numOfElementsAttendance;
            return averageAttendance
        },

        summary() {

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

        },

    };


    return studentData
};


let student1 = new Student('Max', 'Black', 1990);
let student2 = new Student('Eva', 'White', 1995);
console.log(student1);
console.log(student2);


student1.mark(10);
student1.mark(8);
student1.mark(10);
student1.mark(10);

student1.present();
student1.present();
student1.absent();
student1.present();

student1.age = 25;
console.log(student1.age);
console.log(student1.getAverageRating());
console.log(student1.summary());

console.log(student1);




