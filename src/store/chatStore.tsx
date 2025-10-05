
import { create } from "zustand";
import { persist} from "zustand/middleware";

export type Message = {
  id: number;
  message: string;
  date: number;
  user: "chatgpt"|"human"
};

export type Chat={
  id:number;
  title:string;
  messages: Message[];
  preview:string;
  createdAt: number
}

type ChatStore = {
  chats: Chat[];
  activeChatId: number | null;
  addMessage: (msg: Message) => void;
  setActiveChat: (id: number|null) => void;
  addChat: (title?: string) => void;
  deleteChat: (id: number) => void;
  // clearChats: () => void;
};

const UseChatStore = create<ChatStore>()(
  persist(
    (set,get)=>({
      chats:[],
      activeChatId:null, 
      addChat:(title="New chat")=>{
        const newChat: Chat={
          id: Date.now(),
          title, 
          messages:[],
          preview:"",
          createdAt:Date.now()
        };
        set((s)=>({
          chats: [...s.chats,newChat],
          activeChatId: newChat.id
        }))
      },
      setActiveChat:(id)=>set({activeChatId:id}),
      addMessage:(msg)=>{
        const {activeChatId, chats}=get();
        if(!activeChatId)return;
        set({
          chats:chats.map((chat)=>chat.id===activeChatId?{
            ...chat, messages: [...chat.messages,msg]
          }:chat
        )
        })
      },
      deleteChat: (id:number)=>{
        set((s)=>({
          chats: s.chats.filter((chat)=>chat.id!==id),
          activeChatId: s.activeChatId===id? null: s.activeChatId,
        }))
      }

    }),{name:"chat-storage"}
  )
)

export default UseChatStore;
