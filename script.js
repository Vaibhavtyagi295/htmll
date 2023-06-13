

var body = document.querySelector(".right"); var video = document.querySelector(".videoo");
var hh =document.querySelector("h1")
var tl = gsap.timeline();
var n = 0;

var l = 5;
var timer = 4;


function colorchange(){


    body.addEventListener("mouseover",function(){
        if(n===0){
            body.style.backgroundColor ="rgb(222, 168, 67)"
            n = 1
        } else{
            body.style.backgroundColor ="rgb(245, 160, 4)"
            n= 0
        }
    
    })
    


}

function removecolor(){
    body.addEventListener("mouseleave",function(){
        if(n===0){
            body.style.backgroundColor ="rgb(222, 168, 67)"
            n = 1
        } else{
            body.style.backgroundColor ="rgb(245, 160, 4)"
            n= 0
        }
    
    })
}

colorchange()
removecolor()


 // Initialize the timer with a value

var intervalId = setInterval(() => {
    var time = timer--;
    document.querySelector(".timmer").textContent = time;
    
    if (time === 0) {
        clearInterval(intervalId); // Clear the interval using the interval ID
        document.querySelector(".timmer").textContent = 'LETS GO';
    }
}, 1000);



tl.from('#rocket',{
  
  opacity:0,
    duration:2,
}),

tl.to('#rocket',{
  
    y:-730,
    duration:1,
    delay:2
})

tl.from('.disz',{
  y:-100,
  opacity:0

})
tl.from('.di',{
    x:-100,
    opacity:0
  
  })
  
  tl.from('.loorem',{
    x:-100,
    opacity:0
  
  })

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Animation code
// gsap.to("#work .card", {
//   scrollTrigger: {
//     trigger: "#slides",
//     start: "top 0%",
//     scrub: 1,
//     markers: true
//   },
//   top: "-100%",
//   ease: "power4",
//   stagger: 0.08
// });
gsap.to("#work .card", {
        scrollTrigger: {
    
            trigger: "#work",
            pin: "#work",
            start: "top 0%",
            scrub: 1,
        },
        top: "-100%",
        ease: Power4,
        stagger: .08
    })

    gsap.to("#allwork .indrag", {
        scrollTrigger: {
    
            trigger: "#allwork",
            pin: "#allwork",
            start: "top -5%",
            scrub: 1,
        },
        top: "49%",
        ease: Power4,
        stagger: .08
    })

    gsap.to("#allwork", {
        scrollTrigger: {
    
            trigger: ".indrag",
          
            start: "top 49%",
            end: "top 49%",
            scrub: true,
        },
       
        backgroundColor: "black",
        
    })
    gsap.to("#allwork .rowstxts", {
        scrollTrigger: {
    
            trigger: ".indrag",
            
            start: "top 20%",
            end: "top 20%",
            scrub: true,
        },
        
        color: "white",
         
    })
    gsap.to("#line", {
        scrollTrigger: {
    
            trigger: ".indrag",
            
            start: "top 20%",
            end: "top 20%",
            scrub: true,
        },
        
        height: "1px",
        backgroundColor: "white",
        
    })
    gsap.to(".indrag", {
        scrollTrigger: {
    
            trigger: ".indrag",
             
            start: "top 20%",
            end: "top 20%",
            scrub: true,
        },
     
        backgroundColor: "yellow",
        color: "black",
         
    })
    gsap.to(".row h1", {
        scrollTrigger: {
    
            trigger: "#content",
            
            start: "top 70%",
            end: "top 15%",
            scrub: 1,
           
        },
        
        color: "black",
    
       
    })
    gsap.to("#line", {
        scrollTrigger: {
    
            trigger: "#content",
           
            start: "top 70%",
            end: "top 15%",
            scrub: 1,
          
        },
     
        backgroundColor: "black",
        
    })
  function circlemove() {
    document.querySelector("#video")
        .addEventListener("mousemove", e => {


            document.querySelector(".circle").style.display = "initial"
            document.querySelector(".circle").style.scale = "1"
            document.querySelector(".circle").style.left = `${e.clientX}px`
            document.querySelector(".circle").style.top = `${e.clientY}px`
        })
    document.querySelector("#video")
        .addEventListener("mouseleave", e => {
            document.querySelector(".circle").style.left = "50%"
            document.querySelector(".circle").style.top = "50%"
            document.querySelector(".circle").style.scale = ".1"
            document.querySelector(".circle").style.display = "none"
        })
}

function drag() {
    document.querySelector(".partnerscomp")
        .addEventListener("mousemove", e => {



            document.querySelector(".drag").style.display = "initial"
            document.querySelector(".drag").style.scale = "1"
            document.querySelector(".drag").style.left = `${e.offsetX}px`
            document.querySelector(".drag").style.top = `${e.offsetY}px`
        })
    document.querySelector(".partnerscomp")
        .addEventListener("mouseleave", e => {
            document.querySelector(".drag").style.left = "50%"
            document.querySelector(".drag").style.top = "0%"
            document.querySelector(".drag").style.scale = ".1"
            document.querySelector(".drag").style.display = "none"
        })
}

function slides() {
    let allSlides = document.querySelectorAll(".sld");
    allSlides = [...allSlides];

    var hover = null;

    allSlides.forEach(function (elem) {
        elem.addEventListener("mouseover", function (dets) {
            hover = "#opener" + dets.target.dataset.index;

            document.querySelector(hover).style.zIndex = "99999";
            document.querySelector(hover).style.transition = "all cubic-bezier(0.19, 1, 0.22, 1) 1s"
            document.querySelector(hover).style.width = "100%";

        })

        elem.addEventListener("mouseleave", function (dets) {
            hover = "#opener" + dets.target.dataset.index;
            document.querySelector(hover).style.zIndex = "initial";
            document.querySelector(hover).style.width = "0%";
        })
    });

    document.querySelector(".circular")
        .addEventListener("mousemove", function (dets) {
            var boundvalues = document.querySelector(".circular").getBoundingClientRect()
            var xValue = dets.clientX - boundvalues.x;
            var yValue = dets.clientY - boundvalues.y;

            document.querySelector("#minicircle").style.top = yValue + "px";
            document.querySelector("#minicircle").style.left = xValue + "px";
            document.querySelector("#minicircle").style.boxShadow = "0 0 8px 2px red";
        })

    document.querySelector(".circular")
        .addEventListener("mouseleave", function (dets) {
            document.querySelector("#minicircle").style.top = 50 + "%";
            document.querySelector("#minicircle").style.left = 50 + "%";

            document.querySelector("#minicircle").style.boxShadow = "none";
        })
}
 
slides()
circlemove();
drag()







