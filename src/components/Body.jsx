import { useState, useEffect } from "react";
import { restaurantList } from "../constants.jsx";
import RestaurantCard from "./RestaurantCard.jsx";
import ShimmerUi from "./Shimmer.jsx";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper.jsx";
import useGetRestaurant from "../utils/useGetRestaurant.jsx";
const Body = ({ user }) => {
  const [searchText, setSearchText] = useState("");

  const { allRestaurants, filteredRestaurants, setfilteredRestaurants } =
    useGetRestaurant();

  if (!allRestaurants) return null;
  // if (filteredRestaurants?.length === 0) return <h1>No Resturant Found </h1>;

  return allRestaurants?.length === 0 ? (
    <ShimmerUi />
  ) : (
    <>
      <div className="px-5 bg-white my-1">
        <input
          type="text"
          className="bg-gray-100 rounded-2xl placeholder-gray-600 w-72 h-9
          "
          placeholder="  Find your food"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="p-2 m-2 bg-gray-300 text-black rounded-2xl hover:bg-slate-600 hover:text-white"
          onClick={() => {
            const data = filterData(searchText, allRestaurants);
            setfilteredRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filteredRestaurants.map((restaurant) => {
          return (
            <Link
              to={"/restaurant/" + restaurant.info.id}
              key={restaurant.info.id}
            >
              <RestaurantCard {...restaurant.info} user={user } />
            </Link>
          );
        })}
      </div>
    </>
  );
};
export default Body;
