function LocomotiveAndScrollTrigger(){
    const scroll = new LocomotiveScroll({
        el: document.querySelector('#main'),
        smooth: true
    });
    
    gsap.registerPlugin(ScrollTrigger);
    
    // Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
    
    const locoScroll = new LocomotiveScroll({
      el: document.querySelector("#main"),
      smooth: true
    });
    // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
    locoScroll.on("scroll", ScrollTrigger.update);
    
    // tell ScrollTrigger to use these proxy methods for the "#main" element since Locomotive Scroll is hijacking things
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(value) {
        return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
      }, // we don't have to define a scrollLeft because we're only scrolling vertically.
      getBoundingClientRect() {
        return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
      },
      // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
      pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
    });
    
    // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
    ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
    
    // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
    ScrollTrigger.refresh();
}
LocomotiveAndScrollTrigger()

function loader(){

    
var Images =[
    'Bacalet Girl.jpg','Purse.jpg','Locket.jpg','Earing.jpg','Small.jpg'
];
var currentIndex = 0;

function ImageSlider(){

var ImageContainer = document.getElementById('Img-part');
console.log(ImageContainer)
var imgTag = document.createElement('img');
imgTag.src = Images[currentIndex];
ImageContainer.appendChild(imgTag);
// currentIndex++;
if(currentIndex===Images.length){
    Over();
    document.querySelector("#loader").style.display = "none"
    return;
}
currentIndex++;
setTimeout(ImageSlider,1000);
}

ImageSlider();

function Over(){
    clearTimeout(ImageSlider);
}

}

loader()


function VideoPlay(){
  var Video = document.querySelector(".overlay");
  var PlayButton = document.querySelector("#Play");
  var videoMotion = document.querySelector(".video-part1 video")
 
  Video.addEventListener("mouseenter",function(){
   // console.log("anurag")
   PlayButton.style.opacity = 1;
   Video.addEventListener("mousemove",function(dets){
     PlayButton.style.left = dets.x-100+ "px";
   PlayButton.style.top = dets.y+0+"px"
   var flag = 1;
  Video.addEventListener("click",function(){
   if(flag === 1){
     videoMotion.pause();
     flag=2;
   }else{
     videoMotion.play();
     flag=1;
   }
  })
   })
 
  })
 
  Video.addEventListener("mouseleave",function(){
   PlayButton.style.opacity = 0;
   
  })
}

 VideoPlay();

function imagePg3(){

  var pg3Htag = document.querySelectorAll(".h-box");
  // console.log(pg3Htag[0])
  
  var pg3Img = document.querySelectorAll(".img-forH-tag");
  
  // console.log(pg3Img[0])
  function offDisplay(){
    // alert("Anurag")
    pg3Img.forEach(function(dets){
     dets.style.display = "none";
     console.log("Anurag")
    });
  }
  
  pg3Htag.forEach(function(dets,indx){
    dets.addEventListener("mouseenter",function(){
      console.log("Hello");
      offDisplay();
      pg3Img[indx].style.top = '0%';
      pg3Img[indx].style.display = 'initial';
      console.log("Hello");
    })
  
  })
  

}

imagePg3()


var tl = gsap.timeline();

tl
.from("#page1 #nav",{
  delay:4.9,
  y:-30,
  opacity:0,
  duration:.6,
  ease:"Power#3"
})
.from("#page1 .firstpage",{
  delay:-.6,
    x:-140,
    duration:2,
    opacity:0,
    ease:Expo.easeOut
})
.from("#page1 .firstpage #ear",{
  delay:-2,
  duration:2,
  opacity:0,
  scale:1.4,
  ease:Expo.easeOut
})
.from("#page1 .h1-text h1",{
  delay:-2,
  duration:.5,
  opacity:0,
  x:-100,
  ease:"Power#4"
})
.to("#page1 .h1-text #pg1Span1",{
  delay:-1.8,
  duration:.7,
  opacity:1,
  x:-148,
  ease:"Power#4"
})
.to("#page1 .ellipse",{
  delay:-1.7,
  duration:1,
  opacity:1,
  // scale:.5,
  ease:"Power#4"
})
.from("#page1 .ellipse .flower",{
  delay:-1.7,
  duration:1,
  opacity:0,
  scale:.7,
  ease:"Power#4"
})
.from("#page1 .ellipse .two-ball",{
  delay:-1.7,
  duration:1,
  opacity:0,
  x:-100,
  y:50,
  ease:"Power#4"
})

gsap.to("#page2 .video-div",{
  scale:1,
  duration:1,
 ease:"Power#4",
  scrollTrigger:{
    scroller:"#main",
   trigger:"#page2",
   start:"top 300%",
   end:"top 60%",
  //  markers:true,
   scrub:true,
  },
 
 
})

gsap.to("#page2 .left h1",{
  x:120,
  duration:2,
 ease:"Power#4",
  scrollTrigger:{
    scroller:"#main",
   trigger:"#page2",
   start:"top 250%",
   end:"top 0%",
  //  markers:true,
   scrub:true,
 
  },
 
})
gsap.to("#page2 .right h1",{
  x:-120,
  duration:2,
 ease:"Power#4",
  scrollTrigger:{
    scroller:"#main",
   trigger:"#page2",
   start:"top 250%",
   end:"top 0%",
  //  markers:true,
   scrub:true,
 
  },
 
})

gsap.to("#page4 #pg4-left>img",{
  scale:1,
  duration:1,
  backgroundColor:"red",
 ease:"Power#4",
  scrollTrigger:{
    scroller:"#main",
   trigger:"#page4",
   start:"top 160%",
  //  markers:true,
   scrub:true,
 
  },
 
})

gsap.to("#page4 #pg4-r1>img",{
  scale:1,
  duration:1,
  backgroundColor:"red",
 ease:"Power#4",
  scrollTrigger:{
    scroller:"#main",
   trigger:"#page4",
   start:"top 160%",
  //  markers:true,
   scrub:true,
  },
 
})

gsap.from("#page5 .h1-text h1",{
  duration:.5,
  opacity:0,
  x:-100,
  ease:"Power#4",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 200%",
  }
})
gsap.from("#page5 .h1-text #pg1Span3",{
  
  duration:.5,
  opacity:0,
  x:200,
  ease:"Power#4",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 180%",
    // markers:true
  }
})
gsap.from("#page5 .ellipse",{
  
  duration:.5,
  opacity:0,
  
  ease:"Power#4",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 250%",
  }
})
gsap.from("#page5 .ellipse .flower",{
  // delay:-1.7,
  duration:2,
  opacity:0,
  scale:.7,
  ease:"Power#4",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 220%",
    end:"top 50%",
    scrub:true
  }
})
gsap.from("#page5 .ellipse .two-ball",{
  duration:2,
  opacity:0,
  x:-100,
  y:50,
  ease:"Power#4",
  scrollTrigger:{
    trigger:"#page5",
    scroller:"#main",
    start:"top 220%",
    end:"top 50%",
    scrub:true
  }
})