import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export function GoBack () {
  const location = useLocation();

  return (
    <Link
      to={location.state?.from || location}
    >
      Go Back
    </Link>
  );
};
