import React, { Component } from 'react';

class ChatBar extends Component {
  render() {
    return (
      <footer id="chatbar">
        <textarea cols="20" rows="2"></textarea>
        <button><i className="fab fa-telegram-plane"></i></button>
      </footer>
    );
  }
}

export default ChatBar;