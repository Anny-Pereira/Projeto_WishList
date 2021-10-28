import React from 'react';
import ReactDOM from 'react-dom';
import {Route, BrowserRouter, Switch, Redirect} from 'react-router-dom';

import './index.css';

import App from './pages/home/App';
import reportWebVitals from './reportWebVitals';
import WishList from './pages/wishList/WishList.jsx'
import NotFound from './pages/notFound/NotFound'


const routing = (
    <BrowserRouter>
      <div>
        <Switch>
          <Route exact path= "/" component={App} /> {/*Home*/}
          <Route path= "/wishList" component={WishList} /> {/*Wish List*/}
          <Route path= "/notFound" component={NotFound} /> {/*404 - Not Found*/}
          <Redirect to= "/notFound" /> {/*Redirecionando para página 404 - Not Found, caso não encontre nenhuma rota*/}
        </Switch>
      </div>
    </BrowserRouter>
)

ReactDOM.render(
  routing,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
