import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
const Body = () => {
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            console.log("button working");
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {resList.map((resturant) => (
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
