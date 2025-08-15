import {z} from 'zod'

export type ProductsType = {
    id: string | number;
    name: string;
    shortDescription: string;
    description: string;
    price: number;
    sizes: string[];
    colors: string[];
    images: Record<string, string>
}

export type CartItemType = ProductsType & {
    quantity:number;
    selectedSize:string;
    selectedColor: string;
}

export type CartItemsType = CartItemType[]

export const shippingFormSchema = z.object({
    name: z.string().min(1, "Name is required!"),
    email: z.email().min(1, "Email is required!"),
    phone: z.string()
            .min(6, "Phone number must be between 6 and 20 digits!")
            .max(20, "Phone number must be between 6 and 20 digits!")
            .regex(/^\d+$/, "Phone number must contain only numbers!"),
    address: z.string().min(1, "Address is required!"),
    city: z.string().min(1, "City is required!")
});

export type ShippingFormInputs = z.infer<typeof shippingFormSchema>;


export const paymentFormSchema = z.object({
    cardHolder: z.string().min(1, "Card holder is required!"),
    cardNumber: z.string().min(16, "Card number must be at least 16 numbers!").max(16, 'Card number must be at most 16 numbers!'),
    expirationDate: z.string()
                     .regex(/^(0[1-9]|1[0-2])\/\d{2}$/, 'Expiration date must in MM/YY format!'),
    cvv: z.string().min(3, "CVV must be at least 3 numbers!").max(3, 'CVV must be at most 3 numbers'),
});

export type PaymentFormInputs = z.infer<typeof paymentFormSchema>;

export type CartStoreStateType = {
    cart: CartItemsType;
}

export type CartStoreActionsType = {
    addToCart: (product: CartItemType) => void;
    removeFromCart: (product: CartItemType) => void;
    clearCart:() => void;
}