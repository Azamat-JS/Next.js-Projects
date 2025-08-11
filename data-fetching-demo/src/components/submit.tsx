"use client"
import { useFormStatus } from "react-dom"

export const Submit = () => {
    const {pending} = useFormStatus();

    return <button
        type="submit"
        className="block w-full mt-2 p-2 text-white bg-blue-500 rounded disabled:bg-gray-500 cursor-pointer disabled:cursor-not-allowed"
        disabled={pending}
    >
        Submit
    </button>
}