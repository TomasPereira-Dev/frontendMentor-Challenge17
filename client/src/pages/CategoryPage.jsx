import data from "../json/data.json" 
import SeeProductBtn from "../components/SeeProductBtn.jsx"
import Shops from "../components/Shops.jsx"
import AboutSection from "../components/AboutSection.jsx"

const CategoryPage = ({category}) => {
    const newData = data.filter((product) => product.category === category)
    
    return (
        <main className="flex flex-col gap-16 px-4 pb-8">
            <section className="bg-bg3 py-8 mb-8 bleeding-1">
                <h1 className="text-3xl text-white text-center font-bold">{newData[0].category.toUpperCase()}</h1>
            </section>
            <section className="flex flex-col gap-8">
                {newData.map((product) => <div className={`flex flex-col items-center gap-8 text-center
                                                          ${Number(product.id) % 2 == 0 || product.id == 1 ? 'lg:flex-row' : 'lg:flex-row-reverse'} 
                                                          lg:gap-16 lg:text-start`}
                                            key={product.id}>
                                            <div>
                                                <picture className="rounded-lg overflow-hidden">
                                                        <source srcSet={product.categoryImage.desktop} media="(min-width: 1024px)" alt={product.name} />
                                                        <source srcSet={product.categoryImage.tablet} media="(min-width: 768px)" alt={product.name} />
                                                        <img className="aspect-square object-cover rounded-lg md:aspect-auto lg:aspect-square" src={product.categoryImage.mobile} alt={product.name} />
                                                </picture>
                                            </div>
                                            <div className="flex flex-col items-center gap-4 lg:items-start">
                                                <p className={`${!product.new && 'hidden'} text-cta font-light tracking-[.5rem]`}>NEW PRODUCT</p>
                                                <h2 className="text-3xl font-bold max-w-[12ch] md:text-5xl">{product.name}</h2>
                                                <p className="text-black/50 max-w-[34ch] md:max-w-full">{product.description}</p>
                                                <SeeProductBtn classes={`bg-cta text-white`} dynamicPath={`/${product.slug}`}/>
                                            </div>
                                          </div>
                )}
            </section>
            <section>
                <Shops />
            </section>
            <AboutSection />
        </main>
    )
}

export default CategoryPage