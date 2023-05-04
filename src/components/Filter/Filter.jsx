import { addFilter } from 'redux/filterSlice';
import { Label, Input } from './Filter.styled';

import { useDispatch, useSelector } from 'react-redux';
import { movieFetch } from 'redux/reducerFetch';

const Filter = () => {
  const { filter } = useSelector(state => state);
  const dispatch = useDispatch();
  const handleInputChange = ({ target: { value } }) => {
    dispatch(addFilter(value));
  };

  return (
    <>
      <Label>
        Find contacts by name
        <Input
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          value={filter}
          onChange={handleInputChange}
        />
      </Label>
      <button type="submit" onClick={() => dispatch(movieFetch())}>
        Thunk
      </button>
    </>
  );
};

export default Filter;
