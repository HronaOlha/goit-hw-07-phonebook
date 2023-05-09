import PropTypes from 'prop-types';
import { Button } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import { contactsDelete } from 'redux/operations';

const ContactItem = ({ contactName, contactNumber, itemId }) => {
  const dispatch = useDispatch();

  return (
    <>
      <p>
        &#x2022; {contactName} : {contactNumber}
      </p>
      <Button type="button" onClick={() => dispatch(contactsDelete(itemId))}>
        Delete
      </Button>
    </>
  );
};

export default ContactItem;

ContactItem.propTypes = {
  contactName: PropTypes.string.isRequired,
  contactNumber: PropTypes.string.isRequired,
  itemId: PropTypes.string.isRequired,
};
