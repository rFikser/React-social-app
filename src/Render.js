import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {addPost, sendMessage, updateTextAreaLetters, updateTextAreaProfile} from './redux/state'

export let renderEntireTree = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App
                state={state}
                sendMessage={sendMessage}
                updateTextAreaLetters={updateTextAreaLetters}
                updateProfileTextArea={updateTextAreaProfile}
                addPost={addPost}
            />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
