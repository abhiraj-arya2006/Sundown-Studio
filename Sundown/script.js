//for smooth scrolling of the website//
const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

// var a= document.querySelector("#elem1");
// var c=a.getAttribute("data-image")
// console.log(c)

var elemC = document.querySelector("#elem-container")
var fixed = document.querySelector("#fixed-image")
elemC.addEventListener("mouseenter", function(){
    fixed.style.display = "block"
})
elemC.addEventListener("mouseleave", function(){
    fixed.style.display = "none"
})

// var elem1 = document.querySelector("#elem1")
// elem1.addEventListener("mouseenter", function(){
//     var image = elem1.getAttribute("data-image")
//     fixed.style.backgroundImage = `url(${image})`   //Template literals ``
// })

var elems =document.querySelectorAll(".elem") //nodelist ki form me hai data
elems.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        var image = elem.getAttribute("data-image")
        fixed.style.backgroundImage = `url(${image})`   //Template literals ``
    })
})

function swiperAnimation(){
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: "auto",
        centeredSlides: true,
        spaceBetween: 100,
        
      });
}
swiperAnimation()