import {Button} from '@material-ui/core';
import React from 'react'
import styled from 'styled-components';

function ChatInput({channelName, channelId}) {

    const sendMessage = e => {
        e.preventDefault(); // to prevent the refresh


    }
    return (
        <ChatInputContainer>
            <form>
                <input placeholder={`Message: #Room`}/>
                <Button hidden type='submit' onClick={sendMessage}>
                    SEND
                </Button>
            </form>
        </ChatInputContainer>
    );
}

export default ChatInput;

const ChatInputContainer = styled.div`
  border-radius: 20px;

  > form {
    position: relative;
    display: flex;
    justify-content: center;
  }

  > form > input {
    position: fixed;
    bottom: 30px;
    width: 80%;
    border: 1px solid gray;
    border-radius: 3px;
    padding: 20px;
    outline: none;
  }

  > form > button {
    display: none !important;
  }
`;