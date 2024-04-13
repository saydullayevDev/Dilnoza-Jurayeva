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
  delay: 500,
})
ScrollReveal().reveal('.header__content h2', {
  ...scrollRevealOption,
  delay: 1000,
})
ScrollReveal().reveal('.header__content p', {
  ...scrollRevealOption,
  delay: 1500,
})
ScrollReveal().reveal('.header__content div', {
  ...scrollRevealOption,
  delay: 2000,
})

ScrollReveal().reveal('.header .nav__links', {
  delay: 3500,
})

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
    To: 'izzatbeksaydullayevsiu@gmail.com', //! sms yuboriladigan gmail
    From: 'hojiakbarsaydullayev003@gmail.com',
    Subject: 'Dilnoza Djurayeva Vebinar',
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
        location.href = 'https://t.me/lashpro_menejer' //! telegram Admin
      }, 1000)
    })
}
//
