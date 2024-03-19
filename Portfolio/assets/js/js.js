(function(){
  // Animation on scroll js start
  "use strict";
  window.addEventListener('load', function(){
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
      mirror: false,
    });
  });
  // Animation on scroll end

  // Easy selector helper function
  const select = (el, all = false) => {
    el = el.trim();
    if (all) {
      return document.querySelectorAll(el);
    } else {
      return document.querySelector(el);
    }
  };

  // Easy event listener
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (Array.isArray(selectEl)) {
      selectEl.forEach(e => e.addEventListener(type, listener));
    } else {
      selectEl.addEventListener(type, listener);
    }
  };

  // Hero typing effects adding
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

  // Hero end

  // Mobile navbar toggle
  on("click", ".mobile-nav-toggle", function (e) {
    select("body").classList.toggle("mobile-nav-active");
    this.classList.toggle("bi-menu-button-wide-fill");
    this.classList.toggle("bi-x");
  });

})();
