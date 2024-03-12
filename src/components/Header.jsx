import { useState } from "react"
import { createPortal } from "react-dom"
import { NavLink, Link } from "react-router-dom"
import HamburgerMenu from "./HamburgerMenu"


const Header = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

    return(
        <header className="relative flex justify-between items-center p-8 bg-black border-b">
            <img className="lg:hidden" src="/shared/tablet/icon-hamburger.svg" alt=" "  onClick={() => {setHamburgerIsOpen(!hamburgerIsOpen)}}/>
            <Link to='/'><img src="/shared/desktop/logo.svg" alt="audiophile's logo" /></Link>
            <nav className="hidden lg:block">
                <ul className="flex">
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/headphones'>HEADPHONES</NavLink></li>
                    <li><NavLink to='/speakers'>SPEAKERS</NavLink></li>
                    <li><NavLink to='/earphones'>EARPHONES</NavLink></li>
                </ul>
            </nav>
            <img src="/shared/desktop/icon-cart.svg" alt=" " />
            {hamburgerIsOpen && <HamburgerMenu />}
        </header>
    )
}

export default Header