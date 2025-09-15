import { useState } from "react";

function GenAI() {
    const ai = new GoogleGenAI({ apiKey: "AIzaSyAR2dmyNJQfju5SaccjwYQyeFTlBAsRmw4" });
    const [genResponse, setGenResponse] = useState("");
    const [userInput, setUserInput] = useState("");

    async function botConfig(userTextInput) {
        const context = "You are a weather chat bot. You are to give recommendations on: 1) clothing to wear 2) accessories to bring 3) food to eat";
        const response = await ai.models.generateContent()
    }

    return <>
        <div className="GenAI-container">

        </div>
    </>
}

export default GenAI