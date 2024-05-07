import axios from "axios";
import { useForm } from 'react-hook-form';
import { useContext, useState } from 'react';
import { createPortal } from 'react-dom';
import { Context } from '../context/context.jsx';
import SuccessModal from '../components/SuccessModal.jsx';
import { useNavigate } from 'react-router-dom';
import { initMercadoPago } from '@mercadopago/sdk-react'

const Checkout = () => {
    const emailRegex = /[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+(?:\.[-A-Za-z0-9!#$%&'*+/=?^_`{|}~]+)*@(?:[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?\.)+[A-Za-z0-9](?:[-A-Za-z0-9]*[A-Za-z0-9])?/i;

    initMercadoPago('APP_USR-46474d36-778d-40f4-a9b1-adc0b22595da');

    const [preferenceId, setPreferenceId] = useState(null);
    const {productList, finalTotal} = useContext(Context);
    const {handleSubmit, register, formState: { errors, isSubmitSuccessful}, watch} = useForm();
    const navigate = useNavigate();
    const paymentMethod = watch("paymentMethod", "mercadoPago");

    const createPreference = async () => {
        try {
            const response = await axios.post("http://https://frontend-mentor-challenge17.vercel.app/create_preference", {
                title: "Audiophile products",
                quantity: 1,
                price: Math.round(finalTotal + 50 + (finalTotal * 20) / 100),
                paymentMethod: paymentMethod
            });

            const { id } = response.data;
            return id;

        } catch (error) {
            console.log(error)
        }
        
    }

    const handleBuy =  async () => {
        const id = await createPreference();
        if(id){
            setPreferenceId(id);
        }
    }

    const mappedList = productList.map(product => (
        <li key={product.id}>
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-4'>
                    <img className='max-w-[4rem] aspect-square object-cover rounded-md' src={product.image} alt={product.name} />
                    <div>
                        <p className='font-bold'>{product.name}</p>
                        <p className='text-text1'>${product.price}</p>
                    </div>
                </div>
                <p className='text-text1'>x{product.quantity}</p>
            </div>
        </li>   
    ));

    return (
        <main className="p-4 lg:py-16 bg-bg2 bleeding-3">
            <button className="mb-4 text-semibold text-text1" onClick={() => navigate(-1)}>Go Back</button>
            <section className='grid grid-cols-1 gap-4 lg:grid-cols-3 md:gap-8'>
                <div className='p-4 bg-white rounded-md md:p-8 lg:col-span-2'>
                    <h1 className="mb-12 text-2xl font-bold lg:text-3xl">CHECKOUT</h1>
                    <form className='flex flex-col gap-8 text-sm' id='checkout-form' onSubmit={handleSubmit((data) => console.log(data))}> 
                        <div>
                            <h2 className='mb-4 text-cta font-bold'>BILLING DETAILS</h2>
                            <div className='grid gap-4 md:grid-cols-2'>
                                <label className='flex flex-col gap-2 font-bold'>
                                    Name
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("name", {required: 'this is required', pattern: {value: /[A-Za-z]/, message: `please write your name`}})} type="text" placeholder='Tomas Pereira'/>
                                    {errors.name && <p className='text-xs text-red-500 font-bold'>{errors.name.message}</p>}
                                </label>
                                <label className='flex flex-col gap-2 font-bold'>
                                    Email
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("email", {required: 'this is required', pattern: {value: emailRegex, message: `please write your email`}})} type="email" placeholder='tomaspereira@example.com'/>
                                    {errors.email && <p className='text-xs text-red-500 font-bold'>{errors.email.message}</p>}
                                </label>
                                <label className='flex flex-col gap-2 font-bold'>
                                    Phone Number
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("phoneNumber", {required: 'this is required', pattern: {value: /[0-9]/, message: `please write your phone number`}})} type="number" placeholder='+54 9 11 2122 5152'/>
                                    {errors.phoneNumber && <p className='text-xs text-red-500 font-bold'>{errors.phoneNumber.message}</p>}
                                </label>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <h2 className='text-cta text-sm font-bold'>SHIPPING INFO</h2>
                            <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
                                <label className='flex flex-col gap-2 font-bold md:col-span-2'>
                                    Your Address
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("address", {required: 'this is required', pattern: {value: /[A-Za-z0-9]/, message: `please write your home address`}})} type="text" placeholder='123 fake street'/>
                                    {errors.address && <p className='text-xs text-red-500 font-bold'>{errors.address.message}</p>}
                                </label>
                                <label className='flex flex-col gap-2 font-bold'>
                                    ZIP Code   
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("zipCode", {required: 'this is required', 
                                    minLength: {value: 3, message: 'zip code needs 3 digits'}, maxLength: {value: 3}})}
                                    type="number" placeholder='029'/>
                                    {errors.zipCode && <p className='text-xs text-red-500 font-bold'>{errors.zipCode.message}</p>}
                                </label>
                                <label className='flex flex-col gap-2 font-bold'>
                                    City
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("city", {required: 'this is required', pattern: {value: /[A-Za-z]/, message: `please write your city`}})} type="text" placeholder='Springfield'/>
                                    {errors.city && <p className='text-xs text-red-500 font-bold'>{errors.city.message}</p>}
                                </label>
                                <label className='flex flex-col gap-2 font-bold'>
                                    Country
                                    <input className='p-4 border rounded-md outline-none focus:border-cta' {...register("country", {required: 'this is required', pattern: {value: /[A-Za-z]/, message: `please write your country`}})} type="text" placeholder='United States'/>
                                    {errors.country && <p className='text-xs text-red-500 font-bold'>{errors.country.message}</p>}
                                </label>
                            </div>
                        </div>
                        <div className="grid gap-4">
                            <h2 className='text-cta text-sm font-bold'>PAYMENT DETAILS</h2>
                            <div className='grid gap-4 font-bold md:grid-cols-2'>
                                <div className='row-span-2'>
                                    <p className=''>Payment Method</p>
                                </div>
                                <div className='p-4 border rounded-md peer'>
                                    <label className='flex flex-row-reverse justify-end items-center gap-2'>
                                        Cash on Delivery
                                        <input className='p-4 border rounded-md outline-none' {...register("paymentMethod", {required: 'this is required'}) } type="radio" value="cashOnDelivery"/>
                                    </label>
                                </div>
                                <div className='p-4 border rounded-md group'>
                                    <label className='flex flex-row-reverse justify-end items-center gap-2'>
                                        MercadoPago
                                        <input className='p-4 border rounded-md outline-none' {...register("paymentMethod", {required: 'this is required'})} type="radio" value="mercadoPago" />
                                    </label>
                                </div>
                                {errors.paymentMethod && <p className='text-xs text-red-500 font-bold'>{errors.paymentMethod.message}</p>}
                            </div>
                            <div className={`${paymentMethod == "mercadoPago" && 'hidden'}`}>
                                <img className='mb-4' src="/checkout/icon-cash-on-delivery.svg" alt=" " />
                                <p className='text-text1 font-semibold max-w-[32ch] md:max-w-full'>The ‘Cash on Delivery’ option enables you to pay in cash when our delivery courier arrives at your residence. Just make sure your address is correct so that your order will not be cancelled.</p>
                            </div>
                        </div>
                    </form>
                </div>
                <div className='flex flex-col gap-2 px-4 py-8 h-fit bg-white rounded-md '>
                    <h2 className='text-lg font-bold'>SUMMARY</h2>
                    <ul className='flex flex-col gap-2'>
                        {mappedList}
                    </ul>
                    <ul>
                        <li className='flex justify-between items-center'><p className='text-text1'>TOTAL</p> <span className='text-lg font-bold'>${finalTotal}</span></li>
                        <li className='flex justify-between items-center'><p className='text-text1'>SHIPPING</p> <span className='text-lg font-bold'>$50</span></li>
                        <li className='flex justify-between items-center'><p className='text-text1'>VAT (INCLUDED)</p> <span className='text-lg font-bold'>${Math.round((finalTotal * 20) / 100)}</span></li>
                        <li className='flex justify-between items-center my-8'><p className='text-text1'>GRAND TOTAL</p> <span className='text-lg text-cta font-bold'>${Math.round(finalTotal + 50 + (finalTotal * 20) / 100)}</span></li>
                    </ul>
                    <button className='py-2 text-white font-bold bg-cta' form='checkout-form' onClick={handleBuy}>CONTINUE & PAY</button> 
                </div>
            </section>
            {isSubmitSuccessful && createPortal(<SuccessModal preferenceId={preferenceId} paymentMethod={paymentMethod} itemList={mappedList}/>, document.getElementById("success-portal"))}
        </main>
    ) 
}

export default Checkout