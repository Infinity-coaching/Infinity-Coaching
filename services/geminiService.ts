
import { GoogleGenAI, Type } from "@google/genai";
import { RitualCategory, InsightsResponse } from "../types";

// Initialize GoogleGenAI using process.env.API_KEY
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const refineIntention = async (category: RitualCategory, rawIntention: string) => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are an Ocean Ritual Counselor for INFINITY COACHING, a luxury regenerative experience in Colombia.
    Your tone is poetic, serene, empathetic, and professional. 
    Users provide a 'Ritual Category' (${Object.values(RitualCategory).join(', ')}) and a raw intention.
    
    Tasks:
    1. Refine the intention into a more profound, water-aligned, and actionable phrase (10-15 words).
    2. Provide a short poetic insight related to how the ocean (salt, pressure, depth, or current) aids this specific transformation.
    
    Output must be in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Category: ${category}. User Intention: "${rawIntention}"`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            refinedIntention: { type: Type.STRING, description: "The refined, more poetic intention." },
            poeticInsight: { type: Type.STRING, description: "A poetic insight about the ocean's alchemy." }
          },
          required: ["refinedIntention", "poeticInsight"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Error:", error);
    throw error;
  }
};

export const analyzeDocument = async (documentContent: string): Promise<InsightsResponse> => {
  const model = 'gemini-3-flash-preview';
  
  const systemInstruction = `
    You are a world-class Executive Coach and Organizational Psychologist at INFINITY COACHING.
    Your task is to analyze the provided document (feedback, self-reflection, or journal) and provide strategic leadership insights.
    
    The tone should be sophisticated, encouraging, and deeply analytical.
    Provide a concise summary, 3 key leadership insights with specific action steps, and one profound strategic question for the leader to ponder.
    
    All responses must be in Korean.
    Output must be in JSON format.
  `;

  try {
    const response = await ai.models.generateContent({
      model,
      contents: `Analyze the following leadership document content: "${documentContent}"`,
      config: {
        systemInstruction,
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            summary: { type: Type.STRING, description: "A high-level summary of the analysis." },
            insights: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  title: { type: Type.STRING, description: "Title of the insight." },
                  description: { type: Type.STRING, description: "Detailed description of the insight." },
                  actionStep: { type: Type.STRING, description: "A practical action step for the leader." }
                },
                required: ["title", "description", "actionStep"]
              }
            },
            strategicQuestion: { type: Type.STRING, description: "A deep, reflective question for the leader." }
          },
          required: ["summary", "insights", "strategicQuestion"]
        }
      }
    });

    return JSON.parse(response.text || '{}');
  } catch (error) {
    console.error("Gemini Insight Analysis Error:", error);
    throw error;
  }
};
