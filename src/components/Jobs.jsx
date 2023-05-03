import React, { useContext } from "react";
import SearchBar from "./SearchBar";
import CategoryFilter from "./CategoryFilter";
import JobDetails from "./JobDetails";
import { InitialContext } from "./JobContext";
import JobsRender from "./JobsRender";
import Footer from "./Footer";

const Jobs = () => {
  const { state, dispatch } = useContext(InitialContext);
  //   console.log(state.jobselect);
  const id = state.jobselect ? "mainComponents" : "mainComponentsB";
  return (
    <div>
      <SearchBar />
      <div id={id}>
        <CategoryFilter />
        <JobsRender />
        <JobDetails />
      </div>
      <Footer />
    </div>
  );
};

export default Jobs;
