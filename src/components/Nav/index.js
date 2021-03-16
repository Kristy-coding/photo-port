// import React, { useState } from 'react';
// import { capitalizeFirstLetter } from "../../utils/helpers";


// function Nav() {

//     const [currentCategory, setCurrentCategory] = useState(categories[0]);

//     //we start by initializing the category state as an array of a few objects. This could be just a regular array, rather than an array inside useState, but we chose to use the useState hook here so that we can have the option to change the categories at some point in the future
//     const [categories] = useState([
//         {
//           name: "commercial",
//           description:
//             "Photos of grocery stores, food trucks, and other commercial projects",
//         },
//         { name: "portraits", description: "Portraits of people in my life" },
//         { name: "food", description: "Delicious delicacies" },
//         {
//           name: "landscape",
//           description: "Fields, farmhouses, waterfalls, and the beauty of nature",
//         },
//       ]);

//       function categorySelected(name) {
//         console.log(`${name} clicked`)
//       }

//     return(
//         <header data-testid="header" className="flex-row px-1">
//             <h2>
//                 <a data-testid="link" href ="/">
//                     <span role="img" aria-label="camera">📸</span> Oh Snap!
//                 </a>
//             </h2>
//             <nav>
//                 <ul className="flex-row">
//                     <li className="mx-2">
//                         <a data-testid="about" href="#about">
//                             About me
//                         </a>
//                     </li>
//                     <li>
//                         <span>Contact</span>
//                     </li>
//                     {/* Whenever we map over anything in JSX, the outermost element must have a key attribute that's set to be something unique. This helps React keep track of items in the virtual DOM */}
//                     {/*In this case, we used category.name because we don't expect any categories to share the same name. Often the key will be an id */}
//                     {/*Note also the use of parentheses in the map callback to return JSX. When you map over an array in a JSX expression, you should return only a single JSX element—like how you can only return a single element from a React component */}
//                     {categories.map((category)=>(
                    
//                         <li className= {`mx-1 ${ currentCategory.name === category.name && 'navActive'}`} key={category.name}>
//                             {/*The preceding line of code means that currentCategory.name === category.name will get evaluated, and as long as it is true, then the second bit of the short circuit, navActive, will be returned.*/}
//                             {/*Now that we've provided a function name to onClick(), we need to define it somewhere above the return statemen */}
//                             {/*The onClick() attribute is expecting a callback function declaration. It's important that we wrap it in a function declaration rather than just calling categorySelected(category.name), which would cause the function to get called whenever the component renders as well */}
//                             <span onClick={ ()=> {setCurrentCategory(category)}}>
//                                 {capitalizeFirstLetter (category.name)}
//                             </span>
//                         </li>
//                     ))}
//                 </ul>
//             </nav>

//         </header>
//     );
// }




// export default Nav;


import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';


function Nav(props) {

    

  const {
    categories = [],
    setCurrentCategory,
    currentCategory,
  } = props;

  useEffect(() => {
    document.title = capitalizeFirstLetter(currentCategory.name);
}, [currentCategory]);

  return (
    <header className="flex-row px-1">
      <h2>
        <a data-testid="link" href="/">
          <span role="img" aria-label="camera"> 📸</span> Oh Snap!
        </a>
      </h2>
      <nav>
        <ul className="flex-row">
          <li className="mx-2">
            <a data-testid="about" href="#about">
              About me
            </a>
          </li>
          <li className="mx-2">
            <span>Contact</span>
          </li>
          {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Nav;










