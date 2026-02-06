import axios from 'axios';

export async function textToSpeech(text) {
    const responce = await axios.post(
        `https://api.elevenlabs.io/v1/text-to-speech/${process.env.ELEVENLABS_VOICE_ID}`,
        {
            text,
            model_id: "eleven_monolingual_v1",
        },
        {
            headers: {
                "xi-api-key": process.env.ELEVENLABS_API_KEY,
                "Content-Type": "application/json",
            },
            responseType: "arraybuffer",
        }
    );

    return responce.data;
}