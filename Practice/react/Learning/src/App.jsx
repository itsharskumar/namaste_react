import {useRef} from "react"

const App = () => {

    const inputRef=useRef();

    const focusInput=()=>{
        inputRef.current.focus();
    }
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ border: "1px solid #ccc", padding: "20px" }}>
        <h2 style={{ textAlign: "center" }}>Sign Up</h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input type="text" ref={inputRef} placeholder="Name" />
          <input type="text" placeholder="Email" />
          <button onClick={focusInput}>Submit</button>
        </div>
      </div>
    </div>
  );
};

export default App;
