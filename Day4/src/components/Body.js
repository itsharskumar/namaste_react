import {useState,useEffect} from "react"
import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";



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

      // Swiggy data is nested (for now just log)
      console.log(json);
       const restaurants =
        json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants;

      setResturants(restaurants||resList);

  };

if (resturants.length === 0) {
  return <div className="spinner-container">
    <div className="spinner"></div>
  </div>;
}



  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
         onClick={() => {
    const filteredList = resturants.filter(
      (res) => res.info.avgRating > 4.5
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
