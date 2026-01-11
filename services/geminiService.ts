
import { GoogleGenAI } from "@google/genai";
import { StyleScore } from "../types";

// Initialize with named parameter and direct access to process.env.API_KEY as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const generateStyleTranslation = async (topStyles: StyleScore[]): Promise<string> => {
  const [s1, s2, s3] = topStyles;
  
  const prompt = `
    A usuária fez um teste de estilo e obteve estes 3 resultados:
    1. Predominante: ${s1.name}
    2. Secundário: ${s2.name}
    3. Terciário: ${s3.name}

    Gere um parágrafo curto, empoderador e prático em Português (BR) começando com "Você fica mais bonita quando...".
    Explique como essas 3 estéticas se misturam no dia a dia dela. Seja sofisticada e direta.
    Não use introduções, apenas o texto final.
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
    });

    return response.text || "Sua mistura de estilos cria uma imagem única que equilibra força e suavidade de forma impecável.";
  } catch (error) {
    console.error("Gemini Error:", error);
    return `Você fica mais bonita quando combina a base do estilo ${s1.name} com os toques de ${s2.name} e os detalhes refinados de ${s3.name}.`;
  }
};
