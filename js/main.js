var currentSlide;
var keepRunning;
$(() => {
  $("#fullpage").fullpage({
    sectionsColor: ["none", "#4BBFC3", "#7BAABE", "whitesmoke", "#000"],
    anchors: ["section1", "section2", "section3"],
    controlArrows: false,
    normalScrollElements: ".about",
    navigation: true,
    slidesNavigation: true,
    menu: "#menu",
    scrollHorizontally: true,
    afterSlideLoad: function(section,origin,destination,direction,trigger){
      currentSlide = getActiveSlide();
      if (typeof currentSlide !== "undefined") {
        keepRunning = true;
        autoSlide(currentSlide);
      }
    },
    onSlideLeave: function (section, origin, destination, direction, trigger){
      if (typeof currentSlide !== 'undefined') {
        keepRunning = false;
        currentSlide.removeClass("active");
        currentSlide.eq(0).addClass("active");
        clearInterval(slideInterval); // Stop the interval when leaving the slide
      }
    }
  });

  let slideInterval;

  function autoSlide(slideSlides) {
    const slides = slideSlides;
    let currentIndex = 0;

    function showSlide(index) {
      slides.eq(currentIndex).removeClass("active");
      currentIndex = index % slides.length;
      slides.eq(currentIndex).addClass("active");

      // Scroll to the selected slide (assuming each slide is 100% width)
      const slider = $(".slider");
      slider.scrollLeft(currentIndex * slider.width());
    }

    function nextSlide() {
      showSlide(currentIndex + 1);
    }

    // Clear the previous interval, if any
    clearInterval(slideInterval);

    // Start sliding automatically (change the interval duration as per your preference)
    slideInterval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
  }

  $(".slider-arrow-right").click(function () {
    $.fn.fullpage.moveSlideRight();
  });

  // Move to the previous slide when clicking the left arrow
  $(".slider-arrow-left").click(function () {
    $.fn.fullpage.moveSlideLeft();
  });

  function getActiveSlide() {
    var active = $(".slide.fp-slide.fp-table.active")[0]; //Gets the active slide
    let getContainer = active.children[0].children[0].children[0].children; //i know it seems weird, but fullpage just adds like 10 divs
    let containerObj = $(getContainer); //Converts to a jquery object
    let hasContainer = false;
    let navObjects;
    containerObj.each(function () {
      if ($(this).hasClass("container")) { //Checks for the container class (means that there is a slider in the object)
        hasContainer = true;
        navObjects = $(this); //Convert this element to a jquery object
        return false; //Breaks each cycle
      }
    });
    if (hasContainer) {
      let navs = $(navObjects.contents()[1]).contents()[3]; // Get (once again) inner children of the object to find the one where the nav list is stored
      let navObj = $(navs).find("a");
      return navObj;
    }
  }
});

// Particles js config

/* -----------------------------------------------
/* How to use? : Check the GitHub README
/* ----------------------------------------------- */

/* To load a config file (particles.json) you need to host this demo (MAMP/WAMP/local)... */
/*
particlesJS.load('particles-js', 'particles.json', function() {
  console.log('particles.js loaded - callback');
});
*/

/* Otherwise just put the config content (json): */

particlesJS(
  "particles-js",

  {
    particles: {
      number: {
        value: 80,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#fff",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "img/github.svg",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 0.5,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 5,
        random: true,
        anim: {
          enable: false,
          speed: 40,
          size_min: 0.1,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#ffffff",
        opacity: 0.4,
        width: 1,
      },
      move: {
        enable: true,
        speed: 6,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
    config_demo: {
      hide_card: false,
      background_color: "#b61924",
      background_image: "",
      background_position: "50% 50%",
      background_repeat: "no-repeat",
      background_size: "cover",
    },
  }
);
