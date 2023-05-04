import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobsRender = () => {
  const { state, dispatch } = useContext(InitialContext);

  const data = state.filteredJobs;
  function jobselect(job) {
    dispatch({ type: "JOB-SELECT", payload: job });
  }
  return (
    <>
      <div>
        <ul id="jobs-container">
          {data?.map((job) => {
            return (
              <li key={job.job_id} className="jobs">
                <img src={job.image} alt="image" className="job-image" />
                <h3>{job.job_title}</h3>
                <p className="truncate">{job.job_description}</p>
                <div className="sub-details">
                  <p>{job.job_type}</p>
                  <p>{job.job_location}</p>
                </div>
                <button
                  className="read-more-btn"
                  onClick={() => jobselect(job)}
                >
                  Read more
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default JobsRender;
