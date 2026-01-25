import {useState,useEffect} from "react"
export function App()
{
const [counterVisible,setCounterVisible]=useState(true);

useEffect(()=>{
  const id=setInterval(()=>{
    setCounterVisible(c=>!c);
  },5000)
  return ()=>clearInterval(id); //when the component unmounts
},[])
  return <div>
    <h1>Hello</h1>
    {counterVisible &&<Counter></Counter>}
    <h2>Hii</h2>
  </div>
}

function Counter()
{
    const [count,setCount]=useState(0);
    useEffect(()=>{
      const id=setInterval(()=>{
         setCount(count=>count+1);
      },1000)
     return ()=> clearInterval(id);
    },[])
  return <div>
    <h1>{count}</h1>
    <div style={{display:"flex"}}>
    {/* <button onClick={()=>setCount(count+1)}>IncreaseCount</button>
    <button onClick={()=>setCount(count-1)}>DecreaseCount</button> */}
    </div>
  </div>
}


import {useState} from "react"

const App = () => {
  return (
    <>
    <Func></Func>
    <Func></Func>
    </>
  );
};

const Func = () => {

    const [isVisible , setIsVisible]=useState(true);

     const toggle = () => {
    setIsVisible(prev => !prev);
  };
  return (
    <div>
    <button onClick={toggle}>ToogleButton</button>
    {isVisible && <p>This message is conditionaly rendered</p>}
    </div>
  );
};

export default App;
