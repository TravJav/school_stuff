import React from 'react'; // to import react
import {Link} from 'react-router'; 




class Home extends React.Component{

render(){


    return(

   <div className="container">
 <img src="https://media.licdn.com/mpr/mpr/AAEAAQAAAAAAAAgGAAAAJGNmNDkxNmYwLTY2NjYtNGU0Ni04MjJmLTRmYjMwZGM2YTAzOA.jpg" alt="coding bootcamp pic" />
   <div>
   <nav> 
   <ul>
   <Link to="/home"> HOME </Link>  
   </ul>
   <ul>
   <Link to="/about"> About </Link>  
  </ul>
   <ul>
  <Link to="/todo"> Todo Application </Link>  
  </ul>
  </nav>


<h2> Band I was telling you about last week in class..a little on the harder side but he makes awesome songs </h2>
<iframe width="560" height="315" src="https://www.youtube.com/embed/q5zUxN-Kvy0?ecver=1" frameborder="0" allowfullscreen></iframe>



</div>
</div>



    )
}



}


export default Home;
