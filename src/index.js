import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import reportWebVitals from './reportWebVitals';
import { 
  ApolloProvider, 
  ApolloClient, 
  InMemoryCache,
} from "@apollo/client";
import {BrowserRouter} from 'react-router-dom';


const client = new ApolloClient({
  uri: process.env.REACT_APP_GKEY,
  cache: new InMemoryCache()
});

ReactDOM.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>  
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>,
  document.getElementById('lnzame')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
