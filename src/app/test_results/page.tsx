'use client'

import React from 'react';
import { testResult } from '../api/chat/route';
import amas from '../Icons/amas.svg';
import mundo from '../Icons/mundo.svg';
import pagarte from '../Icons/pagarte.svg';
import bueno from '../Icons/bueno.svg';
import mision from '../Icons/mision.svg';
import vocacion from '../Icons/vocacion.svg';
import profesion from '../Icons/profesion.svg';
import pasion from '../Icons/pasion.svg';
import personalidad from '../Icons/personalidad.svg';
import carrera from '../Icons/carrera.svg';
import arquetipo from '../Icons/arquetipo.svg';
import rareza from '../Icons/rareza.svg';
import ideal from '../Icons/ideal.svg';
import Image from 'next/image';
import Loading from '../loading';


export default function TestResults() {
  const respuesta = typeof window !== 'undefined' ? localStorage.getItem('ikigaiResponse') || '' : '';

  const [resultado, setResultado] = React.useState<any>(null);

  React.useEffect(() => {
    if (respuesta) {
        testResult(respuesta).then((res) => {
             setResultado(res) 
        });
    }
  }, [respuesta]);

  const icons: { [key: string]: any } = {
    'Yo amo': amas,
    'El mundo necesita': mundo,
    'Pueden pagarme por': pagarte,
    'Soy bueno para': bueno,
    'Mi misión': mision,
    'Mi vocación': vocacion,
    'Mi profesión': profesion,
    'Mi pasión': pasion,
    'Mi personalidad': personalidad,
    'Mi carrera': carrera,
    'Mi arquetipo': arquetipo,
    'Mi rareza': rareza,
    'Mi profesión ideal': ideal,
  };
  

  const items = Object.keys(resultado || {})
    .map((key) => ({ title: key, text: resultado[key], icon: icons[key] }))
    .filter((item) => item.text !== undefined);


  return (
    <div className="flex flex-col gap-14 py-24">
      <h1 className="text-5xl font-bold text-center">Resultados</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[80%] mx-auto rounded-lg p-4 relative bg-white before:absolute before:w-full before:h-full before:-z-10 before:bg-gradient-to-r before:from-[#5DF5E8] before:to-[#D661FF] before:left-0 before:top-0 before:blur-[5px]">
        {resultado ? (
            
            items.map((item, index) => (
            <div key={index} className={`flex flex-col items-center px-4 py-6 text-center gap-2 border border-gray-300 rounded-lg ${index === items.length - 1 ? "bg-gradient-to-r from-[#EDCBFA] to-[#D5FAF6] col-span-2 md:col-span-4 text-lg" : index % 2 ? "bg-[#D5FAF6]" : "bg-[#EDCBFA]"} ${index !== items.length - 1 ? "col-span-1" : ""}`}>
                <Image src={item.icon} alt={item.title}></Image>
                <h2 className="font-semibold">{item.title}:</h2>
                <p>{item.text}</p>
            </div>
            ))
        ) : (  
            <div className="flex flex-col px-4 py-6 text-center gap-2 border border-gray-300 rounded-lg bg-gradient-to-r from-[#EDCBFA] to-[#D5FAF6] col-span-4 h-[400px]">
              <Loading/>  
            </div> 
            
        )}
      </div>
      
    </div>
  );
}