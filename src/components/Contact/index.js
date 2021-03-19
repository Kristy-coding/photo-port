import React, { useState } from 'react'



function ContactForm(){
    //Now let's add the Hook that'll manage the form data, with the following expression at the top of the ContactForm function body:

    //A feature of this Hook is the ability to initialize the values of the state. In this case, we want to clear the input fields on the component loading. Thus, we'll set the initial state to empty strings, to get the following expression:
    const [formState, setFormState] = useState({ name: '', email: '', message: ''});
    //As the preceding expression shows, formState will have three key-value pairs to represent the three user inputs: name, email, and message.
    //This is a good case where we can destructure the formState object into its named properties, name, email, and message. Add the following expression near the top of the ContactForm function:
    const {name, email, message } = formState;
    //Now we can use these constants to assign the initial state, which are empty strings, to the defaultValue. This assignment will effectively clear the input fields in the user interface.

    //Now let's define the handleChange function. This function will sync the internal state of the component formState with the user input from the DOM. The onChange event listener will ensure that the handleChange function fires whenever a keystroke is typed into the input field for name
    function handleChange(e) {

        // this statement is saying take in all the key value pairs from the formState operator and change the name property (formState.name) to equal e.taget.value?? whatever the use types in
        setFormState({...formState, [e.target.name]: e.target.value})
        //Starting with ECMAScript 2015, the object initializer syntax also supports computed property names. That allows you to put an expression in brackets [], that will be computed and used as the property name
        //In the preceding function, we're using the setFormState function to update the formState value for the name property. We assign the value taken from the input field in the UI with e.target.value and assign this value to the property formState.name. We use the spread operator, ...formState, so we can retain the other key-value pairs in this object. Without the spread operator, the formState object would be overwritten to only contain the name: value key pair
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
                    {/*create a function that will sync the state of the component formState with the user inputs. First, add the attribute onChange (which is an event listener) to the <input> element for name, and assign a function to this attribute, aptly called handleChange*/}
                    <input type="text" defaultValue= {name} onChange={handleChange} name="name" />
                </div>
                <div>
                    <label htmlFor="email"> Email address:</label>
                    <input type ="email" defaultValue= {email} name="email" onChange={handleChange} />
                </div>
                <div>
                    <label htmlFor ="message">Message:</label>
                    <textarea name = "message" defaultValue={message} onChange={handleChange}rows="5" />
                </div>
                <button type="submit">Submit</button>
            </form>
        </section>
    )
}


export default ContactForm;