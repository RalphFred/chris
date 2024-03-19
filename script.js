document.body.style.overflow = 'hidden'

function startLoader() {
  let counterElement = document.querySelector('.counter');
  let currentValue = 0;

  function updateCounter() {
    if (currentValue === 100){
      gsap.to(".loader", 1, {
        height: "0px",
        opacity: 0,
        transformOrigin: "bottom"
      })
      document.body.style.overflow = ''
      return ;
    }

    currentValue += Math.floor(Math.random() * 20 + 1)

    if (currentValue > 100){
      currentValue = 100;
    }

    counterElement.textContent = currentValue + "%"

    let delay = Math.floor(Math.random() + 100) + 150;
    setTimeout(updateCounter, delay);
  }

  gsap.to(".loader--img", .5, {
    scale: 0.9,
    opacity: 0.75,
    yoyo: true,
    repeat: -1,
  })

  updateCounter();
}

startLoader();

gsap.from(".about--img", 2, {
  scrollTrigger: ".about--img",
  x: -600,
  rotation: -45,
  opacity: 0,
  ease: "power4.out"
})

gsap.from(".about--header", 1.5, {
  scrollTrigger: ".about--header",
  x: 600,
  ease: "power4.out"
})

gsap.from(".about--text", 1.5, {
  scrollTrigger: ".about--header",
  x: 600,
  delay: .5,
  ease: "power4.out",
  opacity: 0,
})

gsap.from(".about--button", 1.5, {
  scrollTrigger: ".about--header",
  y: 400,
  delay: 1,
  ease: "power4.out",
  opacity: 0,
})


gsap.from(".services--header", 1.5, {
  scrollTrigger: ".services--header",
  x: -600,
  ease: "power4.out",
  delay: 1,
  opacity: 0,
})

gsap.from(".services--text", 1.5, {
  scrollTrigger: ".services--header",
  x: 600,
  ease: "power4.out",
  delay: 1,
  opacity: 0,
})

gsap.from(".card", 1, {
  opacity: 0,
  y: 400,
  stagger: 0.25,
  ease: "power4.out",
  scrollTrigger: ".card",
})


// gsap.from(".nav--logo", .5, {
//   scrollTrigger: ".nav--logo",
//   x: -600,
// })