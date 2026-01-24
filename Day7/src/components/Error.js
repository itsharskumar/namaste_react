import { useRouteError } from "react-router-dom";

const Error = () => {
  const err = useRouteError();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Oops! Something went wrong 😢</h1>

      <h2>
        {err.status} : {err.statusText}
      </h2>

      <p>{err.data}</p>
    </div>
  );
};

export default Error;