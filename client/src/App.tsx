import React, { Component } from 'react';
import './App.scss';
import WebSocketWrapper from './WebSocketWrapper';
import MessageList from './components/messageList';
import { MessageI } from './components/message/types';
import SendMessage from './components/sendMessage';

interface AppState {
  messages: MessageI[],
  username: null | string
}

class App extends Component<{}, AppState> {
  private socket: any;
  private inputRef: any;

  constructor(props: any) {
    super(props);
    this.state = {
      messages: [],
      username: null

    }
    this.socket = new WebSocketWrapper();
  }

  componentDidMount(): void {
    this.socket.connect(this.updateMessages);
    this.inputRef = React.createRef<HTMLInputElement>();
  }

  componentWillUnmount(): void {
    this.socket.disconnect();
  }

  updateMessages = (messages: any) => {
    this.setState(prevState => ({
      messages: [...prevState.messages, ...messages]
    }));
  }

  handleOnClick = (text: String) => {
    this.socket.sendMessage(this.state.username, text);
  }

  handleSignIn = (e:  React.MouseEvent) => {
    e.preventDefault();
    this.setState({ username: this.inputRef.current.value });
  }

  renderUserNotLoggedIn = () => (
    <div className="empty-state">
      <h3>Chat Application</h3>
      <form>
        <input ref={this.inputRef} type="text" id="username" placeholder="Username" />
        <button onClick={this.handleSignIn}>Sign in</button>
      </form>
    </div>
  )

  renderUserLoggedIn = () => (
    <div className="chat-container">
      <MessageList messages={this.state.messages} username={this.state.username!} />
      <SendMessage handleSendMessage={this.handleOnClick} />
    </div>
  )

  render() {
    return (
      <div className="App">
        {this.state.username && this.renderUserLoggedIn()}
        {!this.state.username && this.renderUserNotLoggedIn()}
      </div>
    );
  }
}

export default App;
