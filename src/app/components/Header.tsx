import Image from "next/image";
import Link from "next/link";
import Github from "../Icons/github.svg"

export default function Header() {
    return (
        <header className="relative bg-white before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#5DF5E8] before:to-[#D661FF] before:left-0 before:top-0 before:blur-[5px] flex items-center justify-between px-4">
            <Link href="/"><div className="mx-auto">
                <Image src="/logoIkigAI.png" alt="ikigAI Logo" width={250} height={250} />
            </div></Link>
            <div className="mx-4">
                <a href="https://github.com/HananGK/ikigAI" target="_blank" rel="noopener noreferrer"><Image src={Github} alt="github logo" width={40} height={40} /> </a>
            </div>
        </header>
    );
}