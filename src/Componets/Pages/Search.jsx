import React, { useState } from 'react';
import SearchBar from '../components/Search/SearchBar';
import SearchResults from '../components/Search/SearchResults';

function Search() {
  const [results, setResults] = useState([]);

  const handleSearch = (query) => {
    // Perform search logic here
    setResults([
      // Sample search results
      { id: 1, username: 'user1', avatar: 'avatar1.png' },
      { id: 2, username: 'user2', avatar: 'avatar2.png' },
    ]);
  };

  return (
    <div className="container mx-auto p-4">
      <SearchBar onSearch={handleSearch} />
      <SearchResults results={results} />
    </div>
  );
}

export default Search;
