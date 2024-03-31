import { Link } from "react-router-dom"

const SuccessModal = ({itemList ,finalTotal}) => {
    return(
        <div className="fixed top-0 z-50 flex justify-center items-center p-8 w-full h-full bg-bg3/75">
            <div className="flex flex-col gap-6 p-5 h-5/6 bg-white rounded-md overflow-y-scroll">
                <div>
                    <img src="/checkout/icon-order-confirmation.svg" alt=" " />
                </div>
                <div>
                    <h1 className="text-2xl font-bold">THANK YOU FOR YOUR ORDER</h1>
                    <p className="text-sm text-text1 font-bold ">You will receive an email confirmation shortly.</p>
                </div>
                <div>
                    <ul className="p-4 bg-bg2 rounded-t-md">
                        {itemList}
                    </ul>
                    <div className="p-4 bg-bg1 rounded-b-md">
                        <p className="text-text1">GRAND TOTAL</p>
                        <p className="text-white font-bold">${Math.round(finalTotal + 50 + (finalTotal * 20) / 100)}</p>
                    </div>
                </div>
                <Link to="/" className="py-2 text-center text-white font-bold bg-cta">BACK TO HOME</Link>
            </div>
        </div>
    )
}

export default SuccessModal