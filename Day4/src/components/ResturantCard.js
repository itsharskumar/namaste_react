import {CDN_URL} from "../../utils/constants"

// const ResturantCard =({resName,cousine,rating,deleiveryTime})=>{ //we can also destructre like this
const ResturantCard = (props) => {
  const { resObj } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, sla } = resObj?.info;
  const { deliveryTime } = sla; //because delivery is in the sla so we deconstruct it
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      {/* <img className="res-logo"src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/FOOD_CATALOG/IMAGES/CMS/2025/5/17/57c9176a-f4c7-4ca3-8db3-d7d7a531d65f_993ef335-5221-48f3-9e70-2725d14a6dc8.jpg"></img> */}
      <img
        className="res-logo"
        src={CDN_URL + cloudinaryImageId}
        alt={resObj.info.name}
      />
      <div className="res-info">
        <h3>{name}</h3>
        <h4>{cuisines.join(" , ")}</h4>
        <h4>
          <span className="rating">{avgRating}</span>
        </h4>
        <h4>{deliveryTime} mins</h4>
      </div>
    </div>
  );
};
export default ResturantCard;