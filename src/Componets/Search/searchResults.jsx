import React from 'react';

const SearchResults = ({ results }) => {
  return (
    <div className="mt-4">
      {results.map((result) => (
        <div key={result.id} className="p-4 border-b">
          {result.name}
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
