import ReactStars from "react-rating-stars-component";
import "./ProductCard.scss";
import React from "react";

function ProductCard({ Products }) {
  console.log(Products);
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };
  return (
    <div className="container-fulid mt-5">
      <div className="product-card pt-5">
        {Products.map((data) => {
          return (
            <div key={data.id} className="main-card">
              <img src={data.img} alt="product-icon" />
              <div className="d-flex justify-content-between align-items-end">
                <h4 className="ps-2 pt-2">{data.productName}</h4>
                <h5 className="pe-2">Rs.{data.price}</h5>
              </div>
              <div className="d-flex justify-content-between align-items-end ps-2 my-2">
                <div className="d-flex align-items-center">
                  <label className="form-check-label me-2">
                    Rating:
                  </label>
                  <ReactStars
                    count={5}
                    onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProductCard;
