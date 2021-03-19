import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helpers';
import PhotoList from '../PhotoList';


//Replace props with currentCategory in the Gallery function, then destructure the name and description properties from currentCategory

// ?????? how does Gallery component get access to Nav props?? currentCategory wasn't passed to Gallery in the App.js????

function Gallery ({ currentCategory}) {
    //destructure the name and description properties from currentCategory
    const { name, description } = currentCategory

    return (
        <section>
            <h1 data-testid= "h1tag"> { capitalizeFirstLetter(name)}</h1>
            <p>{description}</p>
            {/*photoList is a child of Gallery*/}
            <PhotoList category = {name}/>
        </section>
    );

}

export default Gallery;



