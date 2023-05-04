import { List, Item } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useSelector } from 'react-redux';

const ContactList = () => {
  const { contacts, filter } = useSelector(state => state);

  const handleFilter = () => {
    return contacts.filter(contact => {
      return contact.name.toLowerCase().includes(filter.toLowerCase());
    });
  };

  return (
    <>
      <List>
        {handleFilter().map(({ id, name, number }) => (
          <Item key={id}>
            <ContactItem
              contactName={name}
              contactNumber={number}
              itemId={id}
            />
          </Item>
        ))}
      </List>
    </>
  );
};

export default ContactList;
