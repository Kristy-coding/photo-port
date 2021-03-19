//This App.js file is the center of the application. Think of App.js as the root component, or the wrapper component that houses all of the other components. To effect any change on the application, we need to either modify this file or add components inside it

//React components follow the PascalCase naming convention. Knowing this will help you quickly identify whether a function is a component or just a regular function.

//You need to import React in every component file. You can also import any images or CSS you want to use at the top

//Inside the function, it seems that HTML is all that's returned. But actually, it's not HTML; it's a language called JSX that can represent HTML in JavaScript. Normally you can't add HTML to JavaScript, at least without making it a string. But it won't break the code in this case, because you're using webpack and React. Think of functions that return JSX as functions that use document.createElement(JSX). In fact, the way React uses JSX behind the scenes is very similar to document.createElement().


import React, { useState } from 'react';
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {

  //Go to the App.js file, which is the root component that's responsible for how the React components currently render. We need to condition what renders based on which menu item the user selects from the navigation bar

  const [contactSelected, setContactSelected] = useState(false);
  // In the preceding expression, we set the initial value of contactSelected to false. This is to prevent the contact form from showing when a user initially navigates to the homepage
  //The Gallery will display instead, which is the first thing Lyza's customers will want to see.


  const [categories] = useState([
    {
      name: 'commercial',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'portraits', description: 'Portraits of people in my life' },
    { name: 'food', description: 'Delicious delicacies' },
    { name: 'landscape', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected= {setContactSelected}
      ></Nav>
      <main>
        <div>
        {/*With contactSelected, we can establish a conditional statement to render the Gallery and About components when this value is false and the ContactForm component when true. Let's replace the Gallery, About, and ContactForm components in the <main> element with the following expression:
        
        The following statement declares that if the contactSelected is false, the Gallery and About components should be rendered, but if contactedSelected is true, the ContactForm component should be rendered.

          The shorthand condition is called a ternary operator, identified with the ? and : symbols. The ternary operator is a popular pattern in React to enable conditional rendering, similar to how we used the && operator as a short circuit. With the ternary, though, we supply the false condition to render as well

          The conditional (ternary) operator is the only JavaScript operator that takes three operands: a condition followed by a question mark (?), then an expression to execute if the condition is truthy followed by a colon (:), and finally the expression to execute if the condition is falsy. 


          Notice the <> and </> that wrap the Gallery and About components. Can you imagine what these are and what they might be for? They are called React fragments—a shorthand abbreviation for <React.Fragment></React.Fragment>.

        They're a useful tool in React to allow multiple elements to be grouped together. Although in JSX you can only return a single parent element, this rule can be satisfied by wrapping the children components in a React fragment. This also allows you to wrap elements without creating extra DOM nodes, like wrapping with a <div> would do.

        */}
        {!contactSelected ? (
          <>
            <Gallery currentCategory={currentCategory}></Gallery>
            <About></About>
          </>
        ) : (
            <ContactForm></ContactForm>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
