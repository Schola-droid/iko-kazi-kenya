import { createContext, useEffect, useReducer } from "react";

const initialStates = {
  jobs: null,
  filteredJobs: null,
  jobselect: null,
  filters: {
    location: "",
    salary: { min: 0, max: 100000 },
    jobType: "",
    search: "",
  },
};

function reducer(state, action) {
  switch (action.type) {
    case "SET-DATA":
      return {
        ...state,
        jobs: action.payload,
      };
    case "JOB-SELECT":
      return {
        ...state,
        jobselect: action.payload,
      };
    case "DISABLE":
      return {
        ...state,
        jobselect: null,
      };
    case "SET-FILTERS":
      return {
        ...state,
        filters: action.payload,
        filteredJobs: filterJobs(state.jobs, action.payload),
      };
    default:
      return state;
  }
}

function filterJobs(jobs, filters) {
  return jobs?.filter((job) => {
    if (
      filters.location &&
      !job.job_location.toLowerCase().includes(filters.location.toLowerCase())
    ) {
      return false;
    }
    if (filters.jobType && job.job_type !== filters.jobType) {
      return false;
    }
    /* if (filters.salary && !job.job_salary < filters.salary) {
      return false;
    } */

    if (
      filters.search &&
      !job.job_title.toLowerCase().includes(filters.search.toLowerCase())
    ) {
      return false;
    }
    return true;
  });
}

const InitialContext = createContext(initialStates);

function InitialProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialStates);

  useEffect(() => {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => dispatch({ type: "SET-DATA", payload: data }))
      .catch((error) => console.log(error));
  }, []);

  useEffect(() => {
    dispatch({ type: "SET-FILTERS", payload: state.filters });
  }, [state.jobs, state.filters]);

  return (
    <InitialContext.Provider value={{ state, dispatch }}>
      {children}
    </InitialContext.Provider>
  );
}
export { InitialContext, InitialProvider };
