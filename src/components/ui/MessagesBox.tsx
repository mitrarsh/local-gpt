import React, { useEffect, useRef } from "react";
import UseChatStore from "../../store/chatStore";
type MessagesBoxProps = {
  children: React.ReactNode;
};


const MessagesBox = ({ children }: MessagesBoxProps) => {
 const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const chats = UseChatStore((s) => s.chats);
  const activeChatId = UseChatStore((s) => s.activeChatId);
  const activeChat=chats.find((c)=>c.id===activeChatId)


  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); //“Scroll the scrollable container so that this bottom element (the ref) becomes visible.”
    }, 50); // slight delay ensures DOM is painted
    return () => clearTimeout(timeout);
  }, [activeChat]);

  return <div className="messagesBox">
    {children}
        <div ref={messagesEndRef} />
  </div>;
};

export default MessagesBox;
