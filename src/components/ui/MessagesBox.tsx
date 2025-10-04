import React from "react";
type MessagesBoxProps = {
  children: React.ReactNode;
};

const MessagesBox = ({ children }: MessagesBoxProps) => {
  return <div className="messagesBox">
    {children}
  </div>;
};

export default MessagesBox;
