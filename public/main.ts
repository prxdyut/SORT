import $ from "jquery";
import { WOW } from "wowjs";
import "animate.css";
import "owl.carousel";
import "jquery-ui-dist/jquery-ui";

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

// Assign jQuery to global window object
window.$ = $;
window.jQuery = $;

$(document).ready(() => {
  "use strict";

  // Spinner
  const spinner = $("#spinner");
  if (spinner.length) {
    spinner.removeClass("show");
  }

  // Initiate WOW.js
  const wow = new WOW({
    boxClass: "wow",
    animateClass: "animated",
    offset: 0,
    mobile: true,
    live: true,
  });
  wow.init();

  // Sticky Navbar
  $(window).scroll(() => {
    const stickyTop = $(".sticky-top");
    if (stickyTop.length) {
      if ($(window).scrollTop() > 300) {
        stickyTop.addClass("shadow-sm").css("top", "0px");
      } else {
        stickyTop.removeClass("shadow-sm").css("top", "-100px");
      }
    }
  });

  // Back to top button
  $(window).scroll(() => {
    const backToTop = $(".back-to-top");
    if (backToTop.length) {
      backToTop.fadeToggle($(window).scrollTop() > 300 ? "slow" : 0);
    }
  });

  const backToTopBtn = $(".back-to-top");
  if (backToTopBtn.length) {
    backToTopBtn.on("click", function() {
      $("html, body").animate({ scrollTop: 0 }, 1500, "swing");
      return false;
    });
  }

  // Testimonials carousel
  $(".testimonial-carousel").owlCarousel({
    autoplay: true,
    smartSpeed: 1000,
    loop: true,
    nav: false,
    dots: true,
    items: 1,
    dotsData: true,
  });

  // Highlight active navbar link
  const currentPage = window.location.pathname.split("/").pop();
  $(".navbar-nav .nav-link").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active");
    }
  });
});

export default {};
