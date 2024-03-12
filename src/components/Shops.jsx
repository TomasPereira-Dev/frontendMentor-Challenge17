import { Link } from "react-router-dom"

const Shops = () => {
    return (
        <div className="grid grid-flow-cols gap-20 p-8">
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg">
                <img className="absolute -top-14 w-1/2" src="/shared/desktop/image-category-thumbnail-headphones.png" alt="a pair of headphones" />
                <p>HEADPHONES</p>
                <Link className="flex items-center gap-2">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg">
                <img className="absolute -top-14 w-1/2" src="/shared/desktop/image-category-thumbnail-speakers.png" alt="a speaker" />
                <p>SPEAKERS</p>
                <Link className="flex items-center gap-2">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
            <div className="relative flex flex-col items-center pt-16 pb-2 bg-bg2 rounded-lg">
                <img className="absolute -top-14 w-1/2" src="/shared/desktop/image-category-thumbnail-earphones.png" alt="a pair of earphones" />
                <p>EARPHONES</p>
                <Link className="flex items-center gap-2">SHOP <img src="/shared/desktop/icon-arrow-right.svg" alt=" " /></Link>
            </div>
        </div>
    )
}

export default Shops