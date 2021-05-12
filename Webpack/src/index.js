import Header from './Header'
import Footer from './Footer'
import Content from './Content'
import logo from './jojo.jpg'
import './index.scss'

let img = new Image()
img.src = logo

const x = document.getElementById('app')
x.appendChild(img)

Header()
Footer()
Content()
