import React, { Component } from 'react';

import './App.css';
const axios = require('axios');

// run in terminal npm start

class App extends React.Component {


constructor(){
	super();



    this.state = { // Set state of the values in react

    todos: [],
    value: 'all' ,
    //original_object: [] ,
    id: 5,
    selection: ""
    }
            



 
 // bind buttons

    this.contents_of_input = this.contents_of_input.bind(this);
    this.done = this.done.bind(this);
  


  // this.set_item_state();
    this.display_original_objects(); // call function directly below


	} // CLOSE CONSTRUCTOR




componentWillMount(){
console.log("COMONENT WILL MOUNT IS SUMMONED");
let todoState = {};

axios.get('http://localhost:8080/todos/api')
  .then(result => {
      todoState = result.data;
    console.log(result.data);
    this.setState(todoState);
  })
  .catch(function (error) {
    console.log(error);
  });

}




 componentDidUpdate() {
        axios.post('http://localhost:8080/todos/api', this.state)
        .then(result => {
            console.log(result.data);
            console.log("success on the post");
        })
        .catch(error => {
            console.log(error);
            console.log("error on the post");
        })
    }
    


display_original_objects(){ 
/*
    let original_object = this.state.todos[0];
        var i;
    for(i = 0; i < 4; i++){
        this.state.original_object.push(<li className="list-group-item" key={i}>{this.state.todos[i].text}</li> );
        
*/




}


// Button Function to actually get the content of what the user has put in the box
contents_of_input(e){
  e.preventDefault();

    var val = {text: this.refs.formControl.value, done:this.state.done, id: this.state.id }; // retrieve input
    const current_array = Array.from(this.state.todos); // copy of current array
    current_array.push(val); // pushing value of current array
    console.log("THIS IS MINE"+this.state.done);


   
    this.setState({ // set state to new copy USING ( CURRENT STATE : NEW STATE )
  
    todos: current_array,
    id: this.state.id+1 ,
    done: this.state.done

});

console.log("The state has been updated! This will be saved");
localStorage.setItem('todolist', JSON.stringify(current_array))


}



/*
Function To Clear the selected boxes
*/
clear(e, index){
e.preventDefault;
    console.log("clear function running");
    let array_checked_objects = this.state.todos;

    if(array_checked_objects[index].done === array_checked_objects[index].done ){

    this.setState({ todos : array_checked_objects[index].pop()});

}
// get selected

 }


// Function checks if the checkbox had been clicked or not
done(index){
    let new_array = this.state.todos;
    new_array[index].done = !new_array[index].done;
    this.setState ({todos: new_array});
}

	render(){
		return(


<div class="container">

    <h1 class="text-center">todos</h1>

    <form>
        <div class="input-group">
            <span class="input-group-btn">
                <button onClick={this.contents_of_input}class="btn btn-primary" type="submit">Add</button>
            </span>
            <input class="todo_note"  ref="formControl" placeholder="add a todo" />
        </div>
    </form>
    


            <ul class="list-group">

            { this.state.todos.map((state_todo, index)=>{
                return <li className="list-group-item" key={index}>
                            <input type="checkbox" checked={state_todo.done} onChange={()=>this.done(index)} />
                            <label className={state_todo.done ? "done" : "" }>{state_todo.text}</label>
                        </li>
                    }
                )
            }
             
            </ul>

    




    <select>
        <option value="all">all</option>
        <option  class="active_value"value="active">active</option>
        <option class="complete_value"value="complete">complete</option>
    </select>
    
    <button  onClick={this.clear}class="pull-right btn btn-default">Clear Complete</button>








<script src="https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.8.34/browser.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/react/15.3.0/react-dom.min.js"></script>
<script type="text/babel" src="Todo.js"></script>


<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css" />



</div>


 



		)
	} // end render

}

export default App;