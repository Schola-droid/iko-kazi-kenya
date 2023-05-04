import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const CategoryFilter = ({ filters, handleFilterChange }) => {
  const { state, dispatch } = useContext(InitialContext);

  let allFilters = state.filters;

  function handleFilterChange(e) {
    const name = e.target.name;
    const value = e.target.value;
    dispatch({
      type: "SET-FILTERS",
      payload: { ...state.filters, [name]: value },
    });
  }
  const salo = allFilters.salary > 0 ? allFilters.salary : null;

  function handleSalaryChange(e, newValue) {}
  return (
    <>
      <div>
        <h2>CATEGORY FILTER</h2>
        <div>
          <h3>Jobs</h3>
          <div>
            <label htmlFor="location">Location: </label>
            <br />
            <input
              type="text"
              id="location"
              name="location"
              value={allFilters.location}
              onChange={handleFilterChange}
            />
          </div>
          <div>
            <label htmlFor="salaryRange">Salary Range: </label>
            <input
              type="range"
              id="salaryRange"
              name="salary"
              min="0"
              max="1000000"
              value={allFilters.salary}
              onChange={handleFilterChange}
            /><br />
            <output htmlFor="salaryRange">${salo}</output>
          </div>
          <div>
            <label htmlFor="jobType">Job Type: </label>
            <br />
            <select
              id="jobType"
              name="jobType"
              value={allFilters.jobType}
              onChange={handleFilterChange}
            >
              <option value="">All</option>
              <option value="Full-time">Full-time</option>
              <option value="Part-time">Part-time</option>
              <option value="Contract">Contract</option>
            </select>
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryFilter;
