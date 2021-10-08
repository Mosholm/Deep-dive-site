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
var click = document.getElementsById("download");


click.addEventListener("click", function () {
  console.log("click");
  var collapse = document.getElementById("background");
  collapse.classList.add("collapse");



  var newline = document.getElementById("newLine");
  newLine.classList.add("show");
  newline.classList.remove("hidden");

  var remove = document.getElementById("container");
  remove.classList.add("hidden");
});
