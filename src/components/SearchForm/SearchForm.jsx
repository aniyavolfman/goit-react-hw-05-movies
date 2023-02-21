import React, { useRef } from 'react'

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
