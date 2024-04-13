const menuBtn = document.getElementById('menu-btn')
const navLinks = document.getElementById('nav-links')
const menuBtnIcon = menuBtn.querySelector('i')

menuBtn.addEventListener('click', (e) => {
  navLinks.classList.toggle('open')

  const isOpen = navLinks.classList.contains('open')
  menuBtnIcon.setAttribute('class', isOpen ? 'ri-close-line' : 'ri-menu-line')
})

navLinks.addEventListener('click', (e) => {
  navLinks.classList.remove('open')
  menuBtnIcon.setAttribute('class', 'ri-menu-line')
})

const headerImage = document.querySelector('.header__image')
headerImage.addEventListener(
  'animationend',
  (e) => {
    setTimeout(() => {
      headerImage.classList.add('reveal')
    })
  },
  { once: true }
)

const scrollRevealOption = {
  distance: '50px',
  origin: 'bottom',
  duration: 1000,
}

ScrollReveal().reveal('.header__content h1', {
  ...scrollRevealOption,
  delay: 1500,
})
ScrollReveal().reveal('.header__content h2', {
  ...scrollRevealOption,
  delay: 2000,
})
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 2500,
})
ScrollReveal().reveal('.header__content div', {
  ...scrollRevealOption,
  delay: 3000,
})

ScrollReveal().reveal('.header .nav__links', {
  delay: 3500,
})

//! =------------------- SECTION-3 ---------------------=
// let cards = document.querySelectorAll('.card')
// let stackArea = document.querySelector('.stack-area')

// function rotateCards() {
//   let angle = 0
//   cards.forEach((card) => {
//     if (card.classList.contains('active')) {
//       card.style.transform = `translate(-50%, -120vh) rotate(-48deg)`
//     } else {
//       card.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`
//       angle = angle - 10
//     }
//   })
// }

// rotateCards()

// window.addEventListener('scroll', () => {
//   let proportion = stackArea.getBoundingClientRect().top / window.innerHeight
//   if (proportion <= 0) {
//     let n = cards.length
//     let index = Math.ceil((proportion * n) / 2)
//     index = Math.abs(index) - 1
//     for (let i = 0; i < n; i++) {
//       if (i <= index) {
//         cards[i].classList.add('active')
//       } else {
//         cards[i].classList.remove('active')
//       }
//     }
//     rotateCards()
//   }
// })

//Code for responsiveness

// function adjust() {
//   let windowWidth = window.innerWidth
//   let left = document.querySelector('.left')
//   left.remove()
//   if (windowWidth < 800) {
//     stackArea.insertAdjacentElement('beforebegin', left)
//   } else {
//     stackArea.insertAdjacentElement('afterbegin', left)
//   }
// }
// adjust()

//detect Resize

// window.addEventListener('resize', adjust)
/////////

// gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)

// let timeln = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.boxes',
//     pin: true,
//     pinSpacing: true,
//     start: 'left-=120px left',
//     end: '+=2000',
//     scrub: 1,
//   },
// })

// timeln.addLabel('box1')
// timeln.to('.box-1', {
//   xPercent: 0,
//   opacity: 1,
// })

// timeln.from('.box-2', {
//   xPercent: 75,
//   opacity: 0,
// })
// timeln.addLabel('box2')

// timeln.to(
//   '.box-1',
//   {
//     scale: 0.95,
//     xPercent: -0.5,
//     opacity: 0.5,
//   },
//   '-=0.3'
// )

// timeln.to('.box-2', {
//   xPercent: 0,
//   opacity: 1,
// })

// timeln.from('.box-3', {
//   xPercent: 75,
//   opacity: 0,
// })
// timeln.addLabel('box3')

// timeln.to(
//   '.box-2',
//   {
//     scale: 0.98,
//     xPercent: -0.4,
//     opacity: 0.6,
//   },
//   '-=0.3'
// )

// timeln.to('.box-3', {
//   xPercent: 0,
//   opacity: 1,
// })

// timeln.to('.box-3', {})
//////////////////////\

//! section-5
// form
function emailSend() {
  var userName = document.getElementById('name').value
  var phone = document.getElementById('phone').value

  var messageBody = 'Ism :  ' + userName + '<br/> Telefon :  ' + phone
  Email.send({
    Host: 'smtp.elasticemail.com',
    Username: 'hojiakbarsaydullayev003@gmail.com',
    Password: '287E14366B538C79B2FF0DF897444D1DE0E9',
    To: 'zaxiraemail2003@gmail.com', //! sms yuboriladigan gmail
    From: 'hojiakbarsaydullayev003@gmail.com',
    Subject: 'Dilnoza Jurayeva vebinar',
    Body: messageBody,
  })
    .then((message) => {
      if (message == 'OK') {
        swal('Tabriklaymiz 🎉', `Siz muvaffaqiyatli ro'yhatdan o'tdingiz!`)
      } else {
        swal('Xatolik ❗', `Qaytadan urinib ko'ring`)
      }
    })
    .then(() => {
      setTimeout(() => {
        location.href = 'https://t.me/hojiakbar063' //! telegram Admin
      }, 1000)
    })
}
//
