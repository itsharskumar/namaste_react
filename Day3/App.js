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
        <div className="res-card" style={{backgroundColor:"#f0f0f0"}}>
            <img className="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg"></img>
            <div className="res-info">
  <h3>Charcoal Eats - Biryani & Beyond</h3>
  <h4>Biryani, North Indian, Rolls & Wraps</h4>
  <h4>
     <span className="rating">4.1 ⭐</span>
  </h4>
  <h4>45 Minutes</h4>
</div>
        </div>
    )
}

const Body =()=>{
    return (
        <div className="body">

            <div className="search">Search</div>
            <div className="res-container">
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
                <ResturantCard></ResturantCard>
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



