export function useSpeechRecognition(onResult) {
  const recognition = new window.webkitSpeechRecognition();
  recognition.lang = "en-US";
  recognition.continuous = false;

  recognition.onresult = (event) => {
    onResult(event.results[0][0].transcript);
  };

  return recognition;
}
