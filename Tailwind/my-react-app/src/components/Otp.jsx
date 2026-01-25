import {useRef} from "react"

export function Otp() {
  const ref1 = useRef();
  const ref2 = useRef();
  const ref3 = useRef();
  const ref4 = useRef();
  const ref5 = useRef();
  const ref6 = useRef();

  return (
    <div className="flex justify-center">
      <Subotp inputRef={ref1} onDone={() => ref2.current.focus()} />
      <Subotp inputRef={ref2} onDone={() => ref3.current.focus()} />
      <Subotp inputRef={ref3} onDone={() => ref4.current.focus()} />
      <Subotp inputRef={ref4} onDone={() => ref5.current.focus()} />
      <Subotp inputRef={ref5} onDone={() => ref6.current.focus()} />
      <Subotp inputRef={ref6} onDone={() => {}} />
    </div>
  );
}

function Subotp({inputRef,onDone})
{
    return <div>
        <input ref={inputRef} onChange={(e)=> { if(e.target.value)onDone()}}type="text" maxLength={1} className="m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none caret-white  text-white text-center"></input>
    </div>
}

