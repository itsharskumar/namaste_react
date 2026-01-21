import React from "react"
import ReactDOM from "react-dom/client"

//React Element
// const heading=React.createElement("h1",{id:"heading"},"Namaste Harsh");


//jsx (transpiled before it reaches the js) - PARCEL -Babel convert that react will understand
// const jsxHeading=(
// <h1 className="heading">Namaste Harsh</h1>
// )//react element

// React Component
//class based component ->old
// functional component ->new Way of writing code

const Title =()=>{
    return <h2>Just checking inside the functional Component</h2>
}


const HeadingComponent=()=>(
    <div id="container">
        <Title></Title>
       <h1 className="heading">Namaste Harsh</h1>

    </div>
)

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent></HeadingComponent>)
// root.render(jsxHeading);//this is not a good way of doing it


