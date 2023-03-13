let botones = document.getElementById("red");
let con = true;
botones.addEventListener("click", function () {
  let bar = document.querySelector(".bar");
  if (con == true) {
    bar.style.width = "0";
    con = false;
  } else {
    bar.style.width = "80%";
    con = true;
  }
});