'use client';

import { useState } from "react";
import { useRouter } from 'next/navigation'; 

type Item = {
  title: string;
  description: string;
  placeholder: string;
  text: string;
};

const items: Item[] = [
  {
    title: "1. Lo que amas",
    description: "¿Cuáles son tus pasiones? ¿Qué actividades te entusiasma hacer?",
    placeholder: "Ej: La música, tocar el oboe, ...",
    text: ""
},
{
    title: "2. En qué eres bueno",
    description: "¿Qué haces bien? ¿Cuáles son tus habilidades y talentos?",
    placeholder: "Ej: Organizar mi tiempo, tener una relación asertiva con las personas, ...",
    text: ""
},
{
    title: "3. Lo que el mundo necesita",
    description: "¿Qué problemas ves en el mundo que te gustaría ayudar a resolver?",
    placeholder: "Ej: Incentivar la música en los jóvenes, cuidar las áreas verdes, ...",
    text: ""
},
{
    title: "4. Por lo que te pueden pagar",
    description: "¿Qué trabajos o servicios estarías dispuesto a realizar a cambio de una remuneración?",
    placeholder: "Ej: Dar conciertos con una orquesta, dar clases de música, ...",
    text: ""
},
];

export default function TestQuestions() {
  const [state, setState] = useState<Item[]>(items);
  const router = useRouter(); 

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>, i: number) => {
    const { value, name } = e.target;

    const newState = [...state];
    newState[i] = {
      ...newState[i],
      [name]: value
    };

    setState(newState);
  };

  const respuesta = state.map(({ title, text }) => `${title}: ${text}`).join(" ");

  const handleClick = () => {
    localStorage.setItem('ikigaiResponse', respuesta);
    router.push('/test_results');
  };

  return (
    <div className="flex flex-col w-full max-w-4xl py-24 mx-auto gap-14">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl font-bold text-center">Test Ikigai</h1>
        <h3 className="mx-auto w-[80%] text-center text-xl">Responde por favor a las siguientes 4 preguntas con calma y realizando un ejercicio de introspección, así también te conocerás mejor y obtendrás mejores resultados</h3>
      </div>

      <div className='relative p-2 rounded-md flex flex-col gap-4 w-[80%] mx-auto'>
        {state.map(({title, description, placeholder, text}, index) => (
            
          <div key={index} className='flex flex-col gap-4 bg-white p-4 w-full rounded-md before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#5DF5E8] before:to-[#D661FF] before:left-0 before:top-0 before:blur-[5px]'>
              <h2 className="text-xl font-semibold">{title}</h2>
              <p>{description}</p>
              <textarea name="text" required placeholder={placeholder} value={text} onChange={(e) => handleChange(e, index)} className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:outline-none focus:ring-gray-500"/>
          </div>
        ))}
      </div>

      <div className="mx-auto">
        <button onClick={handleClick} type="submit" className="relative inline-flex items-center justify-center p-[3px] overflow-hidden font-semibold rounded-full group bg-gradient-to-br from-[#D661FF] to-[#5DF5E8] group-hover:from-[#D661FF] group-hover:to-[#5DF5E8] focus:ring-2 focus:outline-none focus:ring-black active:from-[#5df5e8] active:to-[#d661ff]">
          <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-full group-hover:bg-opacity-0">
            Ver resultados
          </span>
        </button>
      </div>
    </div>
  );
}

