(function(){
    // animation on scroll js start
    "use strict";
window.addEventListener ('load',function(){
    AOS.init({
        duration:1000,
        easing: "ease-in-out",
        once: true,
        mirror: false,
    })
    });
    // annimation on screen end .
    

// hero typing effects adding
const typed = select(".typed");
if (typed) {
  let typed_strings = typed.getAttribute("data-typed-items");
  typed_strings = typed_strings.split(",");
  new Typed(".typed", {
    strings: typed_strings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
  });
}

// hero end 
//  mobile navbar togal
on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    // e.preventDefault();
    this.classList.toggle("bi-menu-button-wide-fill");
    this.classList.toggle("bi-x");
  });


})();