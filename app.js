const tl = gsap.timeline({defaults : {ease: 'power1.out'}})


const hamburger = document.querySelector(".btn-menu");
const navLinks = document.querySelector(".nav-links-collapse");
const links = document.querySelectorAll(".nav-links-collapse li");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

var line = $('.line');

var tl2 = new TimelineLite({
			onComplete: function(){
				tl2.restart();
			}
		});

 
TweenLite.defaultEase = Circ.easeInOut;

var time = 0.5;
var y = 3;

tl2.add ( TweenMax.staggerFromTo (
		line, time,
			{
				opacity: 0,
				y:y,
			},
			{	
				opacity: 1,
				y: 0,
			},
		2 ))
.add ( TweenMax.staggerTo (
		line, time,
			{
				delay: time,
				opacity: 0,
				y: -y,
			},
		2 ), 1.3)

var animation =anime({
targets: '.card',
border: '2px solid white',
marginTop: '0px',
autoplay: false,
easing: 'easeInOutQuad',
duration: 2000
});
// console.log((window.pageYOffset))
var wwu = $('#wwu').offset().top;



var textWrapper = document.querySelector('.meeth1');
var mtt = document.querySelector('#mtt')
textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letters'>$&</span>");

var animation2 = anime.timeline({loop: true})
  animation2.add({
    targets: '.meeth1 .letters',
    scale: [4,1],
    opacity: [0,1],
    translateZ: 0,
    easing: "easeOutExpo",
    duration: 950,
    delay: (el, i) => 70*i
  }).add({
    targets: '.meeth1',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });

  window.onscroll=function(){
	if($(window).scrollTop() >= wwu){
        animation.play()
	}
	if($(window).scrollTop() >= mtt){
        animation2.play()
	}
}
