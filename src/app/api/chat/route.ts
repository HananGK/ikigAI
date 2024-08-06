import { unstable_noStore as noStore } from 'next/cache'
import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});


// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function testResult(input: string) {
  noStore()
  const { object } = await generateObject({
    model: groq('llama3-8b-8192'),
    schema: z.object({
      yoAmo: z.string(),
      mundoNecesita: z.string(),
      puedenPagarme: z.string(),
      soyBueno: z.string(),
      miMision: z.string(),
      miVocacion: z.string(),
      miProfesion: z.string(),
      miPasion: z.string(),
      miPersonalidad: z.string(),
      miCarrera: z.string(),
      miArquetipo: z.string(),
      miRareza: z.string(),
      miEmpleoIdeal: z.string(),
    }),
    system: 'Quiero que tu respuesta sea en un tono formal pero escribe de forma clara que sea entendible por cualquier persona, no uses negrita.',
    prompt: `Quiero que me hagas un perfil empresarial con las respuestas al test ikigai. Las respuestas a las preguntas del test son las siguientes. ${input} Con las respuestas a esas 4 preguntas quiero que me crees el perfil con la siguiente estructura, tu resultado tiene que ser lo más concreto posible, idealmente en una frase, máximo dos frases. La estructura del resultado es la siguiente. `,
  });
  console.log(object)

  const resultado: string ='Yo amo: ' + object.yoAmo + '\n' + 'El mundo necesita: ' + object.mundoNecesita + '\n' + 'Pueden pagarme por: ' + object.mundoNecesita + '\n' + 'Soy bueno para: ' + object.soyBueno + '\n' + 'Mi misión es: ' + object.miMision + '\n' + 'Mi vocación es: ' + object.miVocacion + '\n' + 'Mi profesión es: ' + object.miProfesion + '\n' + 'Mi pasión es: ' + object.miPasion + '\n' + 'Mi personalidad es: ' + object.miPersonalidad + '\n' + 'Mi carrera es: ' + object.miCarrera + '\n' + 'Mi arquetipo: ' + object.miArquetipo + '\n' + 'Mi rareza es: ' + object.miRareza + '\n' + 'Mi empleo ideal es: ' + object.miEmpleoIdeal
  return resultado
  
}


