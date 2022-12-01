const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
const line = document.querySelector(".line");

let currentActive = 1;
next.addEventListener("click", () => {
  currentActive = currentActive + 1;

  if (currentActive > circles.length) {
    currentActive = circles.length;
  }

  update();
});


prev.addEventListener("click", () => {
  currentActive = currentActive - 1;
  if (currentActive < 1) {
    currentActive = 1;
  }

  update();
});

function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const actives = document.querySelectorAll(".active");
  
  // ! formula for the porgress bar

  line.style.width = ((actives.length - 1) / (circles.length - 1)) * 100 + "%";
  //   console.log(actives.length - 1, circles.length - 1);
  //   console.log(((actives.length - 1) * 100) / (circles.length - 1));


  // * For buttons Disabled and active state
  if (actives.length === 1) {
    prev.classList.add("disabled");
  } else if (actives.length === circles.length) {
    next.classList.add("disabled");
  } else {
    prev.classList.remove("disabled");
    next.classList.remove("disabled");
  }
}
