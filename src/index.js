import './index.html'
import './styles/screen.sass'

const main = () => {
  let player = 'x'
  const cells = document.querySelectorAll('td')
  for (let i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', () => {
      cells[i].textContent = player
      if (player === 'x') {
        player = 'o'
      } else {
        player = 'x'
      }
    })
  }
}

// const refresh = (reload) => {
//   document.querySelector('button')
//   let reload = 'button'
//   console.log('hi')
//   refresh.createElement('button')
//   refresh.addEventListener('click', () => {
//     refresh.textContent = refresh
//     refresh.appendChild('refresh')
//     window.location.reload(true)
//   })
// }

document.addEventListener('DOMContentLoaded', main)

if (module.hot) {
  module.hot.dispose(() => window.location.reload())
  module.hot.accept(err => console.error(err))
}
