import React from "react";
import ReactStars from "react-rating-stars-component";

function Filters() {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <div className="ps-4 pt-2">
      <div className="form-check">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label text-white" for="flexRadioDefault1">
          Ascending Order
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label text-white" for="flexRadioDefault1">
          Descending order
        </label>
      </div>
      <div className="form-check mt-2">
        <input
          className="form-check-input"
          type="checkbox"
          value="Fast Delivery"
        />
        <label className="form-check-label text-white">
          Fast Delivery Only
        </label>
      </div>
      <div className="d-flex align-items-center mt-2">
        <label className="form-check-label text-white me-2">Rating:</label>
        <ReactStars
          count={5}
          onChange={ratingChanged}
          size={24}
          activeColor="#ffd700"
        />
      </div>
    </div>
  );
}

export default Filters;
