import { NavLink } from "react-router-dom"

const Footer = () => {
    return (
        <footer className="relative flex flex-col gap-8 px-4 py-12 bg-bg3 bleeding-1">
            <div className="flex flex-col items-center gap-12 
            before:content-[''] before:absolute before:top-0 before:w-1/4 before:p-[2px] before:bg-cta
            md:items-start md:before:w-[15%] lg:flex-row lg: justify-between lg:before:w-[8%]">
                <img src="/shared/desktop/logo.svg" alt=" " />
                <nav>
                    <ul className="flex flex-col items-center gap-6 md:flex-row">
                        <li><NavLink className="text-white font-semibold" to='/'>HOME</NavLink></li>
                        <li><NavLink className="text-white font-semibold" to='/headphones'>HEADPHONES</NavLink></li>
                        <li><NavLink className="text-white font-semibold" to='/speakers'>SPEAKERS</NavLink></li>
                        <li><NavLink className="text-white font-semibold" to='/earphones'>EARPHONES</NavLink></li>
                    </ul>
                </nav>
            </div>
            <div className="flex flex-col items-center gap-8 lg:flex-row lg:justify-between lg:items-end">
                <p className="text-white/50 text-center font-semibold max-w-[32ch]
                md:text-left md:max-w-full lg:max-w-[57ch]">Audiophile is an all in one stop to fulfill your audio needs. We&apos;re a small team of music lovers and sound specialists who are devoted to helping you get the most out of personal audio. Come and visit our demo facility - we&apos;re open 7 days a week.</p>
                <p className="text-white/50 font-bold text-center md:hidden">Copyright 2021. All Rights Reserved</p>
                <div className="flex md:justify-between md:w-full lg:w-auto">
                    <p className="hidden text-white/50 font-bold 
                    md:block lg:hidden">Copyright 2021. All Rights Reserved</p>
                    <div className="flex gap-4">
                        <img src="/shared/desktop/icon-facebook.svg" alt="facebook's logo" />
                        <img src="/shared/desktop/icon-twitter.svg" alt="twitter's logo" />
                        <img src="/shared/desktop/icon-instagram.svg" alt="instagram's logo" />
                    </div>
                </div>
            </div>
            <p className="hidden text-white/75 font-bold lg:block">Copyright 2021. All Rights Reserved</p>
        </footer>
    )
}

export default Footer