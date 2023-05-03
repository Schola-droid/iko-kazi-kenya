import React, { useState } from "react";
import JobsRender from "./JobsRender";

const JobsList = () => {
  return (
    <div>
      JOBS LIST
      <ul id="jobs-container">
        <JobsRender />
      </ul>
    </div>
  );
};

export default JobsList;
