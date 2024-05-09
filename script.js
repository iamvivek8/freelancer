var tl =  gsap.timeline()

tl.from("nav, .logo, ul li, button ",{
    y:-100,
    duration:1,
    delay:0.5,
    opacity:0,
    stagger:0.2
})
tl.from(".hero h1",{
    y:120,
    opacity:0,
    stagger:0.3
})
tl.from(".about h1",{
    x:-120,
    opacity:0,
    stagger:0.3
})