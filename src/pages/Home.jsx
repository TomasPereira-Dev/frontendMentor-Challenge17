import Shops from "../components/Shops.jsx"
import SeeProductBtn from "../components/SeeProductBtn.jsx"
import AboutSection from "../components/AboutSection.jsx"

const Home = () => {
    return (
        <main className="flex flex-col gap-16 mb-16">
           <section className="flex items-center justify-center h-screen bg-mobileHero bg-cover bg-no-repeat md:bg-tabletHero lg:bg-desktopHero">
                <div className="flex flex-col items-center justify-center text-center">
                    <p className="text-white/75 font-thin tracking-[0.6rem] mb-8">NEW PRODUCT</p>
                    <h1 className="text-4xl text-white font-bold max-w-[10ch]">XX99 MARK II HEADPHONE</h1>
                    <p className="text-white/75 my-8 max-w-[32ch]">Experience natural, lifelike audio and exeptional build quality made for the passionate music enthusiast.</p>
                    <SeeProductBtn classes={`text-white bg-cta`}/>
                </div>
           </section>
           <section>
                <Shops />
           </section>
           <section className="grid grid-cols-1 gap-4 px-4">
                <div className="flex flex-col items-center gap-6 px-4 py-8 bg-cta bg-patternCircles bg-no-repeat bg-top bg-contain rounded-lg">
                    <img className="w-1/2" src="/home/mobile/image-speaker-zx9.png" alt="audiophile's zx9 speaker" />
                    <h2 className="text-4xl text-white text-center font-bold max-w-[8ch] ">ZX9 SPEAKER</h2>
                    <p className="text-center text-white/75 max-w-[30ch]">Upgrade to premium speakers that are phenomenally build to deliver truly remarkable sound.</p>
                    <SeeProductBtn classes={`text-white bg-black`}/>
                </div>
                <div className="relative rounded-lg overflow-hidden">
                    <img src="/home/mobile/image-speaker-zx7.jpg" alt="audiophile's zx7 speakers" />
                    <div className="absolute top-1/4 left-4 flex flex-col gap-8">
                        <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
                        <SeeProductBtn classes={`text-black bg-transparent border border-black`}/>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <img src="home/mobile/image-earphones-yx1.jpg" alt="audiophile's yx1 earphones" />
                </div>
                <div className="flex flex-col gap-8 px-4 py-8 bg-bg2 rounded-lg">
                    <h2 className="text-3xl font-bold">YX1 EARPHONES</h2>
                    <SeeProductBtn classes={`text-black bg-transparent border border-black`}/>
                </div>
           </section>
            <AboutSection />
        </main>
    )
}

export default Home