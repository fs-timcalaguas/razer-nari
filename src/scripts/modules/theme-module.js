AppName.Modules.ThemeModule = (function () {
  //Dependencies
  var core = AppName.Core;

  //////////////////////
  // Private Methods //
  ////////////////////
  const _privateMethod = () => {
    // private stuff

    const swiper = new Swiper('.swiper-container', {

      slidesPerView: 4,
      spaceBetween: 12,
      slidesPerGroup: 4,
      pagination: {
        el: '.swiper-pagination',
        clickable: true
      },
      breakpoints: {
        450: {
          slidesPerView: 1,
          spaceBetween: 12,
          slidesPerGroup: 6,
        },
        800: {
          slidesPerView: 2,
          spaceBetween: 12,
          slidesPerGroup: 2,
        },
        1100: {
          slidesPerView: 3,
          spaceBetween: 12,
          slidesPerGroup: 3,
        },
      },
    });

    function reveal() {
      var reveals = document.querySelectorAll(".reveal");
    
      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;
    
        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }
    
    window.addEventListener("scroll", reveal);

    
  };

  /////////////////////
  // Public Methods //
  ///////////////////
  const init = function () {
    _privateMethod();

    
  };

  return {
    init: init,
  };
})();
