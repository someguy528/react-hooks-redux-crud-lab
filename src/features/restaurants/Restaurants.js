import React from "react";
import Restaurant from "./Restaurant"

function Restaurants({restaurants}) {

  const allRestaurants = restaurants.map(r=> <Restaurant key={r.id} restaurant={r} /> )

  return <ul>{allRestaurants}</ul>;
}

export default Restaurants;
