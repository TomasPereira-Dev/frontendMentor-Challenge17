import { Link } from "react-router-dom"
import Shops from "../components/Shops"

const Home = () => {
    return (
        <main className="flex flex-col gap-16">
           <section className="flex items-center justify-center h-screen bg-mobileHero bg-cover bg-no-repeat md:bg-tabletHero lg:bg-desktopHero">
            <div className="flex flex-col items-center justify-center text-center">
                <p className="text-white/75 font-thin tracking-[0.6rem] mb-8">NEW PRODUCT</p>
                <h1 className="text-4xl text-white font-bold max-w-[10ch]">XX99 MARK II HEADPHONE</h1>
                <p className="text-white/75 my-8 max-w-[32ch]">Experience natural, lifelike audio and exeptional build quality made for the passionate music enthusiast.</p>
                <Link className="px-8 py-4 text-white font-semibold bg-cta">SEE PRODUCT</Link>
            </div>
           </section>
           <section>
                <Shops />
           </section>
        </main>
    )
}

export default Home