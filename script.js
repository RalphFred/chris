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

      gsap.from(".nav--logo", 2, {
        x: "-100%",
        opacity: 0,
        ease: "power4.out",
      })

      gsap.from(".nav--desktop", 2, {
        x: "100%",
        opacity: 0,
        ease: "power4.out",
      })

      gsap.from(".hero--header", 2, {
        x: "-100%",
        opacity: 0,
        ease: "power4.out",
      })

      gsap.from(".hero--text", 1.75, {
        x: "-100%",
        opacity: 0,
        delay: .25,
        ease: "power4.out",
      })

      gsap.from(".hero--buttons button", 2, {
        y: "100%",
        stagger: .5,
        ease: "power4.out",
        opacity: 0,
      })

      gsap.from(".hero--extras", 2, {
        y: "100%",
        ease: "power4.out",
        opacity: 0,
      })

      gsap.from(".hero--img", 2, {
        x: "100%",
        rotation: 45,
        opacity: 0,
        ease: "power4.out"
      })
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

gsap.from(".nav--logo", .5, {
  x: -600,
})

gsap.from(".about--img", 2, {
  scrollTrigger: ".about--header",
  x: "-100%",
  rotation: -45,
  opacity: 0,
  ease: "power4.out"
})

gsap.from(".about--header", 1.5, {
  scrollTrigger: ".about--header",
  x: "100%",
  ease: "power4.out"
})

gsap.from(".about--text", 1.5, {
  scrollTrigger: ".about--header",
  x: "100%",
  delay: .5,
  ease: "power4.out",
  opacity: 0,
})

gsap.from(".about--button", 1.5, {
  scrollTrigger: ".about--header",
  y: "100%",
  delay: 1,
  ease: "power4.out",
  opacity: 0,
})


gsap.from(".services--header", 1.5, {
  scrollTrigger: ".services--header",
  x: "-100%",
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

function applyAnimations() {
    gsap.from(".img1", 1, {
      scrollTrigger: ".img2",
      y: "100%",
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    })
    
    gsap.from(".img2", 1, {
      scrollTrigger: ".img2",
      x: "100%",
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    })
    
    gsap.from(".img3", 1, {
      scrollTrigger: ".img2",
      y: "100%",
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    })
    
    gsap.from(".img4", 1, {
      scrollTrigger: ".img2",
      x: "100%",
      opacity: 0,
      ease: "power4.out",
      delay: .5,
    })
}

applyAnimations();



// Hamburger Menu
const menu = document.querySelector('#menu');

menu.addEventListener('click', () => {
  if (menu.classList == "burger--menu") {
    menu.classList.remove("burger--menu");
    menu.classList.add("open--menu");
    gsap.to(".nav--mobile", .75, {
      x: "-100%",
    });
    gsap.from(".nav--mobile li", .75, {
      y: "100%",
      stagger: .2,
      delay: .75,
      opacity: 0,
    });
    document.body.style.overflow = "hidden"
  } else if (menu.classList == "open--menu"){
    menu.classList.remove("open--menu");
    menu.classList.add("burger--menu");
    gsap.to(".nav--mobile", 2, {
      x: "100%",
    })
    document.body.style.overflow = ""
  }
})

// Submit Form
const form = document.querySelector('#form')
var snackbar = document.getElementById('snackbar');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  snackbar.className = "show";
        setTimeout(function(){ snackbar.className = snackbar.className.replace("show", ""); }, 3000); 
  form.reset();
})