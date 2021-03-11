import React from 'react';

const Search = (props) => {
  const handleInputChange = (event) => {
    props.onQueryChange(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        placeholder="Search for meal"
        value={props.query}
        onChange={handleInputChange}

        // onChange={(event) => {
        //   props.onQueryChange(event.target.value);
        // }}
      />
    </div>
  );
};

export default Search;
