import React from 'react'; // to import react
import {Link} from 'react-router';




class About extends React.Component{

render(){


    return(
   <div>
<img src="https://betanews.com/wp-content/uploads/2016/04/penguingun-600x600.jpg" />
  <p>  he standard Lorem Ipsum passage, used since the 1500s

"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."  </p>

<nav> 


  <ul>
<Link to="/home"> HOME </Link> 
</ul>
<Link to="/about"> About </Link>  
 <ul>
<Link to="/todo"> TODO APP </Link> 
</ul>
</nav>
    




 </div>



    )
}



}


export default About;
