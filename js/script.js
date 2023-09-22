let cursor = new MouseFollower();

gsap.to(".left_elem", {
  scrollTrigger: {
    trigger: "#featured_images", 
    pin: true,
    start: "top top", 
    end: "bottom bottom", 
    endTrigger: ".last",
    scrub: 1, 
  },
  y: "-300%", 
  ease: Power1, 
});

