import { Route, Routes, ScrollRestoration } from 'react-router-dom'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import Home from './pages/Home.jsx'
import CategoryPage from './pages/CategoryPage.jsx'
import ProductPage from './pages/ProductPage.jsx'
import Checkout from './pages/Checkout.jsx'

function Root() {
  return(
    <>
    <Header />
    <ScrollRestoration />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/headphones' element={<CategoryPage category={"headphones"} />}/>
          <Route path='/speakers' element={<CategoryPage category={"speakers"} />}/>
          <Route path='/earphones' element={<CategoryPage category={"earphones"} />}/>
          <Route path='/checkout' element={<Checkout />}/>
          <Route path='/:productName' element={<ProductPage />}/>
        </Routes>
    <Footer />
    </>
  )
}

export default Root
