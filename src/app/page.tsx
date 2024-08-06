'use client'

import Link from "next/link"
import "./page.css"
import Image from "next/image"

export default function Home() {
  return (
    <div className="flex flex-col w-full py-24 mx-auto ">
      <div className="text-6xl font-bold flex gap-4 justify-center">
        <h1>Encuentra tu </h1>
        <ul className="flex flex-col gap-4 text-[#5DF5E8] overflow-hidden line-height-[90px] h-[70px]">
          <li><span className="words">camino</span></li>
          <li><span className="words">propósito</span></li>
          <li><span className="words">ikig<span className="text-[#D661FF]">AI</span></span></li>
        </ul>
      </div>  

      <div className="flex justify-center mt-44">
        <button onClick={() => window.scroll({ top: 700, left: 0, behavior: 'smooth' })} className="text-black text-8xl font-bold bg-gradient-to-br from-[#D661FF] to-[#5DF5E8] p-4 rounded-full w-[150px] h-[150px] border-8 border-black border-double active:from-[#5df5e8] active:to-[#d661ff] relative before:absolute before:-z-10 before:bg-gradient-to-r before:from-[#5DF5E8] before:to-[#D661FF] before:left-[-10px] before:top-[-10px] before:blur-[5px] before:rounded-full before:w-[160px] before:h-[160px]">▽</button>
      </div>

      <div className="flex flex-col gap-8 items-center mx-auto my-24 w-[50%]">
        <h2 className="text-2xl font-bold">Conócete para descubrir tu futuro</h2>
        <p className="text-lg text-center">En esta página podrás realizar el <span className="font-semibold">test ikigai</span>, este término proviene del japonés y significa <span className="font-semibold">razón de vivir</span>, similar al concepto raison d&apos;être. Este test te puede ayudar a encontrar tu <span className="font-semibold">propósito de vida </span>si te sientes perdido, es el momento de elegir a qué quieres dedicarte o te sientes infeliz en tu trabajo y quieres un cambio. Está diseñado para crear un perfil empresarial mediante el <span className="font-semibold">autoconocimiento</span>, con solo 4 preguntas y la ayuda de una <span className="font-semibold">IA</span>.</p> 
        <Image src="/diagramaIkigai.png" alt="Diagrama del test ikigai" width={500} height={500} />
        <p className="text-lg text-center">¿Preparado para estar un paso más cerca de tu felicidad?</p>
        <Link href="/test_questions"><button className="relative inline-flex items-center justify-center p-[3px] overflow-hidden font-semibold rounded-full group bg-gradient-to-br from-[#D661FF] to-[#5DF5E8] group-hover:from-[#D661FF] group-hover:to-[#5DF5E8] focus:ring-2 focus:outline-none focus:ring-black active:from-[#5df5e8] active:to-[#d661ff]">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
            Comenzar
          </span>
        </button></Link>
      </div>
    </div>
  )
}

