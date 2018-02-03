// run this in the Chrome console

function Month(name, days) {
  this.name = name;
  this.days = days;
}

Month.prototype.hasDays = function (days) {
  return this.days === days;
};

Month.prototype.isLongMonth = function () {
  return this.hasDays(31);
};

Month.prototype.toString = function () {
  return `${this.name} has ${this.days} days.`;
};

Month.prototype.toConsole = function () {
  console.log(this.toString());
};

const january = new Month('January', 31);

function walkPrototypeChain(obj) {
  console.log(obj);
  const proto = Object.getPrototypeOf(obj);
  if (proto !== null) {
    walkPrototypeChain(proto);
  }
}

walkPrototypeChain(january);
