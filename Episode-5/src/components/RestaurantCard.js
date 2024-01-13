const RestaurantCard = (props) => {
  return (
    <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img className="res-logo" alt="res-logo" src={props.resData.imageUrl} />
      <h3>{props.resData.name}</h3>
      <h4>{props.resData.cuisine}</h4>
      <h4>{props.resData.starRating} stars</h4>
      <h4>{props.resData.time} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
