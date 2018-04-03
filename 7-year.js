// Object-oriented programming (OOP) with ES6 classes

'use strict';

class Month {
  constructor(name, days) {
    this.name = name;
    this.days = days;
  }

  hasDays(days) {
    return this.days === days;
  }

  isLongMonth() {
    return this.hasDays(31);
  }

  toString() {
    return `${this.name} has ${this.days} days.`;
  }

  toConsole() {
    console.log(this.toString());
  }
}

class Year {
  constructor(year) {
    this.year = year;
    this.months = [
      new Month('January', 31),
      new Month('February', this.isLeapYear() ? 29 : 28),
      new Month('March', 31),
      new Month('April', 30),
      new Month('May', 31),
      new Month('June', 30),
      new Month('July', 31),
      new Month('August', 31),
      new Month('September', 30),
      new Month('October', 31),
      new Month('November', 30),
      new Month('December', 31)
    ];
  }

  isLeapYear() {
    return (this.year % 4 === 0) && (this.year % 100 !== 0);
  }

  totalDays() {
    return this.months.reduce((total, month) => {
      return total + month.days;
    }, 0);
  }

  monthForDayNumber(dayNumber) {
    let total = 0;
    for (const month of this.months) {
      if (dayNumber > total && dayNumber <= total + month.days) {
        return month;
      }
      total += month.days;
    }
    return null;
  }

  monthForWeekNumber(weekNumber) {
    const dayNumber = weekNumber * 7 - 6;
    return this.monthForDayNumber(dayNumber);
  }
}

const year = new Year(2018);
console.log(year.monthForWeekNumber(13));
