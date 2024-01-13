import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  let [listOfRestaurants, setListOfRestaurants] = useState([
    {
      id: "1",
      name: "Meghana Foods",
      cuisine: "Biryani, North Indian, Asian",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/iivuhjc2mswi9lublktf",
      starRating: "4.4",
      time: "38",
    },
    {
      id: "2",
      name: "KFC",
      cuisine: "Burger, Fast Food",
      imageUrl:
        "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_264,h_288,c_fill/f01666ac73626461d7455d9c24005cd4",
      starRating: "3.8",
      time: "40",
    },
  ]);
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            //Filter logic here
            const filteredList = listOfRestaurants.filter(
              (res) => res.starRating >= 4
            );
            setListOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {/* <RestaurantCard resData={resList[0]} /> */}
        {/* <RestaurantCard resData={resList[1]} /> */}
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
