import { useState, useContext} from "react"
import { createPortal } from "react-dom"
import { NavLink, Link } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu.jsx"
import Cart from "./Cart.jsx"
import { Context } from "../context/context.jsx"


const Header = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [cartIsOpen ,setCartIsOpen] = useState(false);
    const {productList, setProductList} = useContext(Context);

    return(
        <header className="relative flex justify-between items-center w-full p-8 bg-bg3 border-b border-white/30 bleeding-1">
            <div className="flex justify-between items-center gap-2 "> 
                <img className="lg:hidden" src="/shared/tablet/icon-hamburger.svg" alt=" "  onClick={() => {setHamburgerIsOpen(!hamburgerIsOpen)}}/>
                <Link to='/'><img src="/shared/desktop/logo.svg" alt="audiophile's logo" /></Link>
            </div>
            <nav className="hidden lg:block">
                    <ul className="flex gap-4 text-white text-sm font-semibold">
                        <li><NavLink to='/'>HOME</NavLink></li>
                        <li><NavLink to='/headphones'>HEADPHONES</NavLink></li>
                        <li><NavLink to='/speakers'>SPEAKERS</NavLink></li>
                        <li><NavLink to='/earphones'>EARPHONES</NavLink></li>
                    </ul>
                </nav>
            <div className="relative">
                <span className={`absolute -top-3 left-3 ${productList.length > 0 ? 'block' : 'hidden'} px-2 text-sm text-white bg-cta  rounded-full`}>{productList.length}</span>
                <img className='cursor-pointer' onClick={() => {setCartIsOpen(!cartIsOpen)}} src="/shared/desktop/icon-cart.svg" alt=" " />
            </div>
            
            {hamburgerIsOpen && <HamburgerMenu />}
            {cartIsOpen && createPortal(<Cart setCartIsOpen={setCartIsOpen}/>, document.getElementById("cart-portal"))}
        </header>
    )
}

export default Header