

function navAnimation(){
    var nav = document.querySelector(".nav-menu")

nav.addEventListener("mouseenter",function(){
    let tl = gsap.timeline()
    tl.to(".nav-bottom",{
        height:"26vh",
        duration:1
    })
    tl.to(".nav-menu h5",{
        display:"block",
        duration: 0.1
    })
    tl.to(".nav-menu h5 span",{
       y:0,
        stagger:{
            amount:0.5
        },
    })

})
nav.addEventListener("mouseleave",function(){
    let tl = gsap.timeline()
    
    tl.to(".nav-menu h5 span",{
       y:25,
        stagger:{
            amount:0.2
        },
    })
    tl.to(".nav-menu h5",{
        display:"none",
        duration: 0.1
    })
    tl.to(".nav-bottom",{
        height:"0vh",
        duration:0.2
    })

})
}
navAnimation()

function page2hover(){
    
var righthover = document.querySelectorAll(".page2-right-hover")

righthover.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        gsap.to(elem.childNodes[3],{
            opacity:1,
            scale:1,
        })
    })
    elem.addEventListener("mouseleave",function(){
        gsap.to(elem.childNodes[3],{
            opacity:0,
            scale:0,
        })
    })
    elem.addEventListener("mousemove",function(dets){
        gsap.to(elem.childNodes[3],{
            x:dets.x - elem.getBoundingClientRect().x-50,
            y:dets.y - elem.getBoundingClientRect().y-110
        })
    })
})
}
page2hover()

function page3video(){
    
var page3 = document.querySelector(".page3icon")
var page3video = document.querySelector(".page3 video")

page3.addEventListener("click",function(){
    page3video.play()
    gsap.to(page3video,{
        transform:"scaleX(1) scaleY(1)",
        opacity:1,
        duration:0.5,
        borderRadius:0,
    })
})
page3video.addEventListener("click",function(){
    page3video.pause()
    gsap.to(page3video,{
        transform:"scaleX(0.7) scaleY(0)",
        opacity:0,
        duration:0.5,
        borderRadius:"30px",
    })
})
}
page3video()

function page4hover(){
    var page41 = document.querySelectorAll(".page41right")
page41.forEach(function(elem){
   elem.addEventListener("mouseenter",function(){
    elem.childNodes[3].style.opacity = 1, 
    elem.childNodes[3].play()
   })
   elem.addEventListener("mouseleave",function(){
    elem.childNodes[3].style.opacity = 0, 
    elem.childNodes[3].load()
   })
})
}
page4hover()

function page6Animation(){
    gsap.from("#bottom5 h4",{
        x: 0,
        duration: 1,
        scrollTrigger: {
            trigger: "#bottom5",
            scroller: "body",
            start:"top 80%",
            end:"top 10%",
            scrub:true
        }
    
    })
}
page6Animation()


function loader(){
    
var tl = gsap.timeline()
tl.from(".page1",{
    opacity:0,
    duration:0.2,
    delay:0.2,
})
tl.from(".page1",{
    transform:"scaleX(0.7) scaleY(0.2) translateY(80%)",
    borderRadius:"10%",
    duration:2,
    ease:"expo.out",

})
tl.from("nav",{
    opacity:0,
    delay:-0.1,
})
tl.from(".page1 h1, .page1 p, .page1 div",{
    opacity:0,
    duration:0.5,
    stagger:0.2,
})


}
loader()


