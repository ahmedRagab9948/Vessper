var nav = document.getElementById("header");
window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
  if (window.pageYOffset > 98) {
    nav.style.boxShadow = "0px 2px 15px rgb(0 0 0 / 10%)";
    nav.style.padding = "12px 0";
  } else {
    nav.style.boxShadow = "none";
    nav.style.padding = "26px 0";
  }
}

//

var getStarted = document.getElementById("godwon");
getStarted.addEventListener("click", () => {
  $("html, body").animate(
    {
      scrollTop: $("#sec_about").offset().top - 20,
    },
    1000
  );
});

// fire count to plugin
$(".timer").countTo();

// testimonial carousel
$(document).ready(function () {
  $(".owl-carousel").owlCarousel({
    items: 2,
    loop: true,
    autoplay: true,
    autoplayTimeout: 3000,
    smartSpeed: 2000,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
    },
  });
});

// add class show
$(".port .container-fluid ul li").click(function () {
  $(this).addClass("show").siblings().removeClass("show");
});

// trigger mixitup
$("#Container").mixItUp();

/**
 * Mobile nav toggle
 */

let menuBtt = document.querySelector(".mobile-nav-toggle");
let navbar = document.querySelector("#navbar");
let close = document.querySelector(".fa-times");

menuBtt.addEventListener("click", function () {
  navbar.classList.add("navbar-mobile");
});
close.addEventListener("click", function () {
  navbar.classList.remove("navbar-mobile");
});

// ############################## on scroll #########################################
let section = document.querySelectorAll(".section");
let navLinks = document.querySelectorAll(".navbar ul a");

window.onscroll = () => {
  navbar.classList.remove("navbar-mobile");
  section.forEach((sec) => {
    let top = window.scrollY;
    let height = sec.offsetHeight;
    let offset = sec.offsetTop - 80;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        let link = document.querySelector(".navbar ul a[href*=" + id + "]");
        link.classList.add("active");
      });
    }
  });
};
// ############################## on scroll #########################################

// ###################### Add Class Active ###########################
$(".navbar ul a").click(function () {
  $(this).addClass("active").siblings().removeClass("active");
});
// ###################### Add Class Active ###########################

// ###################### smooth scroll to div ###########################
$(".navbar ul a").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#" + $(this).data("value")).offset().top - 50,
    },
    1000
  );
});
// ###################### smooth scroll to div ###########################

// ###################### back to top ###########################
let back = document.querySelector(".back-to-top");
window.addEventListener("scroll", backFunction);
function backFunction() {
  if (window.pageYOffset >= 750) {
    back.style.opacity = "1";
  } else {
    back.style.opacity = "0";
  }
}
back.onclick = function () {
  $("html, body").animate(
    {
      scrollTop: 0,
    },
    1000
  );
};
// ###################### back to top ###########################
