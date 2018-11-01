import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Toolbar from './Components/Toolbar'
import MessageList from './Components/MessageList'
import Message from './Components/Message'

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      messages: [1, 2, 3]
    }
  }

  async componentDidMount(){
   let response = await fetch('http://localhost:8082/api/messages')
    let myJson = await response.json()
      this.setState({
        messages: myJson
      })
    }

  render() {
    return (
      <div className="App">
      <Toolbar />
      <MessageList messages={this.state.messages} />
      </div>
    );
  }
}

export default App;
