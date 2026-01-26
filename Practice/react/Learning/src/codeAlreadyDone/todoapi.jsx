import {useState,useEffect} from "react" 

const App=()=>{
const [currentTab,setCurrentTab]=useState("random");
const [data,setData]=useState({});
const [loading,setLoading]=useState(true);
useEffect(()=>{
    setLoading(true)
    fetch('https://dummyjson.com/todos/'+currentTab)
.then((response)=>{
    return response.json()
}).then((dat)=> { setData(dat); setLoading(false)})

},[currentTab])
    return (
        <div>
            <button onClick={()=>setCurrentTab(1)}style={{color:currentTab==1?"red":"black"}}>Feed</button>
            <button onClick={()=>setCurrentTab(2)}style={{color:currentTab==2?"red":"black"}}>Notification</button>
            <button onClick={()=>setCurrentTab(3)}style={{color:currentTab==3?"red":"black"}}>Message</button>
            <button onClick={()=>setCurrentTab(4)}style={{color:currentTab==4?"red":"black"}}>Jobs</button>
            <h1>{loading?"Loading....":data.todo}</h1>
        </div>
    )


}

export default App;