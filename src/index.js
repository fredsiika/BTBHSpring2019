import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//MDBBootstrap
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-boost';
import { InMemoryCache } from 'apollo-cache-inmemory'
import { HttpLink } from 'apollo-link-http'
import { BrowserRouter as Router} from 'react-router-dom';


const httpLink = new HttpLink({ uri: 'https://api.graph.cool/simple/v1/cju60van4684y0181qumekeib' })

const client = new ApolloClient({
  link: httpLink,
  cache: new InMemoryCache()
})


ReactDOM.render(<Router><ApolloProvider client={client} >
                <App />
                </ApolloProvider>
                </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
