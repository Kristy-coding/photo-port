import React from 'react';

function Modal ({onClose,currentPhoto}) {
    const {name, category, description, index} =currentPhoto
    return(
        // JSX

        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className="modalTitle">{name}</h3>
                <img alt="currnet category" src={require(`../../assets/large/${category}/${index}.jpg`).default} />
                <p>
                    {description}
                </p>
                <button onClick={onClose} type= "button">
                    Close this modal
                </button>

            </div>
        </div>
        
    );
}


//The list of photos is rendered in the PhotoList component, so this is the logical place for the modal to open—and for us to access the individual photo data. We'll establish the Photolist as the parent component and the Modal as the child component, because the Modal is located in PhotoList. PhotoList also plays a major role in activating the modal, but we we'll discuss that more later


export default Modal;