const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
    apiKey: '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',
    dangerouslyAllowBrowser: true,
});

const openai = new OpenAIApi(configuration);

export async function sendMngOpenai(message) {
    try {
        const res = await openai.createChatCompletion({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'system', content: 'You are a helpful assistant.' },
                { role: 'user', content: message },
            ],
        });
        return res.data;
    } catch (error) {
        console.error('Error:', error.response ? error.response.data : error.message);
        throw error;
    }
}
