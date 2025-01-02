function Student(name, surname, birthDate, grades = []) {
    this.name = name;
    this.surname = surname;
    this.birthDate = birthDate;
    this.grades = grades;
    this.attendance = new Array(25).fill(null);
}

Student.prototype.getAge = function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.birthDate;
};

Student.prototype.getAverage = function () {
    if (this.grades.length === 0) return 0;
    const sum = this.grades.reduce((acc, grade) => acc + grade, 0);
    return sum / this.grades.length;
};

Student.prototype.present = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = true;
    } else {
        console.log("Масив відвідуваності заповнений!");
    }
    return this;
};

Student.prototype.absent = function () {
    const index = this.attendance.indexOf(null);
    if (index !== -1) {
        this.attendance[index] = false;
    } else {
        console.log("Масив відвідуваності заповнений!");
    }
    return this;
};

Student.prototype.summary = function () {
    const averageScore = this.getAverage();
    const attendanceCount = this.attendance.filter((el) => el === true).length;
    const attendanceRatio = attendanceCount / this.attendance.filter((el) => el !== null).length;

    if (averageScore > 90 && attendanceRatio > 0.9) {
        return "Молодець!";
    } else if (averageScore > 90 || attendanceRatio > 0.9) {
        return "Добре, але можна краще.";
    } else {
        return "Редиска!";
    }
};

const student1 = new Student("Іван", "Бойко", 1992, [100, 95, 92, 98]);
const student2 = new Student("Олена", "Шевченко", 1988, [95, 88, 90]);
const student3 = new Student("Олег", "Кириченко", 1987, [60, 50, 45]);

student1.present().present().present().present();
student2.present().absent().present().absent();
student3.absent().absent().absent();

console.log(`${student1.name} ${student1.surname} (вік ${student1.getAge()}) - ${student1.summary()}`);
console.log(`${student2.name} ${student2.surname} (вік ${student2.getAge()}) - ${student2.summary()}`);
console.log(`${student3.name} ${student3.surname} (вік ${student3.getAge()}) - ${student3.summary()}`);

