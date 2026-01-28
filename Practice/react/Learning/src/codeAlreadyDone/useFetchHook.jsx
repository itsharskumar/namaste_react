import { useState ,useEffect} from "react";

import {useFetchTitle,useFetch} from "./hooks/useFetch"
const App = () => {
  const [data,setData]=useState(1);
  const title = useFetchTitle();
  const finalData = useFetch("https://jsonplaceholder.typicode.com/todos/"+data);

  return (
    <div>
     <button onClick={()=> setData(1)}>1</button>
     <button onClick={()=> setData(2)}>2</button>
     <button onClick={()=> setData(3)}>3</button>
     <button onClick={()=> setData(4)}>4</button>
      {JSON.stringify(finalData)}
    </div>
  );
};

export default App;

