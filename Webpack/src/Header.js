export default function Header() {
  const app = document.getElementById('app')
  const header = document.createElement('div')
  header.innerHTML = 'Header'
  app.appendChild(header)
}
