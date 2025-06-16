let count = 0;
let saveEl = document.getElementById("save-el");

let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
  console.log("clicked");
  count += 1;
  countEl.innerText = count;
}

function save() {
  let countDash = count + "-";
  saveEl.innerText += countDash;
}
