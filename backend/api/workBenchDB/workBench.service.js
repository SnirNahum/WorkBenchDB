import OpenAI from 'openai'
import dotenv from 'dotenv'
dotenv.config()

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
});

const schema = {
    type: "object",
    properties: {
        title: {
            type: "string",
            description: "product title"
        },
        item_description_top: {
            type: "string",
            description: "Provide a creative Facebook selling post about this product",
        },
        item_description_bottom: {
            type: "string",
            description: "Provide a Facebook selling post to close the deal with creative words",
        },
        item_features: {
            type: "array",
            description: "Provide key features for this product, in each key feature include a green check mark emoji",
            items: {
                type: "object",
                properties: {
                    features: {
                        type: "string"
                    }
                }

            }
        },
        item_offer: {
            type: "string",
            description: "Provide a hurry up note for this product"
        },
        item_hashtags: {
            type: "string",
            description: "Provide hashtags for this product"
        },

    },
    required: ["title", "item_description_top", "item_features", "item_offer", "item_hashtags","item_description_bottom"]
}

async function runOpenAI(prompt) {
    const chatCompletion = await openai.chat.completions.create({
        model: "gpt-3.5-turbo-0613",
        messages: [
            {
                "role": "system", "content": "'You are a sell master and you need to write a Facebook post to sell a product'",
                "role": "user", "content": `Provide a facebook selling post with at least of 600 words about this product: ${prompt.message}, include emojis.`
            }],
        functions: [
            { name: "get_product_name", "parameters": schema }
        ],
        function_call: { name: "get_product_name" },
        temperature: 0.5,
        max_tokens: 1500,
    })
    return chatCompletion.choices[0].message.function_call.arguments


}
export const workBenchService = { runOpenAI }
