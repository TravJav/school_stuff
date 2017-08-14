/* List of image urls ------------------------------
'http://imgur.com/9itd49u.png''http://imgur.com/n19BXfZ.png''http://imgur.com/VBwQmzA.png''http://imgur.com/nawDxVv.png'
-------------------------------------------------- */

class App extends React.Component {


constructor(){

	super();


/*
this.state = {
firstPage : "http://imgur.com/9itd49u.png",
secondPage : "http://imgur.com/n19BXfZ.png",
thirdPage : "http://imgur.com/VBwQmzA.png",
fourthPage : "http://imgur.com/nawDxVv.png"

};

*/

this.state = {

	page_number: 0
}


const pages = ['http://imgur.com/9itd49u.png',    // Hold page URL's will not work without wifi
				'http://imgur.com/n19BXfZ.png',   // could hold in static file to function w/o wifi
				'http://imgur.com/VBwQmzA.png',
				'http://imgur.com/nawDxVv.png'];



 this.next_page = this.next_page.bind(this); // binds the function to a certain area
 this.previous_page = this.previous_page.bind(this);


} //end constr.







render(){


		return (
	
        	<div>
				<h1>Calvin Carousel</h1>
			    <div>

			    	<button onClick={this.previous_page} disabled={this.state.page_number === 0} > Previous</button>
			      	<span>1 of 4</span>
			      	<button onClick={this.next_page} disabled={this.state.page_number === pages.length-1}>Next</button>

			    </div> 					
				<div>
             	<img src={pages[this.state.page_number]} />
				</div>
			</div>			
		)



	} // end render



	previous_page(){
    this.setState({page_number:this.set.page_number -1});



	}

	next_page(){
    this.setState({page_number:this.set.page_number +1});




	}

};


	




ReactDOM.render(<App />, document.getElementById('app'));