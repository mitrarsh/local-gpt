

type ChatPreviewProps={
  title:string, 
  preview:string,
  className:string
}

const ChatPreview = ({title,preview,className}:ChatPreviewProps) => {
  return (
    <div className={`mt-8 rounded-xl ${className}`}>
        <h4>{title}</h4>
        <p>{preview}</p>
    </div>
  )
}

export default ChatPreview