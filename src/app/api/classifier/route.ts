import { NextResponse } from "next/server";

// In a real application, you would use the Vercel AI SDK here:
// import { generateObject } from 'ai';
// import { z } from 'zod';
// import { google } from '@ai-sdk/google'; // or openai

export async function POST(req: Request) {
  try {
    const { query } = await req.json();

    if (!query) {
      return NextResponse.json({ error: "Query is required" }, { status: 400 });
    }

    /* 
      PRODUCTION AI IMPLEMENTATION (Commented out until API key is available):
      
      const { object } = await generateObject({
        model: google('gemini-1.5-pro'), // Or chosen provider
        schema: z.object({
          category: z.enum(['CODING', 'PROGRAMMING', 'DSA', 'DEBUGGING', 'CS_FUNDAMENTALS', 'TECHNICAL_INTERVIEW', 'HR_INTERVIEW', 'PROJECT_INTERVIEW', 'CAREER_TECHNICAL', 'PLATFORM_SUPPORT', 'OUT_OF_SCOPE']),
          reasoning: z.string(),
        }),
        prompt: `Classify the following user query. If it is NOT related to programming, coding, computer science, software engineering, or technical interviews, you MUST classify it as OUT_OF_SCOPE.\n\nQuery: "${query}"`
      });

      return NextResponse.json(object);
    */

    // MOCK CLASSIFIER LOGIC FOR MVP TESTING
    const lowerQuery = query.toLowerCase();
    
    // Non-coding related keywords
    const outOfScopeKeywords = ["weather", "movie", "recipe", "politics", "cricket", "sports", "flight", "music"];
    const isOutOfScope = outOfScopeKeywords.some(keyword => lowerQuery.includes(keyword));

    if (isOutOfScope) {
      return NextResponse.json({
        category: "OUT_OF_SCOPE",
        reasoning: "Query contains non-programming topics.",
        message: "CodePrep AI focuses on programming, coding, computer science, and interview preparation. I can't answer this question. Try solving a DSA problem or debugging your code!"
      });
    }

    return NextResponse.json({
      category: "CODING",
      reasoning: "Query appears to be programming related.",
      message: "Valid coding query."
    });

  } catch (error) {
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
