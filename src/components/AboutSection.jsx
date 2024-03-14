const AboutSection = () => {
    return (
        <section className="flex flex-col items-center gap-10 px-4">
            <picture>
                <source srcSet="/shared/desktop/image-best-gear.jpg" media="(min-width: 1024px)"/>
                <source srcSet="/shared/tablet/image-best-gear.jpg" media="(min-width: 768px)"/>
                <img className="rounded-lg" src="/shared/mobile/image-best-gear.jpg" alt="A man listening to music" />
            </picture>
            <h2 className="text-3xl text-center font-bold max-w-[14ch]
            md:text-5xl md:max-w-[20ch]">BRINGING YOU THE <span className="text-cta">BEST</span> AUDIO GEAR</h2>
            <p className="text-center text-black/65 font-medium max-w-[32ch] md:max-w-[62ch]">Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.</p>
        </section>
    )
}

export default AboutSection