import './App.css'
import { Products } from './Products/Products'
import { Header } from './Header/Header'
import { Logo } from './Logo'
import { Filters } from './Filters/Filters'
import { Provider } from 'react-redux'
import { store } from './redux/store'

function App() {

  return (
    <>
    <Provider  store={store}>
        <Logo />
        <Header />
        <Filters />
        <Products />
    </Provider>
      
    </>
  )
}

export default App
