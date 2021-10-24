import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import AppChat from "./AppChat";


import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./StateProvider";
import reducer, { initialState } from "./reducer";
import { Provider } from "@lyket/react";

import {ChatEngine} from 'react-chat-engine';
//import './indexChat.css';

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>
      <App />
    </StateProvider>,
  </React.StrictMode>,

  document.getElementById("root")
);
/*
ReactDOM.render(
  <Provider apiKey="[pt_6c27880429c488a0a8e769cecec8c9]">
    <App />
  </Provider>,
  document.getElementById("root")
);*/
//<Provider apiKey="[pt_6c27880429c488a0a8e769cecec8c9]"></Provider>
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
