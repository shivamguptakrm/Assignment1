const button1 = document.getElementById("id1");

const button2 = document.getElementById("id2");

const totalAmount = document.getElementById("amount");

let val = 0;

const buttonClicked1 = () => {
  button1.addEventListener("click", function () {
    // console.log("button1");
    button1.classList.add("div-qty-focus");
    button2.classList.remove("div-qty-focus");
    val = 399;
    // console.log(val);
  });
};

buttonClicked1();

const buttonClicked2 = () => {
  button2.addEventListener("click", function () {
    console.log("button2");
    button2.classList.add("div-qty-focus");
    button1.classList.remove("div-qty-focus");
    val = 209;
    calculate(209, 3);
  });
};

buttonClicked2();

// ***************************************************
// Select increment and decrement buttons
const incrementCount = document.getElementById("increment-count");
const decrementCount = document.getElementById("decrement-count");

// Select total count
const totalCount = document.getElementById("total-count");

// Variable to track count
// var count = 1;
let count = document.getElementById("total-count").innerHTML;

// Display initial count value
totalCount.innerHTML = count;
console.log(totalCount.innerHTML);

// Function to increment count
const handleIncrement = () => {
  count++;
  totalCount.innerHTML = count;
  console.log(count);
  //   buttonClicked1();
  calculate(val, count);
};

// Function to decrement count
const handleDecrement = () => {
  count--;
  totalCount.innerHTML = count;
  //   calculate(399, increment);
  calculate(val, count);
};
console.log(count);
// Add click event to buttons
incrementCount.addEventListener("click", handleIncrement);
decrementCount.addEventListener("click", handleDecrement);

let increment = document.getElementById("total-count").innerHTML;

// *************************************************
const calculate = (val, increment) => {
  console.log(val, increment);

  let total = val * increment;
  console.log(total);

  totalAmount.textContent = `=Rs ${total}`;
};
