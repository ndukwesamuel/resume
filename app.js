const letters = [
  'N','D','U','K','W','E',' ', 'S', 'A','M','U','E', 'L'
]

let h1 = ''

for (let i = 0; i < letters.length; i++) {
  setTimeout(() => {
    h1 += letters[i]
    alert(`My name is ${h1}`)
  }, i * 100)
}







const showSite = () => {
    const overlays = document.querySelectorAll('.card')
  
    overlays.forEach((overlay) => {
      const siteButton = overlay.querySelector('.site')
      overlay.addEventListener('mouseenter', () => {
        siteButton.style.transform = 'translateY(0)'
      })
      siteButton.addEventListener('mouseleave', () => {
        siteButton.style.transform = 'translateY(-100%)'
      })
    })
  }
  
  showSite()