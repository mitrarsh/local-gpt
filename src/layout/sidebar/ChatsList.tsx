import { Link } from "react-router-dom";
import UseChatStore from "../../store/chatStore";
import ChatPreview from "./ChatPreview";

const ChatsList = () => {
  const chats = UseChatStore((s) => s.chats);
  const activeChatId = UseChatStore((s) => s.activeChatId);
  const setActiveChat=UseChatStore((s)=>s.setActiveChat)

  return (
    <div>
      <ul>
        {chats.map((chat) => (
          <Link to={`chat/${chat.id}`}
          onClick={()=>setActiveChat(chat.id)}
          >
            <ChatPreview
              title={chat.title}
              preview={chat.preview}
              className={`${activeChatId === chat.id ? "activeChatPreview" : ""}`}
            />
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default ChatsList;
