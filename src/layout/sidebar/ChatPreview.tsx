import UseChatStore from "../../store/chatStore";

type ChatPreviewProps = {
  title: string;
  preview: string;
  className: string;
  id: number
};

const ChatPreview = ({ title, preview, className, id }: ChatPreviewProps) => {
  const deleteChat= UseChatStore((s)=>s.deleteChat)
  const activeChatId=UseChatStore((s)=>s.activeChatId)
  return (
    <div className={`mt-8 p-4 rounded-xl flex justify-between ${className}`}>
      <div>
        <h4>{title}</h4>
        <p>{preview}</p>
      </div>
      <p className={`cursor-pointer ${activeChatId===id? "block":"hidden"}`} onClick={()=>deleteChat(id)}>🗑️</p>
    </div>
  );
};

export default ChatPreview;
