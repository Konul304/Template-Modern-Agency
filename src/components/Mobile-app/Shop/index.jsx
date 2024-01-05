import React from "react";
//= Components
import ShopSidebar from "./ShopSidebar";
import ShopStore from "./ShopStore";

function Shop() {
  return (
    <section className="shop section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <ShopSidebar />
          </div>
          <div className="col-lg-9">
            <ShopStore />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
