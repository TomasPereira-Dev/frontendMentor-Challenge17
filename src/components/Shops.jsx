import { Link } from "react-router-dom"

const Shops = ({hamburgerIsOpen}) => {
    return (
        <div className={`${hamburgerIsOpen && 'absolute top-[5rem] z-50 w-full shadow-lg'} grid grid-cols-1 gap-20 px-4 py-16 bg-white max-w-[375px] md:grid-cols-3 md:gap-6 md:mx-auto md:max-w-none lg:px-0 lg:py-8`}>
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg">
                <img className="absolute -top-16 w-1/2 z-10 object-contain aspect-square  md:-top-10 lg:-top-20" src="/shared/desktop/image-category-thumbnail-headphones.png" alt="a pair of headphones" />
                <p className="relative z-50 font-bold mb-2">HEADPHONES</p>
                <Link to='/headphones' className="relative z-50 flex items-center gap-2 text-text1 font-bold hover:text-cta hover:ease-in hover:delay-75">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg">
                <img className="absolute -top-16 w-1/2 object-contain aspect-square  md:-top-10 lg:-top-20" src="/shared/desktop/image-category-thumbnail-speakers.png" alt="a speaker" />
                <p className="relative z-50 font-bold mb-2">SPEAKERS</p>
                <Link to='/speakers' className="relative z-50 flex items-center gap-2 text-text1 font-bold hover:text-cta hover:ease-in hover:delay-75">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg ">
                <img className="absolute -top-16 w-1/2 object-contain aspect-square  md:-top-10 lg:-top-20" src="/shared/desktop/image-category-thumbnail-earphones.png" alt="a pair of earphones" />
                <p className="relative z-50 font-bold mb-2 ">EARPHONES</p>
                <Link to='/earphones' className="relative z-50 flex items-center gap-2 text-text1 font-bold hover:text-cta hover:ease-in hover:delay-75">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
        </div>
    )
}

export default Shops