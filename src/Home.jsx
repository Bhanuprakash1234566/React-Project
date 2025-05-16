import React from 'react';

function Home({ searchTerm }) {
  return (
    <div className="page">
      <h2>Welcome to the Home Page</h2>
      <p>Search Term: {searchTerm}</p>
    </div>
  );
}

export default Home;
