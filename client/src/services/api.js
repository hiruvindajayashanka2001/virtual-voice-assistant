export async function talkToAssistant(text) {
  const response = await fetch("http://localhost:5000/api/assistant/talk", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text }),
  });

  return await response.blob();
}
