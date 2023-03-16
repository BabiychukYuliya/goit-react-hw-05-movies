import { useState } from 'react';

export const Searchbar = ({ onSearch }) => {
  const [name, setName] = useState('');

  const handleNameCange = evn => {
    setName(evn.currentTarget.value.toLowerCase());
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (name.trim() === '') {
      alert('Input your request pleace');
      return;
    }

    onSearch(name);
    setName('');
  };

  return (
    <header className="Searchbar">
      <form onSubmit={handleSubmit} className="SearchForm">
        <input
          className="SearchForm-input"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search movies"
          onChange={handleNameCange}
          value={name}
        />
        <button type="submit" className="SearchForm-button">
          <span className="SearchForm-button-label">Search</span>
        </button>
      </form>
    </header>
  );
};
