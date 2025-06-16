let count = 0;

let countEl = document.getElementById("count-el");
console.log(countEl);

function increment() {
  console.log("clicked");
  count = count + 1;
  countEl.innerText = count;
}

function save() {
  console.log(count);
}
