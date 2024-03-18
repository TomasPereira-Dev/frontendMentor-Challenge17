import { useNavigate, useParams } from "react-router-dom"
import data from "../data.json"

const ProductPage = () => {

    const {productName} = useParams();
    const navigate = useNavigate();

    return(
        <main>
            <section>
                <h1>{productName}</h1>
                <button onClick={() => navigate(-1)}>Go Back</button>
                
            </section>
        </main>
    )
}

export default ProductPage