import React from 'react';
import PropTypes from 'prop-types';


const ContactListItem = ({ id, name, phone, onRemove }) => {
    
    return <li>
{name}: {phone} <button onClick={() =>onRemove(id)}>delete</button>

    </li>
}

ContactListItem.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  onRemove: PropTypes.func.isRequired,
};


export default ContactListItem;