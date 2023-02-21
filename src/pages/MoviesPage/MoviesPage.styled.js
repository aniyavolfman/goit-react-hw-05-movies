import styled from 'styled-components';

export const StyledUl = styled.ul`
  & a {
    text-decoration: none;
  }
  & a:hover,
  & a:focus {
    color: tomato;
  }
`;
