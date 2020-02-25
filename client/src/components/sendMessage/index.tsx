import React from 'react';
import './index.scss';

interface SendMessageProp {
  handleSendMessage: Function
}

const SendMessage: React.FC<SendMessageProp> = ({ handleSendMessage }) => {
  let inputRef = React.createRef<HTMLInputElement>();

  function onClick(e: React.MouseEvent) {
    e.preventDefault();
    const currentRef = inputRef.current;
    if (currentRef && currentRef.value) {
      handleSendMessage(currentRef.value)
      currentRef.value = '';
    }
  }

  return (
    <div className="send-message-container">
      <form>
        <input ref={inputRef} type="text" name="message" />
        <button onClick={onClick}>Send</button>
      </form>
    </div>
  )
}

export default SendMessage;