
var slideIndex = 1;

var myTimer;

var slideshowContainer;
window.addEventListener("load", function () {
    const loader = document.querySelector(".loader");
    console.log(loader);
    loader.className += " hidden";
});

window.addEventListener("load", function () {
    showSlides(slideIndex);
    myTimer = setInterval(function () {
        plusSlides(1)
    }, 4000);

    slideshowContainer = document.getElementsByClassName('slideshow-inner')[0];

    slideshowContainer.addEventListener('mouseenter', pause)
    slideshowContainer.addEventListener('mouseleave', resume)
})


function plusSlides(n) {
    clearInterval(myTimer);
    if (n < 0) {
        showSlides(slideIndex -= 1);
    } else {
        showSlides(slideIndex += 1);
    }


    if (n === -1) {
        myTimer = setInterval(function () {
            plusSlides(n + 2)
        }, 4000);
    } else {
        myTimer = setInterval(function () {
            plusSlides(n + 1)
        }, 4000);
    }
}

function currentSlide(n) {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(n + 1)
    }, 4000);
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

pause = () => {
    clearInterval(myTimer);
}

resume = () => {
    clearInterval(myTimer);
    myTimer = setInterval(function () {
        plusSlides(slideIndex)
    }, 4000);
}
function toggl(){
var data=document.querySelectorAll(".image-design");
data[0].classList.toggle('image-design-none')
data[1].classList.toggle('image-design-none')
data[2].classList.toggle('image-design-none')
data[3].classList.toggle('image-design-none')
data[4].classList.toggle('image-design-none')
var dat=document.querySelector(".slideshow-container");
dat.classList.toggle('slideshow-container-nav')
var bannerheading=document.querySelectorAll(".banner-heading");
bannerheading[0].classList.toggle('no-banner-heading');
bannerheading[1].classList.toggle('no-banner-heading');
bannerheading[2].classList.toggle('no-banner-heading');
bannerheading[3].classList.toggle('no-banner-heading');
bannerheading[4].classList.toggle('no-banner-heading');
var bannercontent=document.querySelectorAll(".banner-content");
bannercontent[0].classList.toggle('no-banner-heading');
bannercontent[1].classList.toggle('no-banner-heading');
bannercontent[2].classList.toggle('no-banner-heading');
bannercontent[3].classList.toggle('no-banner-heading');
bannercontent[4].classList.toggle('no-banner-heading');
}


// function to open/close nav
function toggleNav(){
    // if nav is open, close it
    if($("nav").is(":visible")){
      $("nav").fadeOut();
      $("button").removeClass("menu");
    }
    // if nav is closed, open it
    else{
      $("button").addClass("menu");
      $("nav").fadeIn().css('display', 'flex');
    }
  }
  
  // when clicking + or ☰ button
  $("button").click(function(){
    // when clicking ☰ button, open nav
    if($("header").hasClass("open")){
      toggleNav();
    }
    // when clicking + button, open header
    else{
      $("header").addClass("open");
    }
  });
  
  // close nav
  $("#nav-close").click(function(){
    toggleNav();
  });
  
  // scroll to sections
  $("nav li").click(function(){
    // get index of clicked li and select according section
    var index = $(this).index();
    var target = $("content section").eq(index);
    
    toggleNav();
    
    $('html,body').delay(300).animate({
      scrollTop: target.offset().top
    }, 500);
  });
