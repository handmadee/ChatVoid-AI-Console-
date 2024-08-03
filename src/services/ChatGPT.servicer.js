import axios from 'axios';
import { OpenAI } from 'openai'; // Kiểm tra tên import chính xác trong tài liệu của thư viện

const client = new OpenAI({

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
