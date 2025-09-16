import { useEffect, useState } from "react"
import "./App.css"
import "./Temperature/Temp.jsx"
import Temp from "./Temperature/Temp.jsx";
import GenAI from "./Gen-AI/GenAI.jsx";

function App() {
  const [tempDataContext, setTempDataContext] = useState({})
  const [genResponse, setGenResponse] = useState("")
  const [userInput, setUserInput] = useState("");

  return (
    <>
      <div className="app-container">
        <Temp setTempDataContext={setTempDataContext}></Temp>
        <GenAI tempDataContext={tempDataContext}></GenAI>
      </div>

    </>
  )
}

export default App
