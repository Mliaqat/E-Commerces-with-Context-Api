import ProductCard from "../ProductCard/ProductCard";
import { CartState } from "../../Contex/Contex";
import Filters from "../Filters/Filters";
import React from "react";
import "./Home.scss";

function Home() {
  const {
    state: { Products },
  } = CartState();
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-2 p-0">
          <div className="sidebar">
            <h3 className="text-center text-white py-4">Product Filters</h3>
            <hr className="text-white"></hr>
            <Filters />
          </div>
        </div>
        <div className="col-10">
          <ProductCard Products={Products} />
        </div>
      </div>
    </div>
  );
}

export default Home;
