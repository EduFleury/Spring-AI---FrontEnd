import React, {useState} from "react";
import api from "../../services/api";

function TalkWithAi(){

    const [prompt, setPrompt] = useState("");
    const [chatResponse, setChatResponse] = useState("");

    const askAi = async () => {
        try {

            const response = await api.get(`/ask-ai-options`,
                {
                    params:{
                        prompt: prompt
                    }
                });

            const data = await response.data;
            setChatResponse(data);

        } catch (error) {
            console.error("Error asking AI:", error);
            setChatResponse("An error occurred while communicating with the AI.");
        }
    }

    return(
        <div>
            <h2>Talk with AI</h2>
            <input 
                type="text" 
                value={prompt} 
                onChange={(e) => setPrompt(e.target.value)} 
                placeholder="Enter your prompt here"
            />

            <button onClick={askAi}>Ask ai</button>
            <div className="output">
                <p>{chatResponse}</p>
            </div>
        </div>
    );
}

export default TalkWithAi;