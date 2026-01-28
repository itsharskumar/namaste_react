import {useEffect,useRef} from "react"

const usePrev= (value)=>{

    const prevRef=useRef();

useEffect(()=>{

    prevRef.current=value;
},[value]);

return prevRef.current;

}

export default usePrev;