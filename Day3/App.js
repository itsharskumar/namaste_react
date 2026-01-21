import React from "react"
import ReactDOM from "react-dom/client"




const Header=()=>{
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://marketplace.canva.com/EAFaFUz4aKo/3/0/1600w/canva-yellow-abstract-cooking-fire-free-logo-tn1zF-_cG9c.jpg"/>
            </div>

            <div className="nav-items">

                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>ContactUs</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const ResturantCard =()=>{
    return (
        <div className="res-card">
            <h3>Meghna Foods</h3>
        </div>
    )
}

const Body =()=>{
    return (
        <div className="body">

            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard></ResturantCard>
            </div>
        </div>
    )
}




const AppLayout =()=>{
    return (
        <div className="app">
            <Header></Header>
            <Body></Body>
        </div>
    )
}

const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout></AppLayout>)



