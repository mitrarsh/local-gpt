import UseChatStore from "../../store/chatStore";
import Input from "./Input";
import Message from "./Message";
import MessagesBox from "./MessagesBox";

const Chatbox = () => {
  const chatHistory = UseChatStore((state) => state.chatHistory);
  return (
    <div className="chatbox">
      <MessagesBox>
        {chatHistory.map((msg) =>
          msg.user === "chatgpt" ? (
            <Message key={msg.id} user="chatgpt">
              {msg.message}
            </Message>
          ) : (
            <Message key={msg.id} user="humanMsg">
              {msg.message}
            </Message>
          )
        )}
      </MessagesBox>
      <Input />
    </div>
  );
};

export default Chatbox;
