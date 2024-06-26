import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../context/context.jsx";

const Cart = ({setCartIsOpen}) => {
    const {productList, setProductList, setFinalTotal} = useContext(Context);
    const [total, setTotal] = useState(0); 

    const quantityHandler = (product, e) => {
        const clickedButton = e.target.innerText;
        let i = 0;
        let temp = productList.slice();

        while(i < temp.length) {
            if(product.id === temp[i].id){
                if(clickedButton === "+"){
                    temp[i].quantity++;
                    break;
                }else{
                    temp[i].quantity--;
                    if(temp[i].quantity === 0){
                        temp.splice(i, 1);
                        break;
                    }
                    break;
                }
            }
            i++;
        }
        setProductList(temp);
    }

    const totalHandler = useCallback(() => {
        let temp = 0;
        for(let i = 0; i < productList.length; i++){
            temp = temp += (productList[i].price * productList[i].quantity);
        }
        setTotal(temp);
        setFinalTotal(temp);
    },[productList, setFinalTotal])

    useEffect(() => {
        totalHandler();
    },[totalHandler])


    return (
        <div  className="BACKGROUND fixed top-0 z-40 flex w-full h-screen max-w-screen-lg p-8 bg-black/50 md:justify-end md:bleeding-2" onClick={(e) => {e.target.classList.contains('BACKGROUND') && setCartIsOpen(false)}}>
            <div className="relative z-50 top-1/4 flex flex-col justify-between gap-4 w-full h-4/6 p-8 bg-white rounded-md overflow-y-scroll md:top-14 md:w-1/2 ">
                <div className="flex justify-between">
                    <p className="text-lg font-bold">CART ({productList.length})</p>
                    <button className="text-sm text-inactive cursor-pointer hover:underline" onClick={() => {setProductList([])}}>Remove All</button>
                </div>
                <ul className="flex flex-col gap-2">
                    {productList.map(product => (
                        <li className="flex justify-between items-center gap-2" key={product.id}>
                            <div className="flex items-center gap-2" >
                                <img className='max-w-16 rounded-md' src={product.image} alt={product.name} />
                                <div>
                                    <p className='text-sm font-bold md:text-base' >{product.name}</p>
                                    <p className='text-sm text-text1 md:text-base'>${product.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-bg2 rounded">
                                <button className="px-2 py-1 hover:text-cta hover:ease-in-out hover:delay-75" onClick={(e) => {quantityHandler(product, e)}}>-</button><p className="text-sm">{product.quantity}</p><button className="px-2 py-1 hover:text-cta hover:ease-in-out hover:delay-75" onClick={(e) => {quantityHandler(product, e)}}>+</button>
                            </div>
                        </li>
                        )
                    )}
                </ul>        
                <div className="flex flex-col justify-between gap-4">
                    <div className="flex justify-between ">
                        <p className="text-inactive">TOTAL</p>
                        <p className="text-lg font-bold">${total}</p>
                    </div>
                    <Link to={productList.length > 0 && '/checkout'} className={`w-full py-3 text-sm text-white text-center font-semibold 
                    ${productList.length == 0 ? 'bg-inactive cursor-default' : 'bg-cta hover:brightness-125 hover:ease-in-out hover:delay-75'}`}
                    onClick = {() => {productList.length > 0 && setCartIsOpen(false)}}>CHECKOUT</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Cart