import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { StyledHeader, StyledNav } from './Layout.styled';

export function Layout() {
  return (
    <>
      <StyledHeader>
        <StyledNav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </StyledNav>
      </StyledHeader>
      <main>
        <Outlet />
      </main>
    </>
  );
}
