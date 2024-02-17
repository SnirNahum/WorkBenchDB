import OpenAI from 'openai';

let openai;

export function initOpenAI() {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });
    }
}

export async function runOpenAI(prompt) {
    try {
        if (!openai) {
            throw new Error('OpenAI has not been initialized. Call initOpenAI() before using it.');
        }

        const chatCompletion = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [{ role: 'user', content: prompt }],
            max_tokens: 100,
        });

        return chatCompletion.choices[0].message;
    } catch (error) {
        // Proper error handling, e.g., logging the error and potentially taking other actions
        console.error('Error with OpenAI:', error);
        throw error;
    }
}
