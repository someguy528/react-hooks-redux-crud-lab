import React from "react";
import Review from "./Review";

function Reviews({restaurantReviews}) {
  const allReviews = restaurantReviews.map(r=><Review key={r.id} review={r} /> )
  return <ul>{allReviews}</ul>;
}

export default Reviews;
