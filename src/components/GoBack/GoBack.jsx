import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { StyledDiv } from './GoBack.styled';

export function GoBack() {
  const location = useLocation();

  return (
    <Link
      style={{
        textDecoration: 'none',
      }}
      to={location.state?.from ?? '/'}
    >
      <StyledDiv>
        <AiOutlineArrowLeft />
        Go Back
      </StyledDiv>
    </Link>
  );
}
