


// To run this code you need to install the following dependencies:
// npm install @google/genai mime
// npm install -D @types/node

import {
  GoogleGenAI,
} from '@google/genai';

async function mainRun(prompt) {
  const ai = new GoogleGenAI({
    apiKey:"AIzaSyCTwXEGc0g-O_TBS3kdvLfb3QXJmhWVUvg",
  });
  const tools = [
    {
      googleSearch: {
      }
    },
  ];
  const config = {
    thinkingConfig: {
      thinkingBudget: -1,
    },
    tools,
    responseMimeType: 'text/plain',
  };
  const model = 'gemini-2.5-pro';
  const contents = [
    {
      role: 'user',
      parts: [
        {
          text: prompt,
        },
      ],
    },
  ];

  const response = await ai.models.generateContentStream({
    model,
    config,
    contents,
  });
  let result ="";
  let fileIndex = 0;
  for await (const chunk of response) {
    result+=chunk.text;
    // console.log(chunk.text);
  }
  console.log(result)
  return result;
}

export default mainRun;
