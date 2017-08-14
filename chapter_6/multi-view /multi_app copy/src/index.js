import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import Home from './Home';
import About from './About';
import Todo from './Todo'
import {Router, Route, browserHistory} from 'react-router';


registerServiceWorker();

// same static process for setting up router

ReactDOM.render(<Router history={browserHistory}>
    



 <Route path='/static' component={App}> 
<Route path="/home" component={Home} />
<Route path="/" component={Home} />
 <Route path="/about" component={About} />
<Route path="/todo" component={Todo} />
 </Route>
</Router> , document.getElementById('root'));


/*
Router
top level component  that does all the work p-lace this in DOM render
*/