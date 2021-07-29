// Slider 
let images = [
    {
        image: "url(./asset/img/slider/slider-1/One.jpg)" ,
        text: "BACK TO SCHOOL",
        isSale: true,
    },
    {
        image: "url(./asset/img/slider/slider-2/one.jpg)",
        text: "BACK TO SCHOOL",
        isSale: true,
    },
    {
        image: "url(./asset/img/slider/slider-2/two.jpg)",
        text: "BACK TO SCHOOL",
        isSale: true,

    },
    {
        image: "url(./asset/img/slider/slider-2/three.jpg)",
        text: "BACK TO SCHOOL",
        isSale: true,

    },
    {
        image: "url(./asset/img/slider/slider-2/for.jpg)",
        text: "BACK TO SCHOOL",
        isSale: true,

    },
    {
        image: "url(./asset/img/slider/slider-2/fire.jpg)",
        text: "BACK TO SCHOOL",
        isSale: true,

    },
    {
        image: "url(./asset/img/slider/slider-3/one.jpg)",
        text: "GOINGSOMEWHERE",
        isSale: true,

    },
    {
        image: "url(./asset/img/slider/slider-3/two.jpg)",
        text: "GOINGSOMEWHERE",
        isSale: true,
    },
    {
        image: "url(./asset/img/slider/slider-3/three.jpg)",
        text: "GOINGSOMEWHERE",
        isSale: true,
    
    },
    {
        image: "url(./asset/img/slider/slider-3/for.jpg)",
        text: "GOINGSOMEWHERE",
        isSale: true,
    
    },

]


let num = 0;
let slider = document.getElementById('slider');
let text = document.getElementById("text");

if(images[num].isSale){
    text.innerHTML = "<h2 class='sale'>Sale</h2></n><h3 class='up-to'>- UP TO -</h3></n><h3 class='back-to-sc'>" + images[num].text + "</h3></n><h2 class='cool'>COOL</h2></n><a href='#' class='shop-now'>SHOP NOW >></a>"
} else text.innerHTML = "";
slider.style.backgroundImage = images[num].image;

let slideInterval = setInterval(next,2000);

slider.addEventListener('mouseover', function(){
    clearInterval(slideInterval);
});


slider.addEventListener('mouseout', function(){
    slideInterval = setInterval(next,2000);;
});

function next() {
    num++;
    if(num >= images.length) {
        num = 0;
    } 
    slider.style.backgroundImage = images[num].image;
    if(images[num].isSale){
        text.innerHTML = "<h2 class='sale'>Sale</h2></n><h3 class='up-to'>- UP TO -</h3></n><h3 class='back-to-sc'>" + images[num].text + "</h3></n><h2 class='cool'>COOL</h2></n><a href='#' class='shop-now'>SHOP NOW >></a>"
    } else text.innerHTML = "";
}

function prev() {
    num--;
    if(num < 0) {
        num = images.length-1;
    }
    slider.style.backgroundImage = images[num].image;
    if(images[num].isSale){
        text.innerHTML = "<h2 class='sale'>Sale</h2></n><h3 class='up-to'>- UP TO -</h3></n><h3 class='back-to-sc'>" + images[num].text + "</h3></n><h2 class='cool'>COOL</h2></n><a href='#' class='shop-now'>SHOP NOW >></a>"
    } else text.innerHTML = "";
}


// slider img col-3

let imagesLayer = [
    {
        image: "url(./asset/img/slider/slider-right/sunglasses-banner.jpg)" ,
        text: "HOLIDAY",
        isSale: true,
    },
    {
        image: "url(./asset/img/slider/slider-right/Layer-35.jpg)",
        text: "HOLIDAY",
        isSale: true,
    },
]

let numLayer = 0;
let sliderLayer = document.getElementById('layer-img');
let textLayer = document.getElementById("layer-text");

sliderLayer.style.backgroundImage = imagesLayer[numLayer].image;
if(imagesLayer[numLayer].isSale){
    textLayer.innerHTML = "<p class='spring'>Spring</p><p class='holiday'>" + imagesLayer[numLayer].text + "</p><p class='hit'>HITS</p><a href='#' class='shop-now'>SHOP NOW ></a>"
} else textLayer.innerHTML = "";

let slideIntervalLayer = setInterval(nexLayer,2000);

sliderLayer.addEventListener('mouseover', function(){
    clearInterval(slideIntervalLayer);
});


sliderLayer.addEventListener('mouseout', function(){
    slideIntervalLayer = setInterval(nexLayer,2000);;
});

function nexLayer() {
    numLayer++;
    if(numLayer >= imagesLayer.length) {
        numLayer = 0;
    } 
    sliderLayer.style.backgroundImage = imagesLayer[numLayer].image;
}

// Brand Slider
$(document).ready(function(){
    $('.customer-logos').slick({
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        arrows: false,
        dots: false,
        pauseOnHover: false,
        responsive: [{
            breakpoint: 768,
            settings: {
                slidesToShow: 5
            }
        }, {
            breakpoint: 520,
            settings: {
                slidesToShow: 3
            }
        }]
    });
});


// Shopping slider shop kids

let imagesShop = [
    {
        image: "url(./asset/img/shopping/col-2/3.jpg"
    },
    {
        image: "url(./asset/img/shopping/col-2/1.gif)"
    },
    {
        image: "url(./asset/img/shopping/col-2/2.jpg)"
    },
]

let numShop = 0;
let sliderShop = document.getElementById('shop-img');

sliderShop.style.backgroundImage = imagesShop[numShop].image;

let slideIntervalShop = setInterval(nexShop,2000);

sliderShop.addEventListener('mouseover', function(){
    clearInterval(slideIntervalShop);
});


sliderShop.addEventListener('mouseout', function(){
    slideIntervalShop = setInterval(nexShop,2000);;
});

function nexShop() {
    numShop++;
    if(numShop >= imagesShop.length) {
        numShop = 0;
    } 
    sliderShop.style.backgroundImage = imagesShop[numShop].image;
}




$('.slider-nav').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
  });
 
  $('#next').click(function(){
    $('.slider-nav').slick('slickNext');
  });
 
  $('#prev').click(function(){
    $('.slider-nav').slick('slickPrev');
  });


  
$('.slider-nav2').slick({
    slidesToShow: 5,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: {
              arrows: false,
              centerMode: true,
              centerPadding: '30px',
              slidesToShow: 3
            }
          },
        {
          breakpoint: 769,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: '30px',
            slidesToShow: 1
          }
        }
      ]
  });
 
  $('#next2').click(function(){
    $('.slider-nav2').slick('slickNext');
  });
 
  $('#prev2').click(function(){
    $('.slider-nav2').slick('slickPrev');
  });


//   Scroll fixed navbar
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("nav-scroll");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

