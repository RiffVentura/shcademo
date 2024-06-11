import './App.css'
import { Products } from './Products/Products'
import { Header } from './Header/Header'
import { Logo } from './Logo'
import { Filters } from './Filters/Filters'

function App() {

  return (
    <>
      <Logo />
      <Header />
      <Filters />
      <Products />
    </>
  )
}

export default App
