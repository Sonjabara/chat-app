import React from 'react';
import { MessageI } from './types';
import './index.scss';

const formatTimeStamp = (timestamp: string) => {
  const time = Date.parse(timestamp);
  const date = new Date(time);
  return date.toLocaleDateString('default', { day: '2-digit', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' });
}

interface MessageProps extends MessageI {
  currentUser: string
}

const Message: React.FC<MessageProps> = ({ created_at, text, username, currentUser }) => (
  <div className={`${currentUser === username && 'current'} message`}>
    <span className="username">{username === currentUser ? 'You' : username}</span>
    <span className="text">{text}</span>
    <span className="timestamp">{formatTimeStamp(created_at)}</span>
  </div>
)

export default Message;