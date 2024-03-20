/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"

const Cart = ({setCartIsOpen}) => {
    const flag = true;

    return (
        <div className="fixed top-0 z-50 flex h-screen w-full max-w-screen-lg p-6 bg-black/50 md:justify-end md:bleeding-2" onClick={() => {setCartIsOpen(false)}}>
            <div className="relative top-14 flex flex-col gap-16 w-full h-fit p-8 bg-white rounded-md md:w-1/2 ">
                <div className="flex justify-between">
                    <p className="text-lg font-bold">CART (0)</p>
                    <button className="text-sm text-inactive underline cursor-pointer">Remove All</button>
                </div>
                <div className="flex flex-col gap-6 justify-between">
                    <div className="flex justify-between">
                        <p className="text-inactive">TOTAL</p>
                        <p className="text-lg font-bold">$0</p>
                    </div>
                    <Link to='/checkout' className={`w-full py-3 text-sm text-white text-center font-semibold bg-cta ${!flag && 'bg-inactive'}`}>CHECKOUT</Link>
                </div>
            </div>
        </div>
    )
}

export default Cart