
type ChatboxProps={
    children: React.ReactNode
}


const Chatbox = ({children}:ChatboxProps) => {
  return (
    <div className="chatbox">
      {children}
    </div>
  )
}

export default Chatbox