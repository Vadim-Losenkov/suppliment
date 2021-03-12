$(function() {
  $('.slider__inner').slick({
    dots: true,
    arrows: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 701,
        settings: {
          arrows: false
        }
      }
    ]
  })
  $('.client__inner').slick({
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1700
  })
  $('.header__btn').on('click', () => {
    $('.header__menu').slideToggle(300)
    $('.header__btn').toggleClass('open')
  })
  $('.header__menu-link').on('click', () => {
    $('.header__menu').slideToggle(300)
    $('.header__btn').toggleClass('open')
  })
  $('.header__theme-btn').on('click', () => {
    changeTheme('[data-link="true"]')
  })
  
  if ($(window).width() < 600) {
    $('.facts__table-top').on('click', () => {
      $('.facts__list').slideToggle(300)
      $('.facts__table-arrow').toggleClass('open')
    })
    $('.facts__list-item').on('click', () => {
      $('.facts__list').slideToggle(300)
      $('.facts__table-arrow').toggleClass('open')
    })
  }
})

class Tabs {
  constructor(menuSelector, itemsSelector) {
    this.$menu = document.querySelector(menuSelector)
    this.$items = document.querySelector(itemsSelector)
    
    this.listener()
  }
  
  listener() {
    this.$menu.addEventListener('click', event => {
      const $el = event.target.closest(`[data-id]`)
      const {id} = $el.dataset
      id ? this.opener(id) : null
    })
  }
  
  opener(id) {
    this.close()
    
    this.$menu.querySelector(`[data-id="${id}"]`).classList.add('open')
    this.$items.querySelector(`[data-item="${id}"]`).classList.add('open')
  }
  
  close() {
    const menuList = document.querySelectorAll('[data-id]')
    const itemsList = document.querySelectorAll('[data-item]')
    
    menuList.forEach($el => $el.classList.remove('open'))
    itemsList.forEach($el => $el.classList.remove('open'))
  }
}

const tabs = new Tabs('[data-menu="menu"]', '[data-menu="items"]')

function changeTheme($el, overlay) {
  const $link = document.querySelector($el)
  $link.classList.toggle('black')
  $link.classList.contains('black') ? $link.href = 'css/black-theme.css' : $link.href = 'css/style.css'
}