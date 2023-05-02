import React from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import JobsList from "./JobsList";
import JobDetails from "./JobDetails";

const Jobs = () => {
  return (
    <div>
      <SearchBar />
      <div id="mainComponents">
        <CategoryFilter />
        <JobsList />
        <JobDetails />
      </div>
    </div>
  );
};

export default Jobs;
