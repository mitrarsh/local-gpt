import { useState } from "react";
import UseChatStore from "../../store/chatStore";

const Input = () => {
  const [input, setInput] = useState("");
  const addMessage = UseChatStore((state) => state.addMessage);
  const activeChatId = UseChatStore((state) => state.activeChatId);
  const addChat = UseChatStore((state) => state.addChat);


  const responses = [
    "That's interesting! Tell me more.",
    "Hmm... I think I understand.",
    "Could you explain that a bit?",
    "I like where this is going!",
    "Let’s dive deeper into that.",
    "That’s a cool thought!",
    "I totally get what you mean.",
  ];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!input.trim()) return;
    let chatId = activeChatId;
    if (!chatId) {
      addChat(`Chat ${new Date().toLocaleTimeString()}`);
      chatId = UseChatStore.getState().activeChatId;
    }

    const humanMsgId = Date.now();
    addMessage({
      id: humanMsgId,
      message: input,
      date: humanMsgId,
      user: "human",
    });
    setInput("");

    setTimeout(() => {
      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      const botMsgId = humanMsgId + Math.floor(Math.random() * 1000) + 1;
      UseChatStore.getState().addMessage({
        id: botMsgId,
        message: randomResponse,
        date: Date.now(),
        user: "chatgpt",
      });
    }, 800);
  }

  return (
    <form className="input flex" onSubmit={handleSubmit}>
      <input
        className="flex-1"
        type="text"
        placeholder="Type message"
        onChange={(e) => {
          setInput(e.target.value);
        }}
        value={input}
      />
      <button type="submit">
        <img src="assets/icons/send.svg" alt="" />
      </button>
    </form>
  );
};

export default Input;
