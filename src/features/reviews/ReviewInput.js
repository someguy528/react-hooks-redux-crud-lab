import React, { useState } from "react";
import Reviews from "./Reviews";
import { useDispatch } from "react-redux";
import { reviewAdded } from "./reviewsSlice";

function ReviewInput({restaurantId}) {
  const [review, setReview] = useState({
    comment: "",
    restaurantId: restaurantId
  })
  const dispatch = useDispatch()
  function handleChange(e){
    setReview({
      ...review,
      [e.target.name] : e.target.value})
  }
  function handleSubmit(e){
    e.preventDefault();
    dispatch(reviewAdded(review));
    setReview({
      comment: "",
      restaurantId: restaurantId
    })
  }

  return (
  <form onSubmit={handleSubmit} >
    <label>
      Comment
      <textarea onChange={handleChange} value={review.comment} name="comment" />  
    </label>
    {/* <input type="submit" value="Add Review" />  */}
    <button type="submit" > Add Review </button>
  
  </form>);
}

export default ReviewInput;
