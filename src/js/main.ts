import $ from "jquery";
import { WOW } from "wowjs";
import "animate.css";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel";
import "jquery-ui/ui/effects/effect-slide";

declare global {
  interface Window {
    $: any;
    jQuery: any;
  }
}

// Assign jQuery to the global window object
window.$ = $;
window.jQuery = $;

$(document).ready(() => {
  "use strict";

  // Spinner
  const spinner = () => {
    setTimeout(() => {
      if ($("#spinner").length > 0) {
        $("#spinner").removeClass("show");
      }
    }, 1);
  };
  spinner();

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
    if ($(window).scrollTop() > 300) {
      $(".sticky-top").addClass("shadow-sm").css("top", "0px");
    } else {
      $(".sticky-top").removeClass("shadow-sm").css("top", "-100px");
    }
  });

  // Back to top button
  $(window).scroll(() => {
    if ($(window).scrollTop() > 300) {
      $(".back-to-top").fadeIn("slow");
    } else {
      $(".back-to-top").fadeOut("slow");
    }
  });

  $(".back-to-top").click(() => {
    $("html, body").animate({ scrollTop: 0 }, 1500, "swing");
    return false;
  });

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

  // Highlight active navbar link based on the current page
  const currentPage = window.location.pathname.split("/").pop();
  $(".navbar-nav .nav-link").each(function () {
    if ($(this).attr("href") === currentPage) {
      $(this).addClass("active");
    }
  });
});

export default {};
