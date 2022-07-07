import React, { useState } from "react";
import "./Search.css";
import SearchContext from "../../context/searchContext";

export const Search = (props) => {

  const [search, setSearch] = useState('');

  return (
    <>
    <SearchContext.Provider value={search}>
        {props.children}
    </SearchContext.Provider>
    <div className="container">
      <h3>Search properties to Rent</h3>
      <div className="search-item">
        <label className="search-label" htmlFor="">Search</label>
        <input type="text" className="search-input" onChange={(e) => { setSearch(e.target.value)}} placeholder="Type here" />
      </div>
    </div>
    </>
  );
};
