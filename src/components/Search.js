import React from "react";

function Search({userSearchInput, searchInput}) {
  
  
  return (
    <div className="ui search">
      <div className="ui icon input">
        <input className="prompt" value={searchInput} onChange={userSearchInput}/>
        <i className="search icon" />
      </div>
    </div>
  );
}

export default Search;
