import UseChatStore from "../../store/chatStore";
import Input from "./Input";
import Message from "./Message";
import MessagesBox from "./MessagesBox";

const Chatbox = () => {
  const chats = UseChatStore((state) => state.chats);
  const activeChatId = UseChatStore((state) => state.activeChatId);
  const activeChat = chats.find((c) => c.id === activeChatId);

  if (!activeChat)
    return (
      <div className="chatbox">
        <MessagesBox>
          <h1 className="self-center ">Where should we begin?</h1>
        </MessagesBox>
        <Input />
      </div>
    );

  return (
    <div className="chatbox">
      <MessagesBox>
        {activeChat.messages.map((msg) =>
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
