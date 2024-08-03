import axios from 'axios';
import { OpenAI } from 'openai'; // Kiểm tra tên import chính xác trong tài liệu của thư viện

const client = new OpenAI({
    apiKey: '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', // Thay thế bằng API Key hợp lệ
});

const generateImage = async () => {
    try {
        const response = await client.images.generate({
            model: 'dall-e-3',
            prompt: "Bạn là ai",
            n: 1,
            size: "1024x1024",
        });
        console.log(response);
    } catch (e) {
        console.error(e?.message || "Something went wrong");
    }
};

generateImage();
