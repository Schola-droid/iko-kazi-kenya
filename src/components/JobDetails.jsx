import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobDetails = () => {
  const { state, dispatch } = useContext(InitialContext);
  const job = state.jobselect;
  console.log(job);
  return (
    <div>
      {/* JOB DETAILS */}
      {job && (
        <div className="job-details">
          <h3>{job.job_title}</h3>
          <p>{job.date_posted}</p>
          <p>{job.job_location}</p>
          <div className="detailsBox">
            <p>{job.job_type}</p>
            <p>{job.job_salary}</p>
          </div>
          <h4>Job Description</h4>
          <p>{job.job_description}</p>
          <h4>Requirements</h4>
          <ul>
            {job.job_requirements.map((req) => {
              return <li>{req}</li>;
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
