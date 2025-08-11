// src/components/Details.jsx
import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import productData from "./components/productdata"; // <-- path to the file above
import "./components/details.css";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { CartContext } from "./cartcontext";

export default function Details() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext);

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    if (!id) return setProduct(null);
    const decoded = decodeURIComponent(id);
    const [section, sub, idxStr] = decoded.split("__");
    const idx = parseInt(idxStr, 10);

    if (productData[section] && productData[section][sub] && !isNaN(idx)) {
      const p = productData[section][sub][idx];
      setProduct({ ...p, category: section, subcategory: sub, localIndex: idx });
    } else {
      setProduct(null);
    }
    setQty(1);
  }, [id]);

  if (!product) {
    return (
      <div className="pd-notfound">
        <p>Product not found.</p>
        <Link to="/products" className="pd-back">
          Back to Products
        </Link>
      </div>
    );
  }

  const handleAdd = () => {
    const pid = encodeURIComponent(
      `${product.category}__${product.subcategory}__${product.localIndex}`
    );
    const item = {
      id: pid,
      name: product.name,
      price: product.price,
      img: product.img,
      qty: Number(qty) || 1,
      source: "catalog",
      category: product.category,
      subcategory: product.subcategory
    };
    if (addToCart) {
      addToCart(item);
    } else {
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      cart.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }
    
  };

  const relatedProducts = (() => {
    if (!product) return [];
    const list = productData[product.category]?.[product.subcategory] || [];
    return list
      .map((p, idx) => ({ ...p, idx }))
      .filter((p) => p.idx !== product.localIndex);
  })();

  // helper to render specs if present
  const renderSpecs = (specs) => {
    if (!specs) return null;
    return (
      <div className="pd-specs">
        <h3>Specifications</h3>
        <ul>
          {Object.entries(specs).map(([k, v]) => (
            <li key={k}>
              <strong>{k}:</strong> {String(v)}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <div className="pd-wrap">
        <div className="pd-container">
          {/* Breadcrumbs */}
          <div className="pd-breadcrumbs">
            <Link to="/products" className="pd-link">
              ← Products
            </Link>
            <span className="pd-sep">/</span>
            <span className="pd-current">{product.subcategory}</span>
          </div>

          {/* Main Grid */}
          <div className="pd-grid">
            {/* Image Section */}
            <div className="pd-gallery">
              <div className="pd-main">
                <img
                  src={product.img}
                  alt={product.name}
                  onError={(e) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "/product/placeholder.png";
                  }}
                />
              </div>
            </div>

            {/* Info Section */}
            <div className="pd-info">
              <h1 className="pd-title">{product.name}</h1>

              <div className="pd-price">{product.price}</div>

              {/* Show description paragraphs (split if long) */}
              <div className="pd-desc">
                {product.description
                  .split(/\n/)
                  .filter(Boolean)
                  .map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
              </div>

              {/* Optional specs */}
              {renderSpecs(product.specs)}

              {/* Quantity & Buttons */}
              <div className="pd-actions">
                <div className="pd-qty">
                  
                  <div className="pd-cta">
                  <button className="btn primary" onClick={handleAdd}>
                    Add to Cart
                  </button>
                  &nbsp;
                  <button
                    className="btn btn-success"
                    onClick={() =>
                      navigate(`/enquiry?product=${encodeURIComponent(product.name)}`)
                    }
                  >
                    Product Enquiry 
                  </button>
                </div>
                </div>
                
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="related-section">
              <h2>Related Products</h2>
              <div className="related-grid">
                {relatedProducts.map((rp) => (
                  <div
                    key={rp.idx}
                    className="related-card"
                    onClick={() =>
                      navigate(
                        `/details/${encodeURIComponent(
                          `${product.category}__${product.subcategory}__${rp.idx}`
                        )}`
                      )
                    }
                  >
                    <img
                      src={rp.img}
                      alt={rp.name}
                      onError={(e) => {
                        e.currentTarget.onerror = null;
                        e.currentTarget.src = "/product/placeholder.png";
                      }}
                    />
                    <div className="related-info">
                      <h4>{rp.name}</h4>
                      <p className="rel-price">{rp.price}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
}
