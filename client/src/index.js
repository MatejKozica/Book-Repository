import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import AppNavbar from './components/Navbar/AppNavbar';
import Admin from './pages/Admin';
import { BooksContextProducer } from './context/booksContext';

ReactDOM.render(  
  <React.StrictMode>
    <Router>
      <AppNavbar/>
      <Switch>
        <Route path="/admin">
          <BooksContextProducer>
            <Admin />
          </BooksContextProducer>
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

