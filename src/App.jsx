import { useState } from "react"
import "./App.css"
import "./Temperature/Temp.jsx"
import { GoogleGenAI } from "@google/genai";
import Temp from "./Temperature/Temp.jsx";

function App() {
  const [tempDataContext, setTempDataContext] = useState({})
  const [genResponse, setGenResponse] = useState("")
  const [userInput, setUserInput] = useState("");
  const ai = new GoogleGenAI({ apiKey: "AIzaSyAR2dmyNJQfju5SaccjwYQyeFTlBAsRmw4" });

  async function main(userTextInput) {
    const context = "tell me what to wear based on the json context below. Limit response to 50 words." + JSON.stringify(tempDataContext)
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash-lite",
      contents: context + userTextInput,
  });
  setGenResponse(response.candidates?.[0]?.content?.parts?.[0]?.text || "No response");
}
  const generateResponse = () => {
    main(userInput);
  }
  return (
    <>
      <div>
      <Temp setTempDataContext={setTempDataContext}></Temp>

      </div>
      <input type="text"
             value={userInput}
             onChange={(e) => setUserInput(e.target.value)} />
      <button
        onClick={() => generateResponse()}
      > Enter</button>
      <h1>{genResponse}</h1>

    </>
  )
}

export default App
