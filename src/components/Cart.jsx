/* eslint-disable react/prop-types */
import { useCallback, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom"
import { Context } from "../context/context.jsx";

const Cart = ({setCartIsOpen}) => {
    const {productList, setProductList, setFinalTotal} = useContext(Context);
    const [total, setTotal] = useState(0); 

    const amountHandler = (product, e) => {
        const clickedButton = e.target.innerText;
        let i = 0;
        let temp = productList.slice();

        while(i < temp.length) {
            if(product.id === temp[i].id){
                if(clickedButton === "+"){
                    temp[i].amount++;
                    break;
                }else{
                    temp[i].amount--;
                    if(temp[i].amount === 0){
                        temp.splice(i, 1);
                        break;
                    }
                    break;
                }
            }
        }
        setProductList(temp);
    }

    const totalHandler = useCallback(() => {
        let temp = 0;
        for(let i = 0; i < productList.length; i++){
            temp = temp += (productList[i].price * productList[i].amount);
        }
        setTotal(temp);
        setFinalTotal(temp);
    },[productList, setFinalTotal])

    useEffect(() => {
        totalHandler();
    },[totalHandler])


    return (
        <div className="fixed top-0 z-50 flex w-full h-screen max-w-screen-lg p-8 bg-black/50 md:justify-end md:bleeding-2" onClick={() => {setCartIsOpen(false)}}>
            <div className="relative top-1/4 flex flex-col justify-between gap-4 w-full h-4/6 p-8 bg-white rounded-md overflow-y-scroll md:top-14 md:w-1/2 ">
                <div className="flex justify-between">
                    <p className="text-lg font-bold">CART ({productList.length})</p>
                    <button className="text-sm text-inactive underline cursor-pointer" onClick={() => {setProductList([])}}>Remove All</button>
                </div>
                <ul>
                    {productList.map(product => (
                        <li className="flex justify-between items-center gap-2" key={product.id}>
                            <div className="flex items-center gap-2" >
                                <img className='w-1/3 rounded-md' src={product.image} alt={product.name} />
                                <div>
                                    <p className='text-sm font-bold md:text-base' >{product.name}</p>
                                    <p className='text-sm text-text1 md:text-base'>${product.price}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4 bg-bg2 rounded">
                                <button className="px-2 py-1" onClick={(e) => {amountHandler(product, e)}}>-</button><p>{product.amount}</p><button className="px-2 py-1" onClick={(e) => {amountHandler(product, e)}}>+</button>
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
                    <Link to='/checkout' className={`w-full py-3 text-sm text-white text-center font-semibold bg-cta ${productList.length == 0 && 'bg-inactive'}`}>CHECKOUT</Link>
                </div>
                
            </div>
        </div>
    )
}

export default Cart