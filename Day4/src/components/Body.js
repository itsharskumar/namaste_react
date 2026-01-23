import {useState,useEffect} from "react"
import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmer"


const Body = () => {
  const [resturants,setResturants]=useState([]);

  useEffect(()=> {
 fetchData();
},[])


// const fetchData=async()=>{
//   const data=await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.5199&lng=77.4587&page_type=DESKTOP_WEB_LISTING");


//   const json=await data.json();
//   console.log(json)
// }//not working

const fetchData = async () => {
    
      const res = await fetch("http://localhost:5000/api/restaurants");
      const json = await res.json();

      const restaurantCard = json?.data?.cards?.find(
  (card) =>
    card?.card?.card?.gridElements?.infoWithStyle?.restaurants
);

      // Swiggy data is nested (for now just log)
      console.log(json);
       const restaurants =
      restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

        // json?.data?.cards[3]?.card?.card?.gridElements?.infoWithStyle
        //   ?.restaurants;//thisis failing because position changes

      setResturants(restaurants||resList);

  };




  return resturants.length === 0 ? <Shimmer></Shimmer>:(//when the resutrant is zero
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
         onClick={() => {
    const filteredList = resturants.filter(
      (res) => res.info.avgRating > 4
    );

    setResturants(filteredList);
  }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resturants.map((resturant) => (
          <ResturantCard
            key={resturant.info.id}
            resObj={resturant}
          ></ResturantCard>
        ))}
      </div>
    </div>
  );
};
export default Body;
