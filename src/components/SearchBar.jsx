import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const SearchBar = () => {
  const { state, dispatch } = useContext(InitialContext);
  function handleSearch(e) {
    const name = e.target.name;
    const value = e.target.value;

    dispatch({
      type: "SET-FILTERS",
      payload: {
        ...state.filters,
        [name]: value,
      },
    });
  }
  return (
    <div>
      <input
        type="text"
        id="search"
        name="search"
        value={state.filters.search}
        placeholder="Search for jobs"
        onChange={handleSearch}
      />
    {/*   <div id="search-icon">
        <i className="fa-solid fa-magnifying-glass"></i>
      </div> */}
    </div>
  );
};

export default SearchBar;
