// token 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
//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
const { OpenAI } = require('openai');

const openai = new OpenAI({
    apiKey: "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"
});

async function makeWords(word) {
    const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: 'user', content: word }],
        model: 'gpt-3.5-turbo',
        max_tokens: 50
    });

    return chatCompletion.choices[0].message.content;
}


module.exports = makeWords;