import webstomp from 'webstomp-client';

class WebSocketWrapper {
  private ws: any | WebSocket = null;
  private client: any = null;

  connect(callback:any) {
    this.ws = new WebSocket('ws://localhost:8090/chat');
    this.client = webstomp.over(this.ws);

    this.client.connect({}, () => {
      this.client.subscribe('/messages/get', (messages: any) => {
        callback(JSON.parse(messages.body));
      })

      this.client.subscribe('/messages/created', (message: any) => {
        callback([JSON.parse(message.body)])
      })
    });
  }

  disconnect() {
    if (this.client) {
      this.client.disconnect();
    }
  }

  sendMessage(username: string, text: string) {
    const message = { 'username': username, 'text': text };
    this.client.send("/messages/post", JSON.stringify(message));
  }
}

export default WebSocketWrapper;