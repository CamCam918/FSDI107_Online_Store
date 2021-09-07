import React, { useEffect, useState } from "react";
import Item from "./item";
import "./catalog.css";
import ItemService from "../services/itemService";

const Catalog = () => {
  //state variables
  let [products, setProducts] = useState([]);
  //logic (functions)
  const retrieveCatalog = () => {
    let service = new ItemService();
    let cat = service.getCatalog();
    setProducts(cat);
    console.log(cat);
  };

  //effect
  useEffect(() => {
    retrieveCatalog();
  }, []); // [] added to ensure logic will be called only once

  //return
  return (
    <div className="catalog-page">
      <h3>
        Check Out Our Catalog - Waiting to be customized to your Unique
        Inspiration!
      </h3>
      <h6>
        Currently we have a total of {products.length} customizable products to
        choose from!
      </h6>
      <div className="item-container">
        {products.map((prod) => (
          <Item key={prod._id} data={prod}></Item>
        ))}
      </div>
    </div>
  );
};

export default Catalog;
