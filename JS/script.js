// selecting the inputs

const result = document.getElementById("result");

// function
function clickMe() {
  // declare the logic of the function here im using math random to get the value by 1-10

  const value = Math.floor(Math.random() * 10);
  if (value > 5) {
    result.innerHTML = "Tails";
  } else {
    result.innerHTML = "Heads";
  }
}

// result.innerHTML = values;
