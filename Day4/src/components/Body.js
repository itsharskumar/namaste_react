import {useState} from "react"
import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";

const Body = () => {
  const [resturants,setResturants]=useState(resList);
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
