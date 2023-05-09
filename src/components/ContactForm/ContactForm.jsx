import { useState } from 'react';
import { nanoid } from 'nanoid';
import { Button, Input, Form, Label } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { contactsAdd } from 'redux/operations';
import { selectIContacts } from 'redux/selectors';

const ContactForm = () => {
  const contacts = useSelector(selectIContacts);

  const dispatch = useDispatch();

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const inputChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'userName':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        throw new Error('Something went wrong, try again');
    }
  };

  const onFormSubmit = e => {
    e.preventDefault();
    const nameId = nanoid();

    const userContacts = {
      id: nameId,
      name,
      number,
    };

    clearData();

    handleSubmit(userContacts);
  };

  const clearData = () => {
    setName('');
    setNumber('');
  };

  const handleSubmit = obj => {
    const contactsName = contacts.map(contact => contact.name);
    if (contactsName.includes(obj.name)) {
      alert(`${obj.name} is already in contacts.`);
      return;
    }

    dispatch(contactsAdd(obj));
  };

  return (
    <>
      <Form action="" onSubmit={onFormSubmit}>
        <Label>
          Name
          <Input
            type="text"
            name="userName"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={inputChange}
          />
        </Label>

        <Label>
          Number
          <Input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={inputChange}
          />
        </Label>

        <Button type="submit">Add contact</Button>
      </Form>
    </>
  );
};

export default ContactForm;
