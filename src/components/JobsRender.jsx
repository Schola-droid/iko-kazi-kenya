import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobsRender = () => {
  const { state, dispatch } = useContext(InitialContext);

  const data = state.jobs;
  function jobselect(job) {
    // console.log(job);
    dispatch({type: 'JOB-SELECT', payload: job})
  }
  return (
    <>
      {data?.map((job) => {
        return (
          <li key={job.job_id} className="jobs">
            <h3>{job.job_title}</h3>
            <p className="truncate">{job.job_description}</p>
            <div className="sub-details">
              <p>{job.job_type}</p>
              <p>{job.job_location}</p>
            </div>
            <button className="read-more-btn" onClick={() => jobselect(job)}>
              Read more
            </button>
          </li>
        );
      })}
    </>
  );
};

export default JobsRender;