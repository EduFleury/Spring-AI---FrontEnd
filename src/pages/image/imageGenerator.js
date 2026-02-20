import React from "react";
import {useState} from "react";
import api from "../../services/api";

function ImageGenerator(){

    // http://localhost:8080/ai/generate-image?prompt=cute bird
    const [prompt, setPrompt] = useState("");
    const [imageUrl, setImageUrl] = useState([]);

    const generateImages = async () => {
        try {

            const response = await api.get(`/generate-image`,
                {
                    params:{
                        prompt: prompt
                    }
                });

            const data = await response.data;
            setImageUrl(data);


        } catch (error) {
            console.error("Error generating image:", error);
            setImageUrl("An error occurred while generating the image.");
        }
    }

    return(
        <div>
            <h2>Image Generator</h2>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Enter your prompt here"
            />
        
            <button onClick={generateImages}>Generate Image</button>
            <div className="image-grid">
                {imageUrl.map((url, index) => (
                    <img key={index} src={url} alt={`Generated ${index}`} />
                ))}
                {
                    [...Array(1 - imageUrl.length)].map((_, index) => (
                        <div key={index + imageUrl.length} className="empty-image-slot"></div>
                    ))
                }
            </div>
        </div>
    );
}

export default ImageGenerator;