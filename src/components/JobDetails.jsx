import React, { useContext } from "react";
import { InitialContext } from "./JobContext";

const JobDetails = () => {
  const { state, dispatch } = useContext(InitialContext);

  function handleDisablerClick() {
    dispatch({
      type: "DISABLE",
    });
  }
  function handleApply() {
    dispatch({
      type: "DISABLE",
    });

    window.open(
      "https://mail.google.com/mail/?view=cm&to=kennedymuinde@gmail.com",
      "_blank"
    );

    alert("Job application successful");
  }
  const job = state.jobselect;
  return (
    <div>
      {job && (
        <div className="job-details">
          <p className="disabler" onClick={handleDisablerClick}>
            x
          </p>
          <img src={job.image} alt="image" className="jobselect-image" />
          <h3 id="job_title">{job.job_title}</h3>
          <p id="job_date">Posted on: {job.date_posted}</p>
          <p>{job.job_location}</p>
          <div className="detailsBox">
            <p>{job.job_location}</p>
            <p>{job.job_type}</p>
            <p>{job.job_salary}</p>
          </div>
          <h4 id="description-heading">Job Description</h4>
          <p id="description">{job.job_description}</p>
          <h4 id="req-heading">Requirements</h4>
          <ul>
            {job.job_requirements.map((req) => {
              return (
                <li key={req} className="requirements">
                  {req}
                </li>
              );
            })}
          </ul>
          <button id="apply" onClick={handleApply}>
            APPLY NOW
          </button>
        </div>
      )}
    </div>
  );
};

export default JobDetails;
