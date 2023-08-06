import Link from "next/link";
import Logo from '../assets/logo.png'
import ThemeButton from "./ThemeButton";
import Image from "next/image";

export default function Navbar() {

    return (
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
                <div className="flex justify-between items-center w-full">
                    <Link href="/" className="flex justify-items-center items-end">
                        <Image 
                            src={Logo}
                            className="mr-2"
                            alt="Boba with cat head"
                            height={35}
                        />
                        <h1 className="text-2xl font-medium">
                            Boba <span className="text-[#B4DC87]">Blog</span>
                        </h1>
                    </Link>
                    <ThemeButton />
                </div>
            </div>
        </div>
    )
}