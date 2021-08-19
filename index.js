const letters = [
    'N','D','U','K','W','E',' ', 'S', 'A','M','U','E', 'L'
  ]
  
  const h1 = document.querySelector('.name')
  
  h1.textContent = null
  
  for (let i = 0; i < letters.length; i++) {
    setTimeout(() => {
      h1.textContent += letters[i]
    }, i * 100)
  }