
type MessageProps={
    children: React.ReactNode;
    user: string
}

const Message = ({children,user}:MessageProps) => {
  return (
    <div className={`msg ${user}`}>
        {children}
    </div>
  )
}

export default Message