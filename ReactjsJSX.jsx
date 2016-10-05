import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router'
 

class ReactjsJSX extends React.Component {
   render() {
   	 var myStyle = {
         fontSize: 15,
         color: '#14b27a'
      }
      return (
         <div>
            <h1 className="heading">ReactJS-JSX</h1>

            <h2 className="heading">Using JSX</h2>
            <p>JSX looks like regular HTML in most cases. We already used it in environment setup tutorial. Look at the code from App.jsx where we are returning div.</p>

            <h2 className="heading">Nested Elements</h2>
            <p>If you want to return more elements, you need to wrap it with one container element. Notice how we are using div as a wrapper for h1, h2 and p elements.</p>

            <h2 className="heading">Attributes</h2>
            <p data-myattribute = "somevalue">You can use your own custom attributes in addition to regular HTML properties and attributes. When you want to add custom attribute, you need to use data- prefix. In example below we added data-myattribute as an attribute of p element.</p>

            <h2 className="heading">JavaScript Expressions</h2>
            <p>JavaScript expressions can be used inside of JSX. You just need to wrap it with curly brackets {}.Example below will render {1+1}.</p>

            <h2 className="heading">JavaScript Expressions</h2>
            <p style = {myStyle}>React recommends using inline styles. When you want to set inline styles, you need to use camelCase syntax. React will also automatically append px after the number value on specific elements. You can see below how to add myStyle inline to h1 element.</p>

            <h2 className="heading">Comments</h2>
            <p>When writing comments you need to put curly brackets {} when you want to write comment within children section of a tag. It is good practice to always use {} when writing comments since you want to be consistent when writing the app.</p>
            {/* A JSX comment */}
            
            <h2 className="heading">Naming Convention</h2>
            <p>HTML tags are always using lowercase tag names, while React components starts with Uppercase</p>

         </div>
      );
   }
}

export default ReactjsJSX;