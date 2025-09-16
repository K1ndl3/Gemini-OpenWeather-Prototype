import { useState } from "react";
import { GoogleGenAI } from "@google/genai";
import Markdown from "react-markdown";

function GenAI(props) {
    const ai = new GoogleGenAI({ apiKey: import.meta.env.VITE_GEMINI_KEY });
    const [genResponse, setGenResponse] = useState("");
    const tempDataContext = JSON.stringify(props.tempDataContext);

    async function botConfig() {
        const context = "You are a weather chat bot. You are to give recommendations on: 1) clothing to wear 2) accessories to bring 3) any weather-based emergencies to be aware of. make 3 main headers to asnwer the promps and some bullet points under to explain. Keep entire response within 100 words";
        const response = await ai.models.generateContent({
            model: "gemini-2.5-flash-lite",
            contents: context + tempDataContext,
        });
        setGenResponse(response.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
    }
    
    function generateResponse() {
        botConfig();
    }

    return <>
        <div className="GenAI-container">
            <button
                onClick={() => generateResponse()}>
                Generate AI-summary
            </button>
            <Markdown>{genResponse}</Markdown>
        </div>
    </>
}

export default GenAI