import React, { useEffect, useRef, useContext } from "react";
import "./topsales.css";
import { Link, useNavigate } from "react-router-dom";
import topProducts from "./topproducts";
import { CartContext } from "../cartcontext";

const TopSelling = () => {
  const categoryRefs = useRef([]);
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.2 }
    );
    categoryRefs.current.forEach(ref => ref && observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  const handleBuyAndGoCart = (category, product, index, e) => {
    e?.stopPropagation();
    const id = encodeURIComponent(`${category}__${index}`); // top ID shape
    const item = {
      id,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: 1,
      source: "top",
      category
    };
    addToCart && addToCart(item);
    navigate("/cart");
  };

  return (
    <div className="top-selling-section">
      <div className="top-selling-header">
        <h2>Top Selling Products</h2>
        <p>Explore our best-selling electronics, fluid technology, and construction solutions.</p>
      </div>

      {Object.entries(topProducts).map(([category, products], i) => (
        <div key={category} className="product-category fade-in-section" ref={el => (categoryRefs.current[i] = el)}>
          <h3>{category}</h3>
          <div className="scroll-wrapper">
            {products.map((product, index) => {
              const productId = encodeURIComponent(`${category}__${index}`);
              return (
                <div className="product-box" key={index}>
                  <Link to={`/topdetails/${productId}`} className="view-link">
                    <div className="img-wrapper"><img src={product.img} alt={product.name} /></div>
                    <h4>{product.name}</h4>
                    <p>{product.price}</p>
                  </Link>

                  
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TopSelling;
