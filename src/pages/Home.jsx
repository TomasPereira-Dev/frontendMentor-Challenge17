import Shops from "../components/Shops.jsx"
import SeeProductBtn from "../components/SeeProductBtn.jsx"
import AboutSection from "../components/AboutSection.jsx"
import data from "../data.json"

const Home = () => {
    return (
        <main className="flex flex-col gap-16 mb-16">
           <section className="flex items-center justify-center h-screen px-4 
           bg-mobileHero bg-center bg-no-repeat bleeding-1
           md:bg-tabletHero lg:justify-start lg:bg-desktopHero lg:bg-cover">
                <div className="flex flex-col items-center gap-4 justify-center text-center
                lg:items-start lg:gap-6 lg:text-left">
                    <p className="text-white/75 font-thin tracking-[0.6rem] md:text-sm">NEW PRODUCT</p>
                    <h1 className="text-4xl text-white font-bold max-w-[10ch] md:text-6xl">XX99 MARK II HEADPHONES</h1>
                    <p className="text-white/75 max-w-[32ch] leading-7 md:max-w-[38ch]">Experience natural, lifelike audio and exeptional build quality made for the passionate music enthusiast.</p>
                    <SeeProductBtn classes={`text-white bg-cta hover:brightness-125`} dynamicPath={`xx99-mark-two-headphones`}/>
                </div>
           </section>
           <section>
                <Shops />
           </section>
           <section className="grid grid-cols-1 gap-4 px-4 md:grid-cols-2">
                <div className="flex flex-col items-center gap-6 px-4 py-8
                bg-cta bg-patternCircles bg-no-repeat bg-cover bg-[50%_-7.5rem] rounded-lg
                md:col-span-2 lg:flex-row lg:justify-center lg:gap-32 lg:px-24 lg:py-12 lg:bg-[-12rem_33%]">
                    <picture className="w-1/2 lg:relative lg:-bottom-12" >
                        <source srcSet="/home/desktop/image-speaker-zx9.png" media="(min-width: 1024px)"/>
                        <source srcSet="/home/tablet/image-speaker-zx9.png" media="(min-width: 768px)"/>
                        <img src="/home/mobile/image-speaker-zx9.png" alt="audiophile's zx9 speaker" />
                    </picture>
                    <div className="flex flex-col items-center text-center gap-6 lg:items-start lg:text-start">
                        <h2 className="text-4xl text-white  font-bold max-w-[8ch] md:text-6xl ">ZX9 SPEAKER</h2>
                        <p className=" text-white/75 max-w-[30ch] leading-7 md:max-w-[36ch]">Upgrade to premium speakers that are phenomenally build to deliver truly remarkable sound.</p>
                        <SeeProductBtn classes={`text-white bg-black hover:bg-gray-700 `} dynamicPath={`zx9-speaker`}/>
                    </div>
                </div>
                <div className="relative rounded-lg overflow-hidden md:col-span-2">
                    <picture>
                        <source srcSet="/home/desktop/image-speaker-zx7.jpg" media="(min-width: 1024px)"/>
                        <source srcSet="/home/tablet/image-speaker-zx7.jpg " media="(min-width: 768px)"/>
                        <img className="w-full" src="/home/mobile/image-speaker-zx7.jpg" alt="audiophile's zx7 speakers" />
                    </picture>
                    <div className="absolute top-[35%] left-4 flex flex-col gap-8 lg:left-24">
                        <h2 className="text-3xl font-bold">ZX7 SPEAKER</h2>
                        <SeeProductBtn classes={`text-black bg-transparent border border-black hover:bg-black hover:text-white `} dynamicPath={`zx7-speaker`}/>
                    </div>
                </div>
                <div className="rounded-lg overflow-hidden">
                    <picture>
                        <source srcSet="/home/desktop/image-earphones-yx1.jpg" media="(min-width: 1024px)"/>
                        <source srcSet="/home/tablet/image-earphones-yx1.jpg" media="(min-width: 768px)"/>
                        <img className="w-full" src="/home/mobile/image-earphones-yx1.jpg" alt="audiophile's yx1 earphones" />
                    </picture>
                </div>
                <div className="flex flex-col justify-center gap-8 px-4 py-8 bg-bg2 rounded-lg*
                lg:px-24">
                    <h2 className="text-3xl font-bold">YX1 EARPHONES</h2>
                    <SeeProductBtn classes={`text-black bg-transparent border border-black hover:bg-black hover:text-white `} dynamicPath={`yx1-earphones`}/>
                </div>
           </section>
            <AboutSection />
        </main>
    )
}

export default Home