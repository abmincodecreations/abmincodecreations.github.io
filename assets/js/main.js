/**
* Template Name: Personal - v2.3.0
* Template URL: https://bootstrapmade.com/personal-free-resume-bootstrap-template/
* Author: BootstrapMade.com
* License: https://bootstrapmade.com/license/
*/
!(function($) {
  "use strict";

  // Nav Menu
  $(document).on('click', '.nav-menu a, .mobile-nav a', function(e) {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var hash = this.hash;
      var target = $(hash);
      if (target.length) {
        e.preventDefault();

        if ($(this).parents('.nav-menu, .mobile-nav').length) {
          $('.nav-menu .active, .mobile-nav .active').removeClass('active');
          $(this).closest('li').addClass('active');
        }

        if (hash == '#header') {
          $('#header').removeClass('header-top');
          $("section").removeClass('section-show');
          return;
        }

        if (!$('#header').hasClass('header-top')) {
          $('#header').addClass('header-top');
          setTimeout(function() {
            $("section").removeClass('section-show');
            $(hash).addClass('section-show');

          }, 350);
        } else {
          $("section").removeClass('section-show');
          $(hash).addClass('section-show');
        }

        $('html, body').animate({
          scrollTop: 0
        }, 350);

        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }

        return false;

      }
    }
  });

  // Activate/show sections on load with hash links
  if (window.location.hash) {
    var initial_nav = window.location.hash;
    if ($(initial_nav).length) {
      $('#header').addClass('header-top');
      $('.nav-menu .active, .mobile-nav .active').removeClass('active');
      $('.nav-menu, .mobile-nav').find('a[href="' + initial_nav + '"]').parent('li').addClass('active');
      setTimeout(function() {
        $("section").removeClass('section-show');
        $(initial_nav).addClass('section-show');
      }, 350);
    }
  }

// Testimonials carousel (uses the Owl Carousel library)
$(".testimonials-carousel").owlCarousel({
  autoplay: true,
  dots: true,
  loop: true,
  responsive: {
    0: {
      items: 1
    },
    768: {
      items: 2
    },
    900: {
      items: 3
    }
  }
});

  // Mobile Navigation
  if ($('.nav-menu').length) {
    var $mobile_nav = $('.nav-menu').clone().prop({
      class: 'mobile-nav d-lg-none'
    });
    $('body').append($mobile_nav);
    $('body').prepend('<button type="button" class="mobile-nav-toggle d-lg-none"><i class="icofont-navigation-menu"></i></button>');
    $('body').append('<div class="mobile-nav-overly"></div>');

    $(document).on('click', '.mobile-nav-toggle', function(e) {
      $('body').toggleClass('mobile-nav-active');
      $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
      $('.mobile-nav-overly').toggle();
    });

    $(document).click(function(e) {
      var container = $(".mobile-nav, .mobile-nav-toggle");
      if (!container.is(e.target) && container.has(e.target).length === 0) {
        if ($('body').hasClass('mobile-nav-active')) {
          $('body').removeClass('mobile-nav-active');
          $('.mobile-nav-toggle i').toggleClass('icofont-navigation-menu icofont-close');
          $('.mobile-nav-overly').fadeOut();
        }
      }
    });
  } else if ($(".mobile-nav, .mobile-nav-toggle").length) {
    $(".mobile-nav, .mobile-nav-toggle").hide();
  }

  // jQuery counterUp
  $('[data-toggle="counter-up"]').counterUp({
    delay: 10,
    time: 1000
  });

  // Skills section
  $('.skills-content').waypoint(function() {
    $('.progress .progress-bar').each(function() {
      $(this).css("width", $(this).attr("aria-valuenow") + '%');
    });
  }, {
    offset: '80%'
  });
  
  $('.carousel').carousel()

  // Testimonials carousel (uses the Owl Carousel library)
  $(".testimonials-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    responsive: {
      0: {
        items: 1
      },
      768: {
        items: 2
      },
      900: {
        items: 3
      }
    }
  });

  // Portfolio details carousel
  $(".portfolio-details-carousel").owlCarousel({
    autoplay: true,
    dots: true,
    loop: true,
    items: 1
  });

  

})(jQuery);

// services section (animee)
var anyclickonpage= false;
function animee() {
  var element = document.getElementById("animee");
  element.classList.add("animeestyle");
}

function bg(){
  document.getElementById("myDIV").classList.add("body");
  sliderBtnVisibility();
  anyclickonpage= true;
}

function sliderBtnVisibility(){
  document.getElementById("slider-btn").style.display="none";
  slidergifVisibility();
  anyclickonpage= true;
}

function slidergifVisibility(){
  if (window.matchMedia("(max-width: 993px)").matches) {
    SetLodingPageModeOff();
    document.getElementById("gif-hello").style.display="none";
    sliderBtnVisibility();
    bg();
    anyclickonpage= true;
    if (window.matchMedia("(max-width: 409px)").matches) {
      document.getElementsByClassName("Prototype-heading-switch").innerHTML=`<h3>Design Considerations while Prototyping</h3>`;
    }
  }
}



function gotoProjects(){
  document.getElementById("nav-projects").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}

function gotoContact(){
  document.getElementById("nav-contact").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}

function gotoResume(){
  document.getElementById("nav-resume").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}

function gotoAboutMe(){
  document.getElementById("nav-about").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}
function gotoUxProjects(){
  document.getElementById("nav-ux-projects").click();
  sliderBtnVisibility();
  slidergifVisibility();
  anyclickonpage= true;
}


function WindowSizeAdjustor(){
  var varWidth = document.documentElement.clientWidth;
  var varHeight = document.documentElement.clientHeight;
  if(anyclickonpage){
    if (varWidth<993) {
        slidergifVisibility();
    }
  }
}


function SetLodingPageModeOff(){
 document.getElementById("loading-box").style.display="none";
 
}


    const text1 = "Hello,👋I'm";
    const text2 = "Abhishek";
    const text3 = "Mishra";
    const text4 = "I Design Digital Products Experiences";
    const text5 = "by bringing Users closer to digital interfaces.";
    const maxRepeats = 1; // Set the number of times each animation should repeat

    // Function to handle typing animation
    function typeText(elementId, text, typingSpeed = 50) {
      return new Promise((resolve) => {
        const typingElement = document.getElementById(elementId);
        let index = 0;

        function type() {
          if (index < text.length) {
            typingElement.textContent += text.charAt(index);
            typingElement.classList.add('typing-cursor');
            index++;
            setTimeout(type, typingSpeed);
          } else {
            typingElement.classList.remove('typing-cursor');
            resolve(); // Resolve when the animation is complete
          }
        }

        type();
      });
    }

    // Function to repeat the animation a specified number of times for both elements
    async function startAnimations() {
      for (let i = 0; i < maxRepeats; i++) {
        // Repeat both text animations one after another
        await typeText("typing-text-1", text1);
        await typeText("typing-text-2", text2);
        await typeText("typing-text-3", text3);
        await typeText("typing-text-4", text4);
        await typeText("typing-text-5", text5);
        
        // Clear the text after each complete round if more repeats remain
        if (i < maxRepeats - 1) {
          document.getElementById("typing-text-1").textContent = "";
          document.getElementById("typing-text-2").textContent = "";
          document.getElementById("typing-text-3").textContent = "";
          document.getElementById("typing-text-4").textContent = "";
          document.getElementById("typing-text-5").textContent = "";
        }
      }
    }

    

    startAnimations(); 



window.addEventListener("resize", WindowSizeAdjustor);
 
window.onload = function pageReloadUiManager(){
  SetLodingPageModeOff();
  document.getElementsByTagName('h1')[0].focus();
  var currentUrl="hii"+window.location.href;
  var homepage="hiihttps://abmincodecreations.github.io/";
  if(currentUrl != homepage){
   bg();
   
   anyclickonpage= true;
    }
   
   }

