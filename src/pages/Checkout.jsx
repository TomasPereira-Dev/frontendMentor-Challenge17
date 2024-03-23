import { useForm } from 'react-hook-form'

const Checkout = () => {

    const {handleSubmit, register, formState: { errors }, watch} = useForm();

    const paymentMethod = watch("paymentMethod");

    return (
        <main className="p-4 bg-bg2 bleeding-3">
            <button className="mb-4 text-semibold text-text1">Go Back</button>
            <section className='flex flex-col gap-4'>
                <div className='p-4 bg-white rounded-md'>
                    <h1 className="mb-4 text-2xl font-bold">CHECKOUT</h1>
                    <form className='flex flex-col gap-4 text-sm' onSubmit={handleSubmit((data) => console.log(data))}> 
                        <div className='grid grid-cols-1 gap-4'>
                            <h2 className='text-cta font-bold'>BILLING DETAILS</h2>
                            <label className='flex flex-col gap-2 font-bold'>
                                Name
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("name", {required: 'this is required'})} type="text" placeholder='Tomas Pereira'/>
                            </label>
                            <label className='flex flex-col gap-2 font-bold'>
                                Email
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("email", {required: 'this is required'})} type="email" placeholder='tomaspereira@example.com'/>
                            </label>
                            <label className='flex flex-col gap-2 font-bold'>
                                Phone Number
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("phoneNumber", {required: 'this is required'})} type="number" placeholder='+54 9 11 2122 5152'/>
                            </label>
                        </div>
                        <div className="grid gap-4">
                            <h2 className='text-cta text-sm font-bold'>SHIPPING INFO</h2>
                            <label className='flex flex-col gap-2 font-bold'>
                                Address
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("address", {required: 'this is required'})} type="text" placeholder='123 fake street'/>
                            </label>
                            <label className='flex flex-col gap-2 font-bold'>
                                ZIP Code   
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("zipCode", {required: 'this is required'})} type="number" placeholder='029'/>
                            </label>
                            <label className='flex flex-col gap-2 font-bold'>
                                City
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("city", {required: 'this is required'})} type="text" placeholder='Springfield'/>
                            </label>
                            <label className='flex flex-col gap-2 font-bold'>
                                Country
                                <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("country", {required: 'this is required'})} type="text" placeholder='United States'/>
                            </label>
                        </div>
                        <div className="grid gap-4">
                            <h2 className='text-cta text-sm font-bold'>PAYMENT DETAILS</h2>
                            <div className='p-4 border rounded-md group'>
                                <label className='flex flex-row-reverse justify-end gap-2'>
                                    MercadoPago
                                    <input className='p-4 border rounded-md outline-none' {...register("paymentMethod", {required: 'this is required'})} type="radio" value="mercadoPago"/>
                                </label>
                            </div>
                            <div className='p-4 border rounded-md peer'>
                                <label className='flex flex-row-reverse justify-end gap-2'>
                                    Cash on Delivery
                                    <input className='p-4 border rounded-md outline-none' {...register("paymentMethod", {required: 'this is required'}) } type="radio" value="cashOnDelivery"/>
                                </label>
                            </div>
                            <div className={`${paymentMethod == "mercadoPago" && 'hidden'}`}>
                                <img className='mb-4' src="/checkout/icon-cash-on-delivery.svg" alt=" " />
                                <p className='text-text1 font-semibold max-w-[32ch]'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col gap-2 p-4 bg-white rounded-md'>
                    <h2 className='text-lg font-bold'>SUMMARY</h2>
                    <ul>
                        <li className='flex justify-between'><p className='text-text1'>TOTAL</p> <span className='text-lg font-bold'>$0</span></li>
                        <li className='flex justify-between'><p className='text-text1'>SHIPPING</p> <span className='text-lg font-bold'>$0</span></li>
                        <li className='flex justify-between'><p className='text-text1'>VAT (INCLUDED)</p> <span className='text-lg font-bold'>$0</span></li>
                        <li className='flex justify-between my-8'><p className='text-text1'>GRAND TOTAL</p> <span className='text-lg text-cta font-bold'>$0</span></li>
                    </ul>
                    <button className='py-2 text-white font-bold bg-cta'>CONTINUE & PAY</button>
                </div>
            </section>
        </main>
    )
}

export default Checkout