import { useState ,useEffect} from "react";

import {useFetchTitle,useFetch} from "./hooks/useFetch"
const App = () => {
  const title = useFetchTitle();
  const finalData = useFetch("https://jsonplaceholder.typicode.com/todos/10");

  return (
    <div>
      <h1>{title}</h1>
      <pre>{JSON.stringify(finalData, null, 2)}</pre>
    </div>
  );
};

export default App;

