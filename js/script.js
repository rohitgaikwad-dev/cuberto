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
  ease: "Power4.easeInOut",
});

let sections = document.querySelectorAll(".images>img");
sections.forEach((section) => {
  gsap.to(".images img", {
    scrollTrigger: {
      trigger: "#featured_images",
      start: "top top",
      end: "bottom bottom",
      endTrigger: ".last",
      scrub: 1,
    },
    y: "-300%",
    ease: "Power4.easeInOut",
  });
});
