//React components must always return a single parent JSX element. However, this element may have many children elements

import React from 'react';
import coverImage from "../../assets/cover/cover-image.jpg"

function About () {
    return (
        // and add the my-5 class to the <section> tag. To do so, we need to call the class attribute className, as follows, because class is already a keyword in JavaScript. Add the following code
        <section className="my-5">
            <h1 id= "about">Who am I?</h1>
            <img src={coverImage} className="my-2" style={{ width: "100%"}} alt="cover"/>
        </section>
    );
}

export default About;