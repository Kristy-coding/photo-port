import React from 'react'
import {render, cleanup} from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ContactForm from '..';

//Once we have the necessary functions accessible for testing, use cleanup to release memory allocation between tests

afterEach(cleanup);

//Next create the baseline test to check that the ContactForm component is rendering properly. Then create a snapshot test.

describe('Gallery is rendering', ()=> {
    it('renders', ()=> {
        render(<ContactForm></ContactForm>);
    });


    //Then create a snapshot test.
    
    it('matches snapshot', ()=>{
        const { asFragment } = render(<ContactForm></ContactForm>)
        expect(asFragment()).toMatchSnapshot()
    })

    //In the next test, use the data-testid attribute for the <h1> tag in the ContactForm component to match the text content to be "Contact me"

    it('renders', ()=> {
        const {getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('h1tag')).toHaveTextContent('Contact me')
    })

    //The last test should also use the data-testid attribute to locate the <button>, to match the text content "Submit"

    it('render', ()=> {
        const {getByTestId} = render(<ContactForm></ContactForm>)
        expect(getByTestId('submitBtn')).toHaveTextContent('Submit')
    })


})