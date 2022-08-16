import React from 'react'
import { Contact } from '../../models/client.class'
import ContactComponent from '../pure/contact'



const ContactListComponent = () => {

    const defaultContact = new Contact()

    return (

        <div>
            <div>
                <h1>Contacto</h1></div>
            <ContactComponent contact={defaultContact}></ContactComponent>
        </div>
    )
}

export default ContactListComponent
