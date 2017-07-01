import React from 'react'
import PropTypes from 'prop-types'

//Stateless functional components
function ListContacts (props) {
  return (
    <ol>
    {
      props.contacts.map((contact) => (
        <li key={contact.id} className="contact-list-item">
        <div className="contact-avatar" style={{
          backgroundImage: `url(${contact.avatarURL})`
        }}>
        </div>
        <div className="contact-details">
          <p>{contact.name}</p>
          <p>{contact.email}</p>
        </div>
        <button onClick={() => props.onDeleteContact(contact)} className="contact-remove">
          Remove
        </button>
        </li>
        ))}
    </ol>

  );
}

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  onDeleteContact: PropTypes.func.isRequired

}

// class ListContacts extends Component {
//   render() {
//     const contacts = this.props.contacts;
//     return (
//       <ol>
//       {
//         contacts.map((contact) => (
//           <li key={contact.id} className="contact-list-item">
//           <div className="contact-avatar" style={{
//             backgroundImage: `url(${contact.avatarURL})`
//           }}>
//           </div>
//           <div className="contact-details">
//             <p>{contact.name}</p>
//             <p>{contact.email}</p>
//           </div>
//           <button className="contact-remove">
//             Remove
//           </button>
//           </li>
//           ))}
//       </ol>
//     )
//   }
// }

export default ListContacts