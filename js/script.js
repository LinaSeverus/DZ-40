'use strict';

const studentData = {

    name: 'Max',
    surname: 'Black',
    yearOfBirth: 1990,

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

    summary() {
        let numOfElementsRating = 0;
        let numOfElementsAttendance = 0;


        let sumRating = this.rating.reduce((prevValue, item) => {
            ++numOfElementsRating;
            return item + prevValue
        }, 0);

        let sumAttendance = this.attendance.reduce((prevValue, item) => {
            ++numOfElementsAttendance;
            return +item + prevValue
        }, 0);

        let averageRating = sumRating / numOfElementsRating;
        let averageAttendance = sumAttendance / numOfElementsAttendance;

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

studentData.mark(10);
studentData.mark(8);
studentData.mark(10);
studentData.mark(10);


studentData.present();
studentData.present();
studentData.absent();
studentData.present();




console.log(studentData.summary());
studentData.age = 25;
console.log(studentData);




