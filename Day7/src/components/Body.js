import { useState, useEffect } from "react";
import ResturantCard from "./ResturantCard";
import resList from "../../utils/mockData";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resturants, setResturants] = useState([]);
  const [filteredResturant, setfilteredResturant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/restaurants");

      if (!res.ok) {
        throw new Error("API failed");
      }

      const json = await res.json();

      const restaurantCard = json?.data?.cards?.find(
        (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
      );

      const restaurants =
        restaurantCard?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      // ✅ success path
      setResturants(restaurants);
      setfilteredResturant(restaurants);
    } catch (error) {
      console.error("API failed, loading mock data", error);

      // ✅ fallback path
      setResturants(resList);
      setfilteredResturant(resList);
    } finally {
      setLoading(false);
    }
  };

  // ✅ loading UI
  if (loading) return <Shimmer />;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-bar"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button
            className="search-btn"
            onClick={() => {
              const filteredR = resturants.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setfilteredResturant(filteredR);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = resturants.filter(
              (res) => res.info.avgRating > 4
            );
            setfilteredResturant(filteredList);
          }}
        >
          Top Rated Resturants
        </button>
      </div>

      <div className="res-container">
        {filteredResturant.map((resturant) => (
          <ResturantCard
            key={resturant.info.id}
            resObj={resturant}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;
