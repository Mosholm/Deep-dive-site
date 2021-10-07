// pageloader site

window.addEventListener("load", () => {
  console.log("loaded");
  const preloader = document.querySelector(".preloaderBg");
  preloader.classList.add("done");
  
  const preloaderDemo = document.querySelector(".preloaderDemo");
  preloaderDemo.classList.add("done");
});

// // Hand writing
// Get the exact lenght, of the stroct by typing this in the console

// p=document.getElementById('first');
// p.getTotalLength()

/*download button*/

document.addEventListener("click", function () {
  var collapse = document.getElementById("container");
  collapse.classList.toggle("collapse");

  var newline = document.getElementById("newLine");
  newLine.classList.add("show");
  newline.classList.remove("hidden");

  var remove = document.getElementById("container");
  remove.classList.add("hidden");
});
