import { useParams } from "react-router-dom";
import Chatbox from "../components/ui/Chatbox";
import UseChatStore from "../store/chatStore";
import { useEffect } from "react";

const Chat = () => {
  const { id } = useParams<{ id: string }>();
  const setActiveChat = UseChatStore((s) => s.setActiveChat);

  useEffect(()=>{
    if (id) setActiveChat(Number(id));
  },[id,setActiveChat])

  return (
    <div className=" flex-1">
      <Chatbox />
    </div>
  );
};

export default Chat;
