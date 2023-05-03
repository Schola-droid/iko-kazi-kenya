import { createContext, useEffect, useReducer } from "react";

const initialStates = {
  jobs: null,
  jobselect: null,
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
    default:
      return state;
  }
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

  return (
    <InitialContext.Provider value={{ state, dispatch }}>
      {children}
    </InitialContext.Provider>
  );
}
export { InitialContext, InitialProvider };
