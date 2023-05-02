import React, { useEffect, useState } from "react";
import JobsRender from "./JobsRender";

const JobsList = () => {
  const [data, setData] = useState();

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div >
      JOBS LIST
      <ul id="jobs-container">
        <JobsRender data={data} />
      </ul>
    </div>
  );
};

export default JobsList;
