import { create } from "zustand";
import { subscribeWithSelector } from "zustand/middleware";

export type Message = {
  id: number;
  message: string;
  date: number;
  user: "chatgpt"|"human"
};
type ChatStore = {
  chatHistory: Message[];
  addMessage: (newMsg: Message) => void;
  // clearChat: () => void;
};

const UseChatStore = create(
  subscribeWithSelector<ChatStore>((set)=>({
    chatHistory:[],
    addMessage:(msg)=>set((state)=>({
      chatHistory:[...state.chatHistory,msg]
    }))
  }))
);

export default UseChatStore;
