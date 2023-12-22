window.onresize = function(){ location.reload(); }

function bootnavbar(options) {
    const defaultOption = {
      selector: "main_navbar",
      animation: true,
      animateIn: "animate__fadeIn",
    };
  
    const bnOptions = { ...defaultOption, ...options };
  
    const mediaQuery = window.matchMedia('(min-width: 1199px)')
    const mediapc = window.matchMedia('(min-width: 1199px)')
    
    init = function () {
      var dropdowns = document
        .getElementById(bnOptions.selector)
        .getElementsByClassName("dropdown");
  
      Array.prototype.forEach.call(dropdowns, (item) => {
        //add animation
        if (bnOptions.animation) {
          const element = item.querySelector(".dropdown-menu");
          element.classList.add("animate__animated");
          element.classList.add(bnOptions.animateIn);
        }
  
       if (mediaQuery.matches) {
            item.addEventListener("mouseover", function () {
                this.classList.add("show");
                const element = this.querySelector(".dropdown-menu");
                element.classList.add("show");
              });
        
              item.addEventListener("mouseout", function () {
                this.classList.remove("show");
                const element = this.querySelector(".dropdown-menu");
                element.classList.remove("show");
              });
          } 

          if (mediapc.matches) {
            item.addEventListener("mouseclick", function () {
                this.classList.add("show");
                const element = this.querySelector(".dropdown-menu");
                element.classList.add("show");
              });
        
   
          }
        //hover effects
        
      });
    };
  
    init();
  }
  
