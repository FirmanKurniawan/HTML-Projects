// Navbar shadow
const navbar = document.getElementById('myNavbar')

window.onscroll = function () {
  if (
    document.body.scrollTop > 120 ||
    document.documentElement.scrollTop > 120
  ) {
    navbar.classList.add('shadow')
  } else {
    navbar.classList.remove('shadow')
  }
}

// Recent article hover transition
// Article 1
const recentArticle1Img = document.querySelector('.recent-article1 img')
const recentArticle1Text = document.querySelector(
  '.recent-article1 .card-img-overlay'
)

recentArticle1Img.addEventListener('mouseover', function () {
  recentArticle1Img.classList.add('hover')
  recentArticle1Text.classList.add('pb')
})

recentArticle1Img.addEventListener('mouseout', function () {
  recentArticle1Img.classList.remove('hover')
  recentArticle1Text.classList.remove('pb')
})

recentArticle1Text.addEventListener('mouseover', function () {
  recentArticle1Img.classList.add('hover')
  recentArticle1Text.classList.add('pb')
})

recentArticle1Text.addEventListener('mouseout', function () {
  recentArticle1Img.classList.remove('hover')
  recentArticle1Text.classList.remove('pb')
})

// Article 1
const recentArticle2Img = document.querySelector('.recent-article2 img')
const recentArticle2Text = document.querySelector(
  '.recent-article2 .card-img-overlay'
)

recentArticle2Img.addEventListener('mouseover', function () {
  recentArticle2Img.classList.add('hover')
  recentArticle2Text.classList.add('pb')
})

recentArticle2Img.addEventListener('mouseout', function () {
  recentArticle2Img.classList.remove('hover')
  recentArticle2Text.classList.remove('pb')
})

recentArticle2Text.addEventListener('mouseover', function () {
  recentArticle2Img.classList.add('hover')
  recentArticle2Text.classList.add('pb')
})

recentArticle2Text.addEventListener('mouseout', function () {
  recentArticle2Img.classList.remove('hover')
  recentArticle2Text.classList.remove('pb')
})

// Hover highlight transition
// Article 1
const highlight1Img = document.querySelector('.article1 img')
const highlight1Text = document.querySelector('.article1 .text')

highlight1Img.addEventListener('mouseover', function () {
  highlight1Img.classList.add('hover')
  highlight1Text.classList.add('pb')
})

highlight1Img.addEventListener('mouseout', function () {
  highlight1Img.classList.remove('hover')
  highlight1Text.classList.remove('pb')
})

highlight1Text.addEventListener('mouseover', function () {
  highlight1Img.classList.add('hover')
  highlight1Text.classList.add('pb')
})

highlight1Text.addEventListener('mouseout', function () {
  highlight1Img.classList.remove('hover')
  highlight1Text.classList.remove('pb')
})

// Article 2
const highlight2Img = document.querySelector('.article2 img')
const highlight2Text = document.querySelector('.article2 .text')

highlight2Img.addEventListener('mouseover', function () {
  highlight2Img.classList.add('hover')
  highlight2Text.classList.add('pb')
})

highlight2Img.addEventListener('mouseout', function () {
  highlight2Img.classList.remove('hover')
  highlight2Text.classList.remove('pb')
})

highlight2Text.addEventListener('mouseover', function () {
  highlight2Img.classList.add('hover')
  highlight2Text.classList.add('pb')
})

highlight2Text.addEventListener('mouseout', function () {
  highlight2Img.classList.remove('hover')
  highlight2Text.classList.remove('pb')
})

// Article 3
const highlight3Img = document.querySelector('.article3 img')
const highlight3Text = document.querySelector('.article3 .text')

highlight3Img.addEventListener('mouseover', function () {
  highlight3Img.classList.add('hover')
  highlight3Text.classList.add('pb')
})

highlight3Img.addEventListener('mouseout', function () {
  highlight3Img.classList.remove('hover')
  highlight3Text.classList.remove('pb')
})

highlight3Text.addEventListener('mouseover', function () {
  highlight3Img.classList.add('hover')
  highlight3Text.classList.add('pb')
})

highlight3Text.addEventListener('mouseout', function () {
  highlight3Img.classList.remove('hover')
  highlight3Text.classList.remove('pb')
})
