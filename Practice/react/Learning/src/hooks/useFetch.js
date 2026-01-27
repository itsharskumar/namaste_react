import { useState ,useEffect} from "react";

export const useFetchTitle=()=>{
    
 const [post,setPost]=useState({});

    useEffect(()=>{
        getData();
    },[])
    const getData = async () => {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/todos/10"
  );
  const json = await response.json();
  setPost(json);
};
    return post.title;
}
export const useFetch=(url)=>{
    const [finalData,setfinalData]=useState({});

    useEffect(()=>{
      fetchData();
    },[])
    const fetchData= async()=>{
        const response=await fetch(url);
        const data=await response.json();

        setfinalData(data);
    }
    return finalData;
}

// export default useFetchTitle;