
/*
Description

Using our knowledge of React, we're going to create an app that will help us get things done!
 The first step in learning many new frameworks is to create a simple to-do app. Remember to use 
 your skills in HTML and CSS to make the app beautiful and responsive!


 Instructions

First download the starter code.

Create a li element for each todo object
For each todo object, render a UI that displays the object's text value with a checkbox input tag next to it
Add the class `done` to any todo that has been completed
Create a UI that takes in text input from the user
Submitting that form must create a new todo object and the list of todos must update to reflect that change
For this assignment to be complete, a user must be able to:

Add new tasks
Toggle tasks between complete and incomplete


----------------------------------------------------------------------------------------------------------------------------------
***************************************************************************************************************************************
----------------------------------------------------------------------------------------------------------------------------------
Diving Deeper

Create a "Clear Complete" button that when clicked, will remove any todos that are marked done from the list of todos
Disable this button if there are no complete todos
Create a select input UI with the values "All", "Active" and "Complete"
Switching between those values must filter out the todos to be displayed accordingly
#####
####
###
##
#
 NOTE TO DAN THE MAN: I'm understanding react what it does, how it manipulates the DOM and keeps a virtual copy etc.
Do I feel like I can make huge application in React?, No; I do feel like I am grasping and getting use to the wonky
syntax and understanding that the big thing in react is the state of objects. I will continue to further my understanding of react
and buy a hard-copy!
#
##
###
#####
######
*/

class App extends React.Component {

constructor(){
	super();


this.state = { // count entries and task if no/yes complete

    entries:0 ,
    complete_task: false

}

	this.state = { // set the current state of the project 

	todos:[

		{text: 'learn angular', done: false, id: 1},
		{text: 'write the content for the next module', done: false, id: 2},
		{text: 'buy cheese', done: true, id: 3},
		{text: 'buy milk', done: true, id: 4}

	     ],
		 original_object: [],
         id: 5

		}



     // bind them!
    //this.add_item = this.add_item.bind(this);
	this.clear = this.clear.bind(this);
    this.contents_of_input = this.contents_of_input.bind(this);
    this.done = this.done.bind(this);
    //this.toggle = this.toggle.bind(this);



    this.display_original_objects(); // call function directly below


	} // CLOSE CONSTRUCTOR


display_original_objects(){ 

    let original_object = this.state.todos[0];
     var i;
    for(i = 0; i < 4; i++){
      this.state.original_object.push(<li className="list-group-item" key={i}>{this.state.todos[i].text}</li> );
}



/*
===========================================================================================================================

: STATE OF OBJECT(s) TODO

=======================================================================================================================================
*/

this.setState({

todos: this.state.todos


});


 

}




// Button Function to actually get the content of what the user has put in the box
contents_of_input(e){
  e.preventDefault();
      var val = {text: this.refs.formControl.value, done:false, id: this.state.id }; // retrieve input

     const current_array = Array.from(this.state.todos); // copy of current array

     current_array.push(val); // pushing value of current array

    console.log(current_array);

this.setState({ // set state to new copy USING ( CURRENT STATE : NEW STATE )

    todos: current_array,
    id: this.state.id+1

});

}





/*   NOTE TO SELF: THIS IS HOW YOU GET THE VALUE OF THE CURRENT BOX UPDATED EVERY NEW KEYSTOKE

add_item(inputChar){

let key = inputChar.target.value; // get the actual value

const get_text = this.state.todos[0].text;

let total = get_text + key;

console.log("This is appended"+ total); // debugg

}
*/



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
            <input   ref="formControl" placeholder="add a todo" />
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




</div>


		)
	} // end render

}

ReactDOM.render(<App />, document.getElementById('app'));