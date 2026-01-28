
import {useRef,useState} from "react"

export function Otp() {
  const refs = Array.from({ length: 6 }, () => useRef());

  return (
    <div className="flex justify-center">
      {refs.map((ref, index) => (
        <Subotp
          key={index}
          inputRef={ref}
          onNext={() => refs[index + 1]?.current?.focus()}
          onBack={() => refs[index - 1]?.current?.focus()}
        />
      ))}
    </div>
  );
}

function Subotp({ inputRef, onNext, onBack }) {
  const [value, setValue] = useState("");

  return (
    <input
      ref={inputRef}
      value={value}
      type="text"
      maxLength={1}
      className="m-1 w-[40px] h-[50px] rounded-2xl bg-blue-500 outline-none caret-white text-white text-center"
      
      onChange={(e) => {
        const val = e.target.value;
        if (/^[0-9]$/.test(val)) {
          setValue(val);
          onNext?.();
        }
      }}

      onKeyDown={(e) => {
        if (e.key === "Backspace") {
          if (value === "") {
            onBack?.();
          }
          setValue("");
        }
      }}
    />
  );
}

export default Subotp;
