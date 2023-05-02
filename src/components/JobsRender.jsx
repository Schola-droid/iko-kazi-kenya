import React from "react";

const JobsRender = ({ data }) => {
  /*  data.map((job) => console.log(job));
  console.log(data); */

  return (
    <>
      {data?.map((job) => {
        console.log(job)
        return (
          <li key={job.job_id} className="jobs">
            <h3>{job.job_title}</h3>
            <p>{job.job_description}</p>
            <div className="sub-details">
                <p>{job.job_type}</p>
                <p>{job.job_location}</p>
                <p>{job.job_salary}</p>
            </div>
            <button className="read-more-btn">Read more</button>
          </li>
        );
      })}
    </>
  );
};

export default JobsRender;
