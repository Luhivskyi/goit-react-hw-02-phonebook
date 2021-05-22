import React from 'react';
import PropTypes from 'prop-types';
import ContactListItem from './ContactListItem'


const ContactsList = ({ contacts, onRemove }) => {
    
    // if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactListItem{...contact} onRemove={onRemove }/>)}
        </ul>
    )
}


ContactsList.propTypes = {
    contacts: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};


export default ContactsList;