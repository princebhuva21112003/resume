var navMnuAnchorTags = document.querySelectorAll('.nav-menu a');

for(var i = 0;i<navMnuAnchorTags.length;i++){
    navMnuAnchorTags[i].addEventListener('click',function(event){
        event.preventDefault();
        var targetSectionID = this.textContent.trim().toLowerCase();
        var targetSection = document.getElementById(targetSectionID);

        
        var interval = setInterval(function(){
            var targetSectionCoordinates = targetSection.getBoundingClientRect();
            if(targetSectionCoordinates.top <= 0){
                clearInterval(interval);
                return;
            }
            window.scrollBy(0,50);
        },30);


    })
}

//   // Toggle dropdown open/close
// document.querySelectorAll(".dropdown .textBox").forEach(box => {
//   box.addEventListener("click", function () {
//     let dropdown = this.closest(".dropdown");
//     dropdown.classList.toggle("active");
//   });
// });

// // Select an option
// function selectOption(el) {
//   let dropdown = el.closest(".dropdown");
//   let textBox = dropdown.querySelector(".textBox");
//   textBox.value = el.textContent.trim();
//   dropdown.classList.remove("active"); // close after selection
// }
// Select all dropdowns
// Select all dropdowns
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach(dropdown => {
  const input = dropdown.querySelector(".textBox");

  // Toggle dropdown
  input.addEventListener("click", () => {
    // Close others
    dropdowns.forEach(d => {
      if (d !== dropdown) d.classList.remove("active");
    });

    // Toggle current
    dropdown.classList.toggle("active");
  });

  // Handle option select
  dropdown.querySelectorAll(".option div").forEach(option => {
    option.addEventListener("click", () => {
      input.value = option.textContent.trim();
      dropdown.classList.remove("active"); // close after select
    });
  });
});

// Close if clicked outside
const swiper = new Swiper('.wrapper', {
   
  loop: true,
    spaceBetween: 50,

    autoplay:{
    delay:5000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
    },


  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable:true,
    dynamicBullets:true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

//   responsive breakpoint
  breakpoints: {
    0:{
        slidesPerView :1,
    },
    768:{
        slidesPerView :2,
    },
    1024:{
        slidesPerView :3,
    }
  }

});