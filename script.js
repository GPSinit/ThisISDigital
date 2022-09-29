function loc(){
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
loc();

























var flag = 0;

document.querySelector("#mob-text").addEventListener("click",function(){
    if(flag === 0){
        gsap.from("#overlay-mob",{
            y:300,
            duration:.6,
            ease: Expo.esaeInOut
        })
        document.querySelector("#overlay-mob").style.display = "flex";
        // document.querySelector("#overlay-mob").style.top = "0%";
        document.querySelector(".line").style.position = "fixed";
        document.querySelector("#line-2").style.display = "none";
        document.querySelector("#line-1").style.transform = "rotate(42deg)";
        document.querySelector("#line-3").style.transform = "rotate(-42deg)";
        flag = 1;
    }else{
        document.querySelector("#overlay-mob").style.display = "none";    
        document.querySelector(".line").style.position = "relative";
        document.querySelector("#line-2").style.display = "block";
        document.querySelector("#line-1").style.transform = "rotate(0deg)";
        document.querySelector("#line-3").style.transform = "rotate(0deg)";
        flag = 0;
    }
    

})
document.querySelector("#rimg").addEventListener("mouseover",function(){
    document.querySelector("#p5-rgreen").style.left = "0%";
    document.querySelector("#roverlay img").style.height = "120%";
    document.querySelector("#roverlay img").style.width = "120%";
})
document.querySelector("#rimg").addEventListener("mouseout",function(){
    document.querySelector("#p5-rgreen").style.left = "-100%";
    document.querySelector("#roverlay img").style.height = "100%";
    document.querySelector("#roverlay img").style.width = "100%";
})
document.querySelector("#limg").addEventListener("mouseover",function(){
    document.querySelector("#p5-lgreen").style.left = "0%";
    document.querySelector("#loverlay img").style.height = "120%";
    document.querySelector("#loverlay img").style.width = "120%";
})
document.querySelector("#limg").addEventListener("mouseout",function(){
    document.querySelector("#p5-lgreen").style.left = "-100%";
    document.querySelector("#loverlay img").style.height = "100%";
    document.querySelector("#loverlay img").style.width = "100%";
})

var arr = [
    {image:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/harley-med.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626961103&s=c3842aeb963d3db29f993e4b0e6ae9fa",para:"“We’re seeing improvement in efficiencies of over 120% - and that was within 2 weeks!”",h2:"Marketing Director",span:"Harley Medical Group"},
    {image:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/footasylum-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958236&s=884b0134b8f0a5bf871d3f77baa50de5",para:"“This is Digital have brought a refreshing change to our digital agency relationships.”",h2:"eCommerce Director",span:"Footasylum"},
    {image:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/brittany-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958235&s=f206a342824e1472533408006a36fc4a",para:"“The highly experienced team take our objectives and turn them into real business results for the brand.”",h2:"Head of Digital",span:"Brittany Ferries"},
    {image:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/ryman-logo.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1626958233&s=c3b18a33ca9b123ca06c2048a73d0220",para:"“All of their work has led to impressive results: for example our SEO visibility has increased over 150% in 5 months.”",h2:"Marketing & eCommerce Director",span:"Ryman"},
    {image:"https://optimise2.assets-servd.host/squalid-loris/production/uploads/images/logos/LCFC-Big.png?w=400&q=80&fm=webp&fit=crop&fp-x=0.5&fp-y=0.5&dm=1638360245&s=81701c1431f247310ca474760ca488b0",para:"“They’ve been transformational, suffice to say, I can’t recommend them highly enough!”",h2:"Head of Relait",span:"Leicester City Football Club"}
]

var clutter = "";

arr.forEach(function(data){
    clutter +=`<div id="p6-text">
    <img src="${data.image}" alt="">
    <p>${data.para}</p>
    <h2>${data.h2}<br><span>${data.span}</span></h2>
</div>`
})

document.querySelector("#page6").innerHTML = clutter;