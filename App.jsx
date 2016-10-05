import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
 

class App extends React.Component {
   render() {
      return (
        <div>
		    <div className="navigation">
			    <ul className="navigation-content">
			      	<li><Link to="home">Home</Link></li>
			      	<li><Link to="ReactjsJSX">ReactJS-JSX</Link></li>
			      	<li><Link to="components">ReactJS-Components</Link></li>
			       	<li><Link to="about">About</Link></li>
			       	<li><Link to="contact">Contact</Link></li>

			    </ul>
		   
			</div>	
			<div className="example-content">	    
			    {this.props.children}
			</div>
			<div className="clear"></div>
		</div>

      )
   }
}

export default App;





