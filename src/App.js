//This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it

//React components follow the PascalCase naming convention. Knowing this will help you quickly identify whether a function is a component or just a regular function.

//You need to import React in every component file. You can also import any images or CSS you want to use at the top

//Inside the function, it seems that HTML is all that's returned. But actually, it's not HTML; it's a language called JSX that can represent HTML in JavaScript. Normally you can't add HTML to JavaScript, at least without making it a string. But it won't break the code in this case, because you're using webpack and React. Think of functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX behind the scenes is very similar to document.createElement().

import React from 'react';
// this import will grab the index.js from the About folder
import About from './components/About';
import Nav from './components/Nav';

function App() {
  return (
    <div> 
      <Nav></Nav>
      <main>
        <About></About>
      </main>
    </div>
  );
}

export default App;
