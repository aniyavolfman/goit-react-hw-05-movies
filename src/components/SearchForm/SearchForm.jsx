import React, { useRef } from 'react';
import PropTypes from 'prop-types';

export function SearchForm({ onSubmit, searchQuery }) {
  const searhRef = useRef();

  const handleSubmitForm = event => {
    event.preventDefault();

    onSubmit(searhRef.current.value);
  };

  return (
    <form onSubmit={handleSubmitForm}>
      <input ref={searhRef} type="text" defaultValue={searchQuery} required />
      <button>Search</button>
    </form>
  );
}

SearchForm.propTypes = {
  searchQuery: PropTypes.string,
  onSubmit: PropTypes.func,
};