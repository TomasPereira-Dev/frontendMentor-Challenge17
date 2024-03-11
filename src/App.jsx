import { Route, Routes } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import Headphones from './pages/Headphones.jsx'
import Speakers from './pages/Speakers.jsx'
import Earphones from './pages/Earphones.jsx'
import Checkout from './pages/Checkout.jsx'

function App() {
  return(
    <>
    <Header />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/headphones' element={<Headphones />}/>
          <Route path='/speakers' element={<Speakers />}/>
          <Route path='/earphones' element={<Earphones />}/>
          <Route path='/checkout' element={<Checkout />}/>
        </Routes>
    <Footer />
    </>
  )
}

export default App
