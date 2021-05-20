import './App.css';
import React, { useState, useEffect } from 'react';
import { FormControl, Input } from '@material-ui/core';
import Message from './Message';
import Heading from './Heading';
import db from './firebase';
import firebase from 'firebase'
import FlipMove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';

function App() {

  // states - short term memory in react
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  // effects - functions which run on certain conditions
  useEffect(() => {
    setUsername(prompt('Please enter your name'));
  }, [])

  useEffect(() => {
    db.collection('messages')
    .orderBy('timestamp', 'desc')
    .onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => ({id: doc.id, message: doc.data()})));
    });
  }, [])

  const sendMessage = (event) => {
    // func for sending the message
    event.preventDefault();
    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setInput('');
  }

  return (
    <div>

      <Heading username={username} />

      <div className="App">
        <form className="app__form">
          <FormControl className="app__formControl">
            <Input className="app__input" placeholder="Enter a message" value={input} onChange={event => setInput(event.target.value)}/>
            <IconButton className="app__iconButton" disabled={!input} variant="contained" color="primary" type="submit" onClick={sendMessage}>
              <SendIcon />
            </IconButton>
          </FormControl>
        </form>

        <FlipMove>
          {
            messages.map(({id, message}) => (
              <Message key={id} username={username} message={message} />
            ))
          }
        </FlipMove>
      </div>
      
    </div>
  );
}

export default App;
