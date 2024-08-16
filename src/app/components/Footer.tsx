import Image from "next/image";

export default function Footer () {
    return (
        <footer className="py-4 my-4 flex items-center justify-center gap-2 border border-gray-300 rounded-full w-[375px] mx-auto">
            Made with <Image src="/corazon.png" alt="heart" className="inline" width={25} height={25}/> by <a href="https://linkedin.com/in/hanangabarron" target="_blank" rel="noopener noreferrer" className="hover:font-semibold hover:underline">Hanan Gabarrón Kalito</a>
        </footer>
    );
}