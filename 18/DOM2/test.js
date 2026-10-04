console.log("1");

// btn.addEventListener("click", () => console.log("2 (click)"));

async function run() {
  console.log("3");
  await Promise.resolve();
  console.log("4");
}

setTimeout(() => console.log("5"), 0);

run();

Promise.resolve().then(() => console.log("6"));

console.log("7");

// Assume the button is clicked several seconds later,
// well after everything above has finished.
