// alert("hello world");
// const btn = document.querySelector(".hamburger");
// const menu = document.querySelector(".menu");

// btn.addEventListener("click", function(){
//    menu.classList.toggle("show-menu"); 
// });



// jQuery
$(document).ready(function(){
    $(".hamburger").click(function(){
      $(".menu").toggleClass("show-menu");
    });
  });