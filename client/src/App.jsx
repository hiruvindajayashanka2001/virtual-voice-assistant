import VoiceButton from "./components/VoiceButton";
import { talkToAssistant } from "./services/api";

function App() {
  async function handleText(text) {
    const audioBlob = await talkToAssistant(text);
    const audioUrl = URL.createObjectURL(audioBlob);
    new Audio(audioUrl).play();
  }

  return (
    <div>
      <h1>Virtual Voice Assistant</h1>
      <VoiceButton onText={handleText} />
    </div>
  );
}

export default App;
