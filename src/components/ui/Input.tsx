import { useState } from "react";

const Input = () => {
  const [input, setInput] = useState("");

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    console.log("submitted", input);
    setInput("")
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
