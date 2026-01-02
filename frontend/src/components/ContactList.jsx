const ContactList = ({ contacts }) => {
  return (
    <div>
      <h3>Submitted Contacts</h3>
      <ul>
        {contacts.map((c) => (
          <li key={c._id}>
            <b>{c.name}</b> | {c.email} | {c.phone}
            <p>{c.message}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
