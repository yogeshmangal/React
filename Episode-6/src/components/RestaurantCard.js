import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3>{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines}</h4>
      <h4>{props.resData.info.avgRating} stars</h4>
      <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
