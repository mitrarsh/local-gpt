import React, { useEffect, useRef } from "react";
import UseChatStore from "../../store/chatStore";
type MessagesBoxProps = {
  children: React.ReactNode;
};


const MessagesBox = ({ children }: MessagesBoxProps) => {
 const messagesEndRef = useRef<HTMLDivElement | null>(null);
   const chatHistory = UseChatStore((state) => state.chatHistory);


  useEffect(() => {
    const timeout = setTimeout(() => {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" }); //“Scroll the scrollable container so that this bottom element (the ref) becomes visible.”
    }, 50); // slight delay ensures DOM is painted
    return () => clearTimeout(timeout);
  }, [chatHistory]);

  return <div className="messagesBox">
    {children}
        <div ref={messagesEndRef} />
  </div>;
};

export default MessagesBox;
