var currentSlide;
var keepRunning;
var slides;
var currentIndex;
var slideInterval;
 $(() => {
  var fullpageOptions = {
    sectionsColor: ["none", "#4BBFC3", "#7BAABE", "grey", "#000"],
    anchors: ["section1", "section2", "section3", "section4"],
    controlArrows: false,
    normalScrollElements: ".about, .projects, .socials",
    navigation: true,
    slidesNavigation: true,
    menu: "#menu",
    dragAndMove: true,
    scrollHorizontally: true,
    afterSlideLoad: function(section, origin, destination, direction, trigger) {
      currentSlide = getActiveSlide();
      if (typeof currentSlide !== "undefined") {
        keepRunning = true;
        autoSlide(currentSlide);
      }
    },
    onSlideLeave: function(section, origin, destination, direction, trigger) {
      if (typeof currentSlide !== 'undefined') {
        keepRunning = false;
        currentSlide.removeClass("active");
        currentSlide.eq(0).addClass("active");
        clearInterval(slideInterval); // Stop the interval when leaving the slide

        const slider = $(".slider");
        slider.animate({ scrollLeft: 0 }, 500); // Assuming each slide is 100% width
      }
    }
  };

   $("#fullpage").fullpage(fullpageOptions);
   $(".slider-arrow-right").click(function() {
    $.fn.fullpage.moveSlideRight();
  });
   $(".slider-arrow-left").click(function() {
    $.fn.fullpage.moveSlideLeft();
  });

   function getActiveSlide() {
    var active = $(".slide.fp-slide.fp-table.active")[0]; //Gets the active slide
    var containerObj = $(active).find(".container"); // Finds the container element within the active slide
    if (containerObj.length > 0) {
      var navObj = containerObj.find("a"); // Finds the navigation links within the container
      return navObj;
    }
  }

   function autoSlide(slideSlides) {
    slides = slideSlides;
    currentIndex = 0;
     function showSlide(index) {
      slides.removeClass("active");
      currentIndex = index % slides.length;
      slides.eq(currentIndex).addClass("active");
       // Scroll to the selected slide (assuming each slide is 100% width)
      const slider = $(".slider");
      slider.animate({ scrollLeft: currentIndex * slider.width() }, 500); // Use CSS transitions for smoother scrolling
    }
     // Clear the previous interval, if any
    clearInterval(slideInterval);
     // Start sliding automatically (change the interval duration as per your preference)
    slideInterval = setInterval(nextSlide, 4000); // 4000ms = 4 seconds
     function nextSlide() {
      showSlide(currentIndex + 1);
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
