import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WebSocketWrapper from './WebSocketWrapper';

interface AppProps {
  username: null | string
}

class App extends Component {
  private socket: any;

  constructor(props: AppProps) {
    super(props);
    this.state = {
      username: null
    }
    this.socket = new WebSocketWrapper();
  }

  componentDidMount(): void {
    this.socket.connect();
  }

  componentWillUnmount(): void {
    this.socket.disconnect();
  }

  handleOnClick = () => {
    this.socket.sendMessage('', '');
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <button onClick={this.handleOnClick}>Click me</button>
        </header>
      </div>
    );
  }
}

export default App;
