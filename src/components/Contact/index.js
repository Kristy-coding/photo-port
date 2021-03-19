import React, { useState } from 'react'
import {validateEmail} from '../../utils/helpers';


function ContactForm(){

    // need to use state for error handling to change the state of the error 
    //Note that the initial state of the errorMessage is an empty string. Now that we've declared the errorMessage Hook, let's assign the error message for the email input based on the isValid value
    const [errorMessage, setErrorMessage] = useState('');


    //Now let's add the Hook that'll manage the form data, with the following expression at the top of the ContactForm function body:

    //A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings, to get the following expression:
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    //As the preceding expression shows, formState will have three key-value pairs to represent the three user inputs: name, email, and message.
    //This is a good case where we can destructure the formState object into its named properties, name, email, and message. Add the following expression near the top of the ContactForm function:
    const {name, email, message } = formState;
    //Now we can use these constants to assign the initial state, which are empty strings, to the defaultValue. This assignment will effectively clear the input fields in the user interface.

    //Now let's define the handleChange function. This function will sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name
    function handleChange(e) {

        // validation 
        //We'll add validation in the handleChange function, allowing validation of the form data before syncing the form data with the state, formState
        //This conditional statement says if the <input> is email, then validate the value of that input field with the validateEmail function and assign its return to isValid. Let's log this value to verify that the logic is performing properly.
        if(e.target.name === 'email'){
            // validateEmail is going to return true or false and then assign that return value to isValid
            const isValid = validateEmail(e.target.value);
            console.log(isValid);
            //Now that we've declared the errorMessage Hook, let's assign the error message for the email input based on the isValid value. Place the following conditional statement nested inside the preceding conditional statement under the comment, // isValid conditional statement, as seen in the following code:
            // isValid condittional statement
            if(!isValid) {
                setErrorMessage('Your email is invalid.');   
            } else {
                setErrorMessage('');
            }
        } else {

            // if length does not exist in message fied or name field
            //In this following statement, we're checking the message and name form element values. The nested conditional statement checks whether the values of these elements are blank. If the input values are blank, an error message is assigned to errorMessage; if not, errorMessage is set to empty string, meaning that there's no error.
            if(!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        // this statement is saying take in all the key value pairs from the formState operator and change the name property (formState.name) to equal e.taget.value?? whatever the use types in

        //At the bottom of the handleChange function, wrap the setter function, setFormState, in a conditional so that the state only updates if the form data has passed the quality tests, as shown in the following statement:
        //The following conditional statement only allows the state to update with the user input if there is no error message, which is the correct logic.
        if (!errorMessage){
        setFormState({...formState, [e.target.name]: e.target.value})
        }
        //Starting with ECMAScript 2015, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets [], that will be computed and used as the property name
        //In the preceding function, we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair

        //console.log('errorMessage', errorMessage)
    }

    // to make sure the state property is syncing with the UI
    //console.log(formState)

    //Now let's create the function that'll handle the submission of the form data
    //add the onSubmit attribute (event listener) to the <form> element, and assign the function handleSubmit
    function handleSubmit(e) {
        //This function should look straightforward. We'll prevent the default action of the form Submit button and then log the formState object on the Submit button click, as shown in the following image:
        e.preventDefault();
        console.log(formState)
        // if we had a backend, at this point the submit data would be sent to the database
    }

    //Due to keywords reserved in JavaScript, we need to replace the for attribute in the <label> element to htmlFor, just as class had to be changed to className previously
    return (
        <section>
            <h1>Contact me</h1>
            <form id= "contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor= "name">Name:</label>
                    {/*create a function that will sync the state of the component formState with the user inputs. First, add the attribute onChange (which is an event listener) to the <input> element for name, and assign a function to this attribute, aptly called handleChange
                    
                    we can also use the onBlur attribute instead of onChange. The onBlur attribute will fire the event once the user has changed focus from the input field, thus allowing the user to finish their entry before validating their input.
                    */}
                    <input type="text" defaultValue= {name} onBlur={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email"> Email address:</label>
                    <input type ="email" defaultValue= {email} name="email" onBlur={handleChange} />
                </div>
                <div>
                    <label htmlFor ="message">Message:</label>
                    <textarea name = "message" defaultValue={message} onBlur={handleChange}rows="5" />
                </div>
                {/*Let's modify the user interface to include an error message below the <textarea> but above the submit button. We'll only want this message to appear if the errorMessage contains an error message. We can condition this render in JSX with the following conditional statement:*/}
                {errorMessage && (
                    <div>
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                {/*The preceding statement can be evaluated to be the same as the following expression:
                    if(errorMessage) {
                        <div>
                            <p className="error-text">{errorMessage}</p>
                        </div>
                    }
                    
                    These two conditional statements are the same. If errorMessage has a truthy value, the <div> block will render. If errorMessage doesn't have an error message, the following <div> block doesn't render. The && operator—known as the AND operator—is being used here as a short circuit. If the first value resolves to true, the second expression is evaluated
                */}
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


export default ContactForm;