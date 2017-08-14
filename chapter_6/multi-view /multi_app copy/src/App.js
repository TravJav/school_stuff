import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Home'; // to import the file
import About from './About';
import Todo from './Todo';
import {Link} from 'react-router';



class App extends Component{

constructor(){
super();

}
render(){
  const childStuff = this.props.children;
return (



<div>

<h1> To---Do Application! </h1>
{childStuff}
  </div>


)};



}








export default App;
