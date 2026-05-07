// main.mjs
import CashManage from "./management-market.mjs";
const market = {};
const employees = [];
// DOM
const buttons = document.querySelectorAll("button");
const dashboard = document.querySelector(".dashboard");
const addEmployee = document.querySelector(".add-employee");
const registerEmployee = document.querySelector(".register-employee");
buttons.forEach((btn) => {
  btn.addEventListener("click", (ev) => {
    ev.preventDefault();
    const target = ev.target;
    const form = target.closest("form");
    // add market
    if (
      target.classList.contains("register-market") &&
      form.querySelector("#market_name").value !== ""
    ) {
      Object.assign(market, Object.fromEntries(new FormData(form)));
      render();
      form.classList.add("none");
      dashboard.classList.remove("none");
      console.log(new CashManage(market, employees));
    } else if (
      target.classList.contains("register-employee") &&
      form.querySelector("#employee_name").value !== ""
    ) {
      employees.push(Object.fromEntries(new FormData(form)));
      form.classList.add("none");
      dashboard.classList.remove("none");
      console.log(new CashManage(market, employees));
    }
  });
});
addEmployee.addEventListener("click", () => {
  registerEmployee.classList.remove("none");
  dashboard.classList.add("none");
});
const render = () => {
  const h1 = document.querySelector("h1");
  h1.innerText = `${market.market_name}!`;
};

const menuBtn = document.querySelector(".btn-menu");
const closeMenu = document.querySelector(".close-menu");
const main = document.querySelector("main");
const aside = document.querySelector("aside");
const body = document.querySelector("body");
menuBtn.addEventListener("click", () => {
  aside.classList.toggle("short");
  main.classList.toggle("large");
  body.classList.toggle("overflow-y");
});
closeMenu.addEventListener("click", () => {
  aside.classList.remove("short");
  main.classList.remove("large");
  body.classList.remove("overflow-y");
});
// day sales

/* 
market.add(10, "Deodorant Sale");
market.add(940, "Money from the boss");
market.withdraw(50, "Man in Red Clothes Robbed Us");
market.pay();
market.add(30, "Sale of Noodles, Vegetables and Fish Food");
market.withdraw(12, "Electricity Payment");
market.pay();
console.log(market.currentCash);
console.log(market.currentHistory);
console.log(market);
*/
