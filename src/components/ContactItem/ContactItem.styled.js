import styled from '@emotion/styled';

export const Button = styled.button`
  padding: 8px;
  background-color: white;
  outline: none;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 4px;
  //   box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  cursor: pointer;

  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover {
    background-color: rgb(231, 230, 230);
  }
`;
