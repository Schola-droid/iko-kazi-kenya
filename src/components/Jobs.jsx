import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import JobDetails from "./JobDetails";
import { InitialContext } from "./JobContext";
import JobsRender from "./JobsRender";
import JobsList from "./JobsList";
import Footer from "./Footer";

const Jobs = () => {
  const { state, dispatch } = useContext(InitialContext);

  let id;
  let jobsview;
  if (state.jobselect) {
    id = "mainComponents";
    jobsview = <JobsList />;
  } else {
    id = "mainComponentsB";
    jobsview = <JobsRender />;
  }

  return (
    <div id="mainwraper">
      <SearchBar />
      <div id={id}>
        <CategoryFilter />
        {jobsview}
        <JobDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
