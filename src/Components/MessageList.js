import React from 'react';
import Message from './Message'


let MessageList = (props) =>{
  return (
    props.messages.map(message => {
    return <Message message={message} messageRead={props.messageRead} />
    })
  )
}

export default MessageList;