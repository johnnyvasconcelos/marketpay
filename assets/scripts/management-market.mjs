// management-market.mjs
class CashManage {
  #cash = 0;
  #history = [];
  constructor(market, employees) {
    this.name = market.market_name;
    this.#cash = market.actual_cash;
    this.boss = market.market_owner;
    this.employees = employees;
    this.payments = false;
    this.renewal();
  }
  salaries(employees) {
    let amount = 0;
    for (let employee of employees) {
      amount += employee.salary;
    }
    return amount;
  }
  add(value, action) {
    this.#history.push(`${action}: Add ${value} to the cash!`);
    this.#cash += value;
  }
  withdraw(value, action) {
    this.#history.push(`${action}: Withdraw ${value} to the cash!`);
    this.#cash -= value;
  }
  pay() {
    if (
      this.#cash >= this.salaries(this.employees) &&
      this.payments === false
    ) {
      this.#history.push(
        `The employees' salaries were paid. Total: ${this.salaries(this.employees)}`,
      );
      this.payments = true;
      for (let employee of this.employees) {
        this.payEmployee(employee);
      }
      this.#cash -= this.salaries(this.employees);
    } else {
      console.error("Error: Don't Have Cash for Paying Employees this Time!");
      this.#history.push("Don't Have Cash for Paying Employees this Time!");
    }
  }
  get currentCash() {
    return this.#cash;
  }
  get currentHistory() {
    return this.#history;
  }
  payEmployee(emp) {
    emp.cash = emp.salary;
  }
  transfer() {
    this.#history.push(`Transferring ${this.#cash} to the boss!`);
    this.boss.pocket += this.#cash;
    this.#cash = 0;
  }
  update() {
    this.renewal();
  }
  renewal() {
    const now = new Date();
    const next = new Date(now.getFullYear(), now.getMonth() + 1, 1, 0, 0, 0);
    const time = next - now;
    setTimeout(() => {
      this.#history.push("New Month!");
      this.payments = false;
    }, time);
  }
}

export default CashManage;
