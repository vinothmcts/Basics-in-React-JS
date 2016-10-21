# Basics-in-React-JS-Example

# Why React?
  React is a JavaScript library for creating user interfaces by Facebook and Instagram. Many people choose to think of React as the V in MVC.

  We built React to solve one problem: building large applications with data that changes over time.

# Prerequisites

   If you want to work with ReactJS, you need to have solid knowledge of JavaScript, HTML5 and CSS. Even though ReactJS doesn't use HTML, the JSX is similar so your HTML knowledge will be very helpful. We will explain this more in one of the next chapters. We will also use EcmaScript 2015 syntax so any knowledge in this area can be helpful.
  
# ReactJS - Environment Setup
  
# Step 1 - Install Global Packages
  
      C:\Users\username>npm install -g babel
      C:\Users\username>npm install -g babel-cli
      
# Step 2 - Create Root Folder
  
      C:\Users\username\Desktop>mkdir reactApp
      C:\Users\username\Desktop\reactApp>npm init
 
# Step 3 - Add Dependencies and plugins
 
    We will use webpack bundler in these tutorials so let's install webpack and webpack-dev-server.

      C:\Users\username>npm install webpack --save
      C:\Users\username>npm install webpack-dev-server --save
      
    Since we want to use React, we need to install it first. The --save command will add these packages to package.json file.

      C:\Users\username\Desktop\reactApp>npm install react --save
      C:\Users\username\Desktop\reactApp>npm install react-dom --save
      
    We already mentioned that we will need some babel plugins so let's install it too.

      C:\Users\username\Desktop\reactApp>npm install babel-core
      C:\Users\username\Desktop\reactApp>npm install babel-loader
      C:\Users\username\Desktop\reactApp>npm install babel-preset-react
      C:\Users\username\Desktop\reactApp>npm install babel-preset-es2015
 
# Step 4 - Create files
 
    Let's create several files that we need. You can add it manually or you can use command prompt.

      C:\Users\username\Desktop\reactApp>touch index.html
      C:\Users\username\Desktop\reactApp>touch App.jsx
      C:\Users\username\Desktop\reactApp>touch main.js
      C:\Users\username\Desktop\reactApp>touch webpack.config.js
      
# Step 5 - Set Compiler, Server and Loaders
 
   Open webpack-config.js file and add the code below. We are setting webpack entry point to be main.js. Output path is the place where bundled app will be served. We are also setting development server to 8080 port. You can choose any port you want. And lastly, we are setting babel loaders to search for js files and use es2015 and react presets that we installed before.
    
		 var config = {
		   entry: './main.js',

		   output: {
		      path:'./',
		      filename: 'index.js',
		   },

		   devServer: {
		      inline: true,
		      port: 8080
		   },

		   module: {
		      loaders: [
			 {
			    test: /\.jsx?$/,
			    exclude: /node_modules/,
			    loader: 'babel',

			    query: {
			       presets: ['es2015', 'react']
			    }
			 }
		       ]
		     }
		  }

		 module.exports = config;
  
#  NOTE:
   Open the package.json and delete "test" "echo \"Error: no test specified\" && exit 1" inside "scripts" object. We are deleting this line since we will not do any testing in this tutorials. Let's add the start command instead.
 
     "start": "webpack-dev-server --hot"
     
# Step 6 - index.html
  This is just regular HTML. We are setting div id = "app" as a root element for our app and adding index.js script which is our bundled app file.

	  <!DOCTYPE html>
	  <html lang = "en">

	     <head>
		<meta charset = "UTF-8">
		<title>React App</title>
	     </head>

	     <body>
		<div id = "app"></div>
		<script src = "index.js"></script>
	     </body>

	  </html>
  
# Step 7 - App.jsx and main.js
  This is the first react component. We will explain React components in depth in one of our later tutorials. This component will render Hello World!!!.

  # App.jsx

      import React from 'react';
      class App extends React.Component {
         render() {
            return (
               <div>
                  Hello World!!!
               </div>
            );
         }
      }

      export default App;
  
  We need to import this component and render it to our root App element so we can see it in browser.
  # main.js
  
      import React from 'react';
      import ReactDOM from 'react-dom';
      import App from './App.jsx';

      ReactDOM.render(<App />, document.getElementById('app'));
      
# NOTE :
  Whenever you want to use something, you need to import it first. If you want to make component usable in other parts of the app, you need to export it after creation and import it in the file where you want to use it.

# Finally  - Running the Server
 
 The setup is finished and we can start the server by running:

  C:\Users\username\Desktop\reactApp>npm start
  It will show you the port we need to open in browser, in our case http://localhost:7777/. After we open it in your browser.
  
# REFERENCE :

    https://www.youtube.com/watch?v=XxVg_s8xAms
    https://www.tutorialspoint.com/reactjs/reactjs_jsx.htm
    https://camjackson.net/post/9-things-every-reactjs-beginner-should-know
    https://facebook.github.io/react/docs/tutorial.html
    https://www.sitepoint.com/getting-started-react-jsx/
