import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobsRender = () => {
  const { state, dispatch } = useContext(InitialContext);

  const data = state.jobs;
  function jobselect(job) {
    dispatch({ type: "JOB-SELECT", payload: job });
  }
  return (
    <>
      <div>
        <h3>JOBS AVAILABLE</h3>
        
        <ul id="jobslist-container">
          {data?.map((job) => {
            return (
              <li
                key={job.job_id}
                className="jobslist"
                onClick={() => jobselect(job)}
              >
                <h3>{job.job_title}</h3>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default JobsRender;
