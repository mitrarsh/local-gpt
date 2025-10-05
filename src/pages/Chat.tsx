
import { useParams } from 'react-router-dom';
import Chatbox from '../components/ui/Chatbox';

const Chat = () => {
    const { id } = useParams<{ id: string }>();
  return (
    <div className=' flex-1'>
      <Chatbox/>
    </div>
  )
}

export default Chat