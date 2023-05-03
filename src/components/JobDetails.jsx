import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobDetails = () => {
  const { state, dispatch } = useContext(InitialContext);
  const job = state.jobselect;
  console.log(job);
  return (
    <div>
      {/* JOB DETAILS */}
      {job &&
      <div className="job-details">
        <h3>{job.job_title}</h3>
        <p>{job.date_posted}</p>
        <p>{job.job_description}</p>
      </div>}
    </div>
  );
};

export default JobDetails;
