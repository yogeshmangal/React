import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  return (
    <div className="m-4 p-4 w-[250px] h-[350px] rounded-lg bg-gray-100 hover:bg-gray-200">
      <img
        className="rounded-lg"
        alt="res-logo"
        src={CDN_URL + props.resData.info.cloudinaryImageId}
      />
      <h3 className="font-bold py-4 text-xl">{props.resData.info.name}</h3>
      <h4>{props.resData.info.cuisines.join(", ")}</h4>
      <h4>{props.resData.info.avgRating} stars</h4>
      <h4>{props.resData.info.sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
