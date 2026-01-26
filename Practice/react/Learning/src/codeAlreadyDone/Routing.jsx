import {BrowserRouter,Routes,Route,Link} from "react-router-dom"
import Header from "./Header.jsx"
const App=()=>{

    return (
        <>
        
         <BrowserRouter>
      <Header />

      <div style={{ marginTop: "60px" }}>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/neet/online-coaching-class-11" element={<Class11 />} />
          <Route path="/neet/online-coaching-class-12" element={<Class12 />} />
          <Route path="/neet/online-coaching-Dropper" element={<Dropper />} />
          <Route path="*" element={<Error></Error>}/>
        </Routes>
      </div>
    </BrowserRouter>
        </>
    )
}


const Class11=()=>{
    return (
        <>
        <h1>This is class11 page</h1>
        </>
    )
}
const Class12=()=>{
    return (
        <>
        <h1>This is class12 page</h1>
        </>
    )
}
const Dropper=()=>{
    return (
        <>
        <h1>This is Dropper page</h1>
        </>
    )
}
const Landing=()=>{
    return (
        <>
        <h2>This is a Landing Page</h2>
        </>
    )
}

const Error=()=>{
    return (
        <>
        <h1>This is Error Page</h1>
        </>
    )
}
export default App;