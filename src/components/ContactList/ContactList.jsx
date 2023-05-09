import { List, Item } from './ContactList.styled';
import ContactItem from 'components/ContactItem/ContactItem';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { LoaderIco } from 'components/Loader/Loader';
import { contactsFetch } from 'redux/operations';

const ContactList = () => {
  const { filter } = useSelector(state => state);
  const { contacts, isLoading } = useSelector(state => state.contacts);

  const handleFilter = () => {
    return (
      contacts &&
      contacts.filter(contact => {
        return contact.name.toLowerCase().includes(filter.toLowerCase());
      })
    );
  };

  const dispatch = useDispatch();

  useEffect(
    () => () => {
      dispatch(contactsFetch());
    },
    [dispatch]
  );

  return (
    <>
      {isLoading && <LoaderIco />}
      <List>
        {contacts &&
          handleFilter().map(({ id, name, phone }) => (
            <Item key={id}>
              <ContactItem
                contactName={name}
                contactNumber={phone}
                itemId={id}
              />
            </Item>
          ))}
      </List>
    </>
  );
};

export default ContactList;
