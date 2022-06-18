import React from 'react';
import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api/tauri'

function App() {
  function executeCommands() {
    invoke('simple_command')
  }

  function executeCommandWithMessage() {
    const textarea1 = document.getElementById("textarea1",)! as HTMLTextAreaElement;
    const input1 = (document.getElementById("input1") as HTMLInputElement).value;

    invoke('command_with_message', { message: input1 }).then(message => {
      console.log('command_with_messge', message);
      textarea1.value += "From command_with_messge: " + message + '\r\n';
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <p>hello</p>
        <button onClick={executeCommands}>Click to execute command</button>
        <div>
          <input id="input1"></input>
          <button onClick={executeCommandWithMessage}>Click to execute command</button>
          <textarea id="textarea1"></textarea>
        </div>
      </header>
    </div>
  );
}

export default App;
