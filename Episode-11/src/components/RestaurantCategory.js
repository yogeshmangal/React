import ItemList from "./ItemList";
import { useState } from "react";

const RestaurantCategory = (props) => {
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    // showItems ? setShowItems(false) : setShowItems(true);
    props.setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4">
        <div
          className="flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-bold">
            {props.data.title}({props.data.itemCards.length})
          </span>
          <span>⬇️</span>
        </div>
        {props.showItems && (
          <ItemList items={props.data.itemCards} dummydata={props.dummydata} />
        )}
      </div>
    </div>
  );
};

export default RestaurantCategory;
