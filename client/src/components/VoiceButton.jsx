import { useSpeechRecognition } from "../hooks/useSpeechRecognition";

export default function VoiceButton({ onText }) {
  const recognition = useSpeechRecognition(onText);

  return (
    <button onClick={() => recognition.start()}>
      🎤 Speak
    </button>
  );
}
