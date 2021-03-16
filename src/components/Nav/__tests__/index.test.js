//** the point of testing ...Visually, there isn't much of a difference from what we accomplished in the first lesson, but our app is now tested. Now we can have peace of mind that we can change things and know instantly whether or not the change broke any component

//In index.test.js, add the following code to import the packages we'll need to test the Nav component:

import React from 'react';
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Nav from '..';

//Next we'll configure the testing environment by adding the cleanup utility and the describe function, just like we did for the About component

// 1. Add the cleanup Statement:
afterEach(cleanup);

// 2. add the describe funciton to declare what this test suite will be testing:
describe('Nav component', ()=>{

    //baseline test
    //In the function body of the callback function, we will use the same baseline test for the Nav component that we did for the About component. Add the following code
    it('renders', ()=>{
        render(<Nav />);
    });

    //snapshot test
    it('matches snapshot', ()=> {
        const { asFragment } = render(<Nav />);
        // assert value comparison
        // we will use the expect function and the matcher, .toMatchSnapshot(), to write our snapshot assertion
        expect(asFragment()).toMatchSnapshot();
    });
})

//To test if the camera emoji is visible, we'll create a new describe function, as shown in the following code block:

describe('emoji si visible', ()=> {
    it('inserts emoji into the h2', ()=> {
        
        // Arrange
        //The query to return the element containing the emoji will look like the following statement
        const {getByLabelText} = render(<Nav/>);

        // Assert
        //We can also test the emoji's accessibility features by querying the element by its aria-label. In the next evaluation, or assert, part of our test, we can use the getByLabelText method and query by the aria-label value, which can be seen in the preceding markup as camera
        //Here, we have used a custom matcher to compare the expected value to the one received by our query
        expect(getByLabelText('camera')).toHaveTextContent('📸');
    })
})

//Nice work! For the final test of the Nav, we'll check to see if some of our links are visible. This way, we can ensure that the users can navigate properly to different parts of the application

//As before, we will create another describe section that will declare the test's purpose, as shown in the following statement:

////As the preceding statements indicate, we'll verify that the text content is being inserted into the <a> tags (i.e., that the links are visible to users). To make sure that the correct elements are tested, we'll use the getByTestId method

//Similar to an id attribute, we will add a data-testid to the <a> element. Also similar to the getElementById DOM method, we will use the getByTestId method to return the DOM element.

//Note that the values of the data-testid attributes are link for the homepage and about for the About page.

//We can add this data-testid attribute to any element for querying purposes, but—whenever possible—it's best to query elements by their visible characteristics or accessibility attributes in order to mimic the user's experience

// *** note that when you update the element that the snapshot will fail the test, after the test fails just press u from the watch list and it will update the snapshot

describe('links are visible', ()=> {
    it ('inserts text into the links', ()=> {

        //Arrange
        const { getByTestId } = render(<Nav />);
        

        //Assert
        //Once the getByTestId method is available, use it to assert the valid outcomes using the matcher, toHaveTextContent. To do that, add the following code:
        expect(getByTestId('link')).toHaveTextContent('Oh Snap!');
        expect(getByTestId('about')).toHaveTextContent('About me');


    });
})

