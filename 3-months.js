// Constructor function and new

'use strict';

function Month(name, days) {
  this.name = name;
  this.days = days;
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
  .filter(month => month.days === 31)
  .map(month => `${month.name} has ${month.days} days.`)
  .forEach(string => console.log(string));
