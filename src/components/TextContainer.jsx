import { Container } from '@material-ui/core';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const TextContainer = () => {
  const messages = useSelector((state) => state.data.messages);
  const messageRef = useRef(null);
  useEffect(() => {
    messageRef.current.scrollTo(0, 99999);
  }, [messages]);
  return (
    <Container>
      <div className='message-box' ref={messageRef}>
        {messages.map((mess) => (
          <div key={mess.id} className='message-line' style={{ textAlign: `${mess.position}` }}>{mess.message}</div>
        ))}
      </div>
    </Container>
  );
};

export default TextContainer;
