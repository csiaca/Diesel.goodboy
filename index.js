let countEl = document.getElementById("count-el");
let count = 0;

function increment() {
  count += 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}

function GoodBoyDays() {
  count = 0;
  countEl.innerText = count;
}

let saveEl = document.getElementById("save-el");
let CountEl = document.getElementById("count-el");
let Count = 0;

function increment() {
  count += 1;
  countEl.textContent = count;
}

function save() {
  let countStr = count;
  saveEl.textContent = "Previous Streak: " + count + " Day(s)";
}

let History = document.getElementById("save-el");
function Clear_History() {
  saveEl.textContent = "Previous Streak: 0 Day(s)";
}
