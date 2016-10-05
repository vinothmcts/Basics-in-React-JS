import React from 'react';
import ReactDOM from 'react-dom';


class Components extends React.Component {
	render() {
	      return (
	         <div>
	            <Header/>
	            <Content/>
	         </div>
	      );
	}
}
class Header extends React.Component {
   render() {
      return (
         <div>
            <h1 className="heading">ReactJS - Components</h1>
         </div>
      );
   }
}

class Content extends React.Component {
   render() {
      return (
         <div>
            
            <p>Our first component in example below is App. This component is owner of Header and Content. We are creating Header and Content separately and just adding it inside JSX tree in our App component. Only App component needs to be exported.</p>
         </div>
      );
   }
}

export default Components;