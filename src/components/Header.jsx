import { NavLink, Link } from "react-router-dom"

const Header = () => {
    return(
        <header className="bg-black/50">
            <Link to='/'><img src="/shared/desktop/logo.svg" alt="audiophile's logo" /></Link>
            <nav>
                <ul>
                    <li><NavLink to='/'>HOME</NavLink></li>
                    <li><NavLink to='/headphones'>HEADPHONES</NavLink></li>
                    <li><NavLink to='/speakers'>SPEAKERS</NavLink></li>
                    <li><NavLink to='/earphones'>EARPHONES</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header