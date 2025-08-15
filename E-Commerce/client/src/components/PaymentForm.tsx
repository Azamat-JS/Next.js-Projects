import { PaymentFormInputs, paymentFormSchema } from '@/types';
import { zodResolver } from '@hookform/resolvers/zod';
import {  ShoppingCartIcon } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'
import {SubmitHandler, useForm} from 'react-hook-form'

const PaymentForm = () => {
    const {
        register, handleSubmit, formState: {errors}
    } = useForm<PaymentFormInputs>({
        resolver: zodResolver(paymentFormSchema)
    })

    const router = useRouter()

    const handlePaymentForm:SubmitHandler<PaymentFormInputs>= (data) => {

    }
  return (
    <form className='flex flex-col gap-4' onSubmit={handleSubmit(handlePaymentForm)}>
        <div className='flex flex-col gap-1'>
            <label htmlFor="cardHolder" className='text-xs text-gray-500 font-medium'>Name on card</label>
            <input type="text" id='cardHolder' placeholder='John Doe' {...register("cardHolder")}
            className='border-b border-gray-200 outline-none text-sm py-2'
            />
            {errors.cardHolder && (<p className='text-xs text-red-500'>{errors.cardHolder.message}</p>)}
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="cardNumber" className='text-xs text-gray-500 font-medium'>Card Number</label>
            <input type="number" id='cardNumber' placeholder='1111 2222 1212 2323' {...register("cardNumber")}
            className='border-b border-gray-200 outline-none text-sm py-2'
            />
            {errors.cardNumber && (<p className='text-xs text-red-500'>{errors.cardNumber.message}</p>)}
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="expirationDate" className='text-xs text-gray-500 font-medium'>Expiration Date</label>
            <input type="text" id='phone' placeholder='11/29' {...register("expirationDate")}
            className='border-b border-gray-200 outline-none text-sm py-2'
            />
            {errors.expirationDate && (<p className='text-xs text-red-500'>{errors.expirationDate.message}</p>)}
        </div>
        <div className='flex flex-col gap-1'>
            <label htmlFor="cvv" className='text-xs text-gray-500 font-medium'>CVV</label>
            <input type="text" id='cvv' placeholder='322' {...register("cvv")}
            className='border-b border-gray-200 outline-none text-sm py-2'
            />
            {errors.cvv && (<p className='text-xs text-red-500'>{errors.cvv.message}</p>)}
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <Image src="/klarna.png" alt='klarna' width={50} height={25} className='rounded-md'/>
            <Image src="/cards.png" alt='cards' width={50} height={25} className='rounded-md'/>
            <Image src="/stripe.png" alt='stripe' width={50} height={25} className='rounded-md'/>
        </div>
        <button className="w-full bg-gray-800 hover:bg-gray-900 transition-all duration-300 text-white cursor-pointer rounded-lg p-2 flex items-center justify-center gap-2">
            Checkout
            <ShoppingCartIcon className="w-4 h-4"/>
          </button>
    </form>
  )
}

export default PaymentForm