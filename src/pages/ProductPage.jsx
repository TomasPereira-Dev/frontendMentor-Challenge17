import { useContext, useState } from "react";
import { useNavigate, useParams } from "react-router-dom"
import data from "../data.json"
import SeeProductBtn from "../components/SeeProductBtn.jsx";
import Shops from "../components/Shops.jsx";
import AboutSection from "../components/AboutSection.jsx";
import { Context } from "../context/context.jsx";

const ProductPage = () => {
    
    const {productName} = useParams();
    const navigate = useNavigate();

    const {productList, setProductList} = useContext(Context);
    const [quantity, setQuantity] = useState(0);

    const productData = data.filter((product) => productName.toLocaleLowerCase() === product.slug.toLocaleLowerCase());
    const productForList = {
      id: productData[0].id,
      image: productData[0].others[0].image.mobile,
      name: productData[0].others[0].name,
      price: productData[0].price,
      amount: quantity
    };

    return(
        <main className="flex flex-col gap-8 p-8 lg:gap-24">
            <button className="w-fit" onClick={() => navigate(-1)}>Go Back</button>
            <section className="flex flex-col">
                <div className="flex flex-col gap-12 md:flex-row">
                    <picture>
                        <source srcSet={`${productData[0].image.desktop}`} media='(min-width: 1024px)'/>
                        <source srcSet={`${productData[0].image.tablet}`} media='(min-width: 768px)'/>
                        <img className="rounded-md" src={`${productData[0].image.mobile}`} alt={`${productData[0].name}`} />
                    </picture>
                    <div className="flex flex-col justify-center gap-4">
                        <p className={`${!productData[0].new && 'hidden'} text-cta tracking-[.5rem]`}>NEW PRODUCT</p>
                        <h1 className="text-3xl font-bold max-w-[16ch]">{productData[0].name.toUpperCase()}</h1>
                        <p className="text-black/50 font-semibold max-w-[35ch] md:max-w-[48ch] lg:max-w-[78ch]">{productData[0].description}</p>
                        <p className="text-xl font-bold">${productData[0].price}</p>
                        <div className="flex gap-4">
                            <div className="flex items-center justify-center gap-4 px-6 py-3 text-xl bg-bg2">
                                <button onClick={() => {quantity > 0 && setQuantity(quantity - 1)}}>-</button><span className="text-bold">{quantity}</span><button onClick={() => {setQuantity(quantity + 1)}}>+</button>
                            </div>
                            <button className="text-white font-semibold bg-cta px-6 py-3" onClick={() => {quantity > 0 && setProductList([...productList, productForList])}}>ADD TO CART</button>
                        </div>
                    </div>
                </div>   
            </section>
            <section className="flex flex-col gap-8 lg:flex-row lg:gap-24">
                <div className="flex flex-col gap-4">
                    <h2 className="text-2xl font-bold">FEATURES</h2>
                    <p className="text-black/50 font-semibold whitespace-break-spaces lg:max-w-[42ch]">{productData[0].features}</p>
                </div>
                <div className="flex flex-col gap-4 md:flex-row md:gap-32 lg:flex-col lg:gap-4">
                    <h2 className="text-2xl font-bold">IN THE BOX</h2>
                    <ul className="flex flex-col gap-2">
                        {Array.from(productData[0].includes).map((items) => <li className="text-black/50" key={items.item}>
                                                                                <p><span className="text-cta font-bold mr-4">{items.quantity}x</span> {items.item}</p>
                                                                            </li>)}
                    </ul>
                </div>
            </section>
            <section className="grid grid-flow-row gap-6 md:grid-cols-2">
                <picture>
                    <source srcSet={productData[0].gallery.first.desktop} media="min-width(1024px)"/>
                    <source srcSet={productData[0].gallery.first.tablet} media="min-width(768px)"/>
                    <img className="rounded-md" src={productData[0].gallery.first.mobile} alt="image of the product" />
                </picture>
                <picture className="md:order-1">
                    <source srcSet={productData[0].gallery.second.desktop} media="min-width(1024px)"/>
                    <source srcSet={productData[0].gallery.second.tablet} media="min-width(768px)"/>
                    <img className="rounded-md" src={productData[0].gallery.second.mobile} alt="image of the product" />
                </picture>
                <picture className="row-span-2">
                    <source srcSet={productData[0].gallery.third.desktop} media="min-width(1024px)"/>
                    <source srcSet={productData[0].gallery.third.tablet} media="min-width(768px)"/>
                    <img className="rounded-md" src={productData[0].gallery.third.mobile} alt="image of the product" />
                </picture>
            </section>
            <section>
                <h2 className="text-2xl font-bold mb-4 text-center">YOU MAY ALSO LIKE</h2>
                <div className="grid gap-6 md:grid-flow-col">
                    {Array.from(productData[0].others).map((item) => 
                        <div className="flex flex-col items-center gap-4" key={item.name}>
                            <picture>
                                <source srcSet={item.image.desktop} media="(min-width: 1024px)"/>
                                <source srcSet={item.image.tablet} media="(min-width: 768px)"/>
                                <img className="rounded-md" src={item.image.mobile} alt={`audiophile's ${item.name}`} />
                            </picture>
                            <h3 className="text-2xl font-bold">{item.name}</h3>
                            <SeeProductBtn classes={'bg-cta text-white'} dynamicPath={`/${item.slug}`}/>
                        </div>
                    )}
                </div>
            </section>
            <section>
                <Shops />
            </section>
            <AboutSection />
        </main>
    )
}

export default ProductPage