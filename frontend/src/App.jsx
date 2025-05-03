import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Success from "./Pages/Success";
import { useState } from "react";

const App = () => {
  const [showChat, setShowChat] = useState(false);
  const [chatInput, setChatInput] = useState("");
  const [chatResponse, setChatResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChatSubmit = async () => {
    if (!chatInput.trim()) return;

    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:4000/api/v1/reservation/gemini",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            input: chatInput,
          }),
        }
      );

      const data = await response.json();
      const result = data?.candidates?.[0]?.content?.parts?.[0]?.text;
      setChatResponse(result || "No response from Gemini.");
    } catch (error) {
      setChatResponse("Error contacting Gemini API.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/success" element={<Success />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Toaster />
      </Router>

      {/* Chatbot Toggle Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="chat-toggle-button"
      >
        💬
      </button>

      {/* Chat Window */}
      {showChat && (
        <div className="chat-window">
          <h4 className="chat-title">Ask Anything!</h4>
          <textarea
            rows="3"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            className="chat-textarea"
            placeholder="Search for restaurants, seats, etc..."
          />
          <button
            onClick={handleChatSubmit}
            className="chat-submit-button"
            disabled={loading}
          >
            {loading ? "Please wait..." : "Ask"}
          </button>

          {loading && (
            <div className="chat-loading">Loading response...</div>
          )}

          {chatResponse && (
            <div className="chat-response-box">
              <strong>Response:</strong>
              <p>{chatResponse}</p>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default App;


// terminal-split-ctrl+shift+5
// navigate to the respective folder
// Run the following command-->
// npm install
// npm audit fix --force
// npm start 
// npm run dev