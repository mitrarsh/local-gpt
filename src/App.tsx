import "./App.css";
import Chatbox from "./components/ui/Chatbox";
import Input from "./components/ui/Input";
import Message from "./components/ui/Message";
import MessagesBox from "./components/ui/MessagesBox";

const App = () => {
  return (
    <div>
      <Chatbox>
        <MessagesBox>
          <Message user="chatgptMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>
          <Message user="humanMsg">hi</Message>

        </MessagesBox>
        <Input />
      </Chatbox>
    </div>
  );
};

export default App;
