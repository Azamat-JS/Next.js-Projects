import Image from "next/image"
import Link from "next/link"

const Footer = () => {
  return (
    <div className="mt-16 flex flex-col items-center md:flex-row md:items-start bg-gray-800 p-8 rounded-lg">
      <div className="flex flex-col gap-4 items-center md:items-start">
        <Link href="/" className="flex items-center">
        <Image src={'/logo.png'} alt="Trend-shop" width={36} height={36} className="w-6 h-6 md:w-9 md:h-9"/>
        <p className="hidden md:block text-md font-medium text-white tracking-wider">Trend-Shop</p>
        </Link>
        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} Trend-Shop</p>
        <p className="text-sm text-gray-400">All rights reserver</p>
      </div>
    </div>
  )
}

export default Footer