
// //This will be a child component of the Gallery component that will now handle the photo rendering logic.

// import React, { useState } from 'react';

// function PhotoList(props) {


//     //Since we are using useState to set the default values for the array of photos, remember to modify the import statement at the top of the PhotoList component to also import useState with the following statement
//     const [photos] = useState([
//         {
//           name: 'Grocery aisle',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Grocery booth',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Building exterior',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Restaurant table',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Cafe interior',
//           category: 'commercial',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Cat green eyes',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Green parrot',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Yellow macaw',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Pug smile',
//           category: 'portraits',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Pancakes',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Burrito',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Scallop pasta',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Burger',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Fruit bowl',
//           category: 'food',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Green river',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Docks',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Panoramic village by sea',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Domestic landscape',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//         {
//           name: 'Park bench',
//           category: 'landscape',
//           description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
//         },
//       ]);

//     //We need to make it so that only photos with the selected category appear.
//     //All we needed to add was a filterMethod and our photos are now displayed properly
//     //We're going through each photo in the photos array, trying to find every photo that matches the category that was selected by the user. If a photo matches the condition, it is returned in an array and assigned to currentPhotos. Then we can map the currentPhotos array to render each photo that matches the category selected by the user
//     const currentPhotos = photos.filter ((photo) => photo.category === props.category);

//     return(
//        <div>
//            <div className = "flex-row">
//                {/*The map function takes two arguments: an iterable and a function , and applies the function to each element of the iterable*/}
//                {currentPhotos.map((image, i)=> (
//                    <img 
//                         //src was assigned the require expression. Though this isn't a common practice, it certainly has its use cases! We were also able to take advantage of the incremental naming of the images by using i

//                         //we are getting that category variable to work by passing down the currentCategory.name as a prop into the Photolist component from Gallery component and then add props as a parameter in function Photolist(props)
//                         src = {require(`../../assets/small/${props.category}/${i}.jpg`)}

//                         //The alt attribute is used for accessibility user-assistance devices, such as screen readers, so the image's name was assigned
//                         alt = {image.name}
//                         className = "img-thumbnail mx-1"
//                         //The key attribute was also assigned the image's name. This attribute value must be a unique string. The absence of this unique key value will cause an error message
//                         //Keys help React identify which items have changed, are added, or are removed. Keys should be given to the elements inside the array to give the elements a stable identity
//                         //The best way to pick a key is to use a string that uniquely identifies a list item among its siblings. Most often you would use IDs from your data as keys
//                         //A good rule of thumb is that elements inside the map() call need keys
//                         key = {image.name}
//                     />
//                ))}
//            </div>
//        </div>
//     );
// }

// export default PhotoList;

import React, { useState } from 'react';

const PhotoList = ({ category}) => {

  const [photos] = useState([
    {
      name: 'Grocery aisle',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Grocery booth',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Building exterior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Restaurant table',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cafe interior',
      category: 'commercial',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Cat green eyes',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green parrot',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Yellow macaw',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pug smile',
      category: 'portraits',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Pancakes',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burrito',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Scallop pasta',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Burger',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Fruit bowl',
      category: 'food',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Green river',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Docks',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Panoramic village by sea',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Domestic landscape',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
    {
      name: 'Park bench',
      category: 'landscape',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie',
    },
  ]);

  const currentPhotos = photos.filter((photo) => photo.category === category);

  return (
    <div>
      <div className="flex-row">
        {currentPhotos.map((image, i) => (

            //when dealing with ES6 imports (export default MyComponent), the exported module is of the format {"default" : MyComponent}. The import statement correctly handles this assignment for you, however, you have to do the require("./mycomponent").default conversion yourself. The HMR interface code cannot use import as it doesn't work inline. If you want to avoid that, use module.exports instead of export default
          <img
            src={require(`../../assets/small/${category}/${i}.jpg`).default}
            alt={image.name}
            className="img-thumbnail mx-1"
            key={image.name}
          />
        ))}
      </div>
    </div>
  );
};

export default PhotoList;


