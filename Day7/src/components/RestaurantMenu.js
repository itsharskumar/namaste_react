import {useEffect,useState} from "react";
import {useParams} from "react-router-dom"
import Shimmer from "./Shimmer"
const RestaurantMenu=()=>{


    const {resId}=useParams();
    console.log(resId);
   const [resInfo,setResInfo]=useState(null);
    useEffect(()=>{

        getData();
    },[])

    const getData= async()=>
    {
        const data=await fetch("http://localhost:5000/api/restaurants");

        const json=await data.json();
        const restaurantCard = json?.data?.cards?.find(
      (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
        setResInfo(restaurantCard);
    }
    //for destructuring name
   const restaurants =
  resInfo?.card?.card?.gridElements?.infoWithStyle?.restaurants;

const restaurantInfo = restaurants?.[10]?.info;

if (!restaurantInfo) return <Shimmer />;

const { name, cuisines } = restaurantInfo; 
    return resInfo==null?(<Shimmer></Shimmer>):(

        <div className="res-menu" style={{textAlign:"center"}}>
            
            <h1>{name}</h1>
            <p>{cuisines.join(",")}</p>
            <h2>Menu</h2>
            <ul style={{padding:"10px"}}>
                <li>Biryani</li>
                <li>Coke</li>
                <li>Burger</li>
                <li>Matcha</li>
    
            </ul>
        </div>
    )

}
export default RestaurantMenu;