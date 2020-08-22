import React from "react";
import ReactDOM from "react-dom";
import {Container, Row, Col} from "shards-react";

import "bootstrap/dist/css/bootstrap.min.css";
import "shards-ui/dist/css/shards.min.css";
import "./index.css";

 import  Chat from 'chat/Chat';

const App = () => ( 
   <Container>
       <p style={{display: 'flex', flexDirection: "row", justifyContent: 'center', fontSize: 15}}>👨‍💼 App de Chat em tempo real feito Com GraphQL, React, Apollo e Websocket.</p>
       <h1 style={{display: 'flex', flexDirection: "row", justifyContent: 'center'}}>Chat!</h1>
       <Chat />
       <p>&copy; Criado por Jonas Henrique && Jack Herrington</p>
       <p>link do video <span><a href="https://www.youtube.com/watch?v=E3NHd-PkLrQ">link</a></span></p>
   </Container>
);

ReactDOM.render(<App />, document.getElementById("app"));
