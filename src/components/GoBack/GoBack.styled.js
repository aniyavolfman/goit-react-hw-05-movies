import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  color: tomato;
  font-weight: bold;
  &:hover,
  & a:focus {
    color: #6c5ce7;
  }
`;