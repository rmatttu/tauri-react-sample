import React from 'react';
import logo from './logo.svg';
import './App.css';
import { invoke } from '@tauri-apps/api/tauri'

import { appDir, join } from '@tauri-apps/api/path';
import { convertFileSrc } from '@tauri-apps/api/tauri';
import { open } from '@tauri-apps/api/dialog'
import { readBinaryFile, BaseDirectory } from '@tauri-apps/api/fs';


function App() {

  function _arrayBufferToBase64( buffer:Uint8Array ) {
      var binary = '';
      var bytes = new Uint8Array( buffer );
      var len = bytes.byteLength;
      for (var i = 0; i < len; i++) {
          binary += String.fromCharCode( bytes[ i ] );
      }
      return window.btoa( binary );
  }

  function executeCommands() {
    invoke('simple_command')
  }

  function testLocalResource() {
    const assetUrl = convertFileSrc("/Users/hawk/Desktop/DSC_4395.NEF.jpg");
    const image = document.getElementById("image-view",)! as HTMLImageElement;
    const source = document.createElement('source');

    open().then(files => {
      console.log(files)
      if(typeof files == 'string'){
        readBinaryFile(files).then(a => {
          console.log(a.byteLength)
          const data = _arrayBufferToBase64(a)
          image.src="data:image/jpg;base64," + data
        })
      }
    })
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
        <div>
          <button onClick={testLocalResource}>Click to execute command</button>
          <img id="image-view" src="" alt="" width="400" height="400"></img>
        </div>
      </header>
    </div>
  );
}

export default App;
