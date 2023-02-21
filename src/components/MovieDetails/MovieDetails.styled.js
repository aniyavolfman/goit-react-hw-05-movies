import styled from 'styled-components';

export const StyledDiv = styled.div`
  display: flex;
  border-bottom: 1px solid tomato;
  padding: 20px;
`;

export const StyledIMGMain = styled.img`
  height: 400px;
`;

export const StyledDivRight = styled.div`
  padding: 0 10px;
`;

export const StyledP = styled.p`
  padding: 0 10px;
  color: tomato;
`;

export const StyledUl = styled.ul`
  & a {
    text-decoration: none;
  }

  & a:hover,
  & a:focus {
    color: #6c5ce7;
  }

  & a.active {
    text-decoration-line: underline;
    text-decoration-style: wavy;
    color: #d63031;
  }
`;
