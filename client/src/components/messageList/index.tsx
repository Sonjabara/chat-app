import React from 'react';
import Message from '../message';
import { MessageI } from '../message/types';
import './index.scss';

interface MessageListProps {
  messages: MessageI[],
  username: string
}

const MessageList: React.FC<MessageListProps> = ({ messages, username }) => (
  <div className="message-list">
    {messages.map((message: MessageI) =>
      <div key={message.id}>
        <Message {...message} currentUser={username} />
      </div>
    )}
  </div>
)

export default MessageList;