import './index.html'
import './styles/screen.sass'

const main = () => {
  document.querySelector('button').addEventListener('click', reset)
  let player = 'X'
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      if (cells[i].textContent === '') {
        cells[i].textContent = player
        if (player === 'X') {
          player = 'O'
        } else {
          player = 'X'
        }
      }
    })
  }
}

const reset = () => {
  const cells = document.querySelectorAll('td')
  for (var i = 0; i < cells.length; i++) {
    cells[i].textContent = ''
  }
}

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}

// const refresh = (reload) => {
//   document.querySelector('button')
//   let revload = 'button'
//   console.log('hi')
//   refresh.createElement('button')
//   refresh.addEventListener('click', () => {
//     refresh.textContent = refresh
//     refresh.appendChild('refresh')
//     window.location.reload(true)
//   })
// }
