import { useState } from "react"
import { createPortal } from "react-dom"
import { NavLink, Link } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu.jsx"
import Cart from "./Cart.jsx"


const Header = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false);
    const [cartIsOpen ,setCartIsOpen] = useState(false);

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
            <img onClick={() => {setCartIsOpen(!cartIsOpen)}} src="/shared/desktop/icon-cart.svg" alt=" " />
            {hamburgerIsOpen && <HamburgerMenu />}
            {cartIsOpen && createPortal(<Cart setCartIsOpen={setCartIsOpen}/>, document.getElementById("cart-portal"))}
        </header>
    )
}

export default Header