// Functional programming

'use strict';

function Month(name, days) {
  this.name = name;
  this.days = days;

  this.hasDays = function (days) {
    return this.days === days;
  };

  this.isLongMonth = function () {
    return this.hasDays(31);
  };

  this.toString = function () {
    return `${this.name} has ${this.days} days.`;
  };

  this.toConsole = function () {
    console.log(this.toString());
  };
}

const months = [
  new Month('January', 31),
  new Month('February', 28),
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

months
  .filter(month => month.isLongMonth())
  .forEach(month => month.toConsole());
