
import PropTypes from 'prop-types';

const ContactListItem = ({ id, name, phone, onRemove }) => {
    
    return <li>
{name}: {phone} <button onClick={() =>onRemove(id)}>delete</button>

    </li>
}

const ContactsList = ({ contacts, onRemove }) => {
    
    if (contacts.length === 0) return null
    return (
        <ul>
            {contacts.map(contact => <ContactListItem{...contact} onRemove={onRemove }/>)}
        </ul>
    )
}

ContactsList.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onRemove: PropTypes.func,
};

export default ContactsList;