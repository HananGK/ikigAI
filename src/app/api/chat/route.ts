import { unstable_noStore as noStore } from 'next/cache'
import { createOpenAI } from '@ai-sdk/openai';
import { generateObject } from 'ai';
import { z } from 'zod';

const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.NEXT_PUBLIC_GROQ_API_KEY,
});

export const maxDuration = 30;

export async function testResult(input: string) {
  noStore()
  try{
    const { object } = await generateObject({
      model: groq('llama3-8b-8192'),
      schema: z.object({
        'Yo amo': z.string(),
        'El mundo necesita': z.string(),
        'Pueden pagarme por': z.string(),
        'Soy bueno para': z.string(),
        'Mi misión': z.string(),
        'Mi vocación': z.string(),
        'Mi profesión': z.string(),
        'Mi pasión': z.string(),
        'Mi personalidad': z.string(),
        'Mi carrera': z.string(),
        'Mi arquetipo': z.string(),
        'Mi rareza': z.string(),
        'Mi profesión ideal': z.string(),
      }),
      system: 'Quiero que tu respuesta sea en un tono formal pero escribe de forma clara que sea entendible por cualquier persona.',
      prompt: `Quiero que me hagas un perfil empresarial con las respuestas al test ikigai. Las respuestas a las preguntas del test son las siguientes. ${input} Con las respuestas a esas 4 preguntas quiero que me crees el perfil con la  estructura indicada, tu resultado tiene que ser lo más concreto posible, idealmente en una frase, máximo dos frases.`,
    });
    
    return object
  } catch (error) {
    console.error('Error en testResult:', error);
    return {};
  }
}


