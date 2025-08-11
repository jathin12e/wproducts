import React, { useState, useEffect, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import topProducts from "./components/topproducts";
import Nav from "./components/nav";
import Footer from "./components/footer";
import { CartContext } from "./cartcontext";
import "./components/topdetails.css";

export default function TopDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useContext(CartContext) || {};

  const [product, setProduct] = useState(null);
  const [qty, setQty] = useState(1);
  const [zoom, setZoom] = useState(false);
  const [toast, setToast] = useState(false);
  const [related, setRelated] = useState([]);

  useEffect(() => {
    if (!id) {
      setProduct(null);
      setRelated([]);
      return;
    }

    try {
      const decoded = decodeURIComponent(id);
      const [category, idxStr] = decoded.split("__");
      const idx = parseInt(idxStr, 10);

      if (category && !isNaN(idx) && Array.isArray(topProducts[category]) && topProducts[category][idx]) {
        const selectedProduct = { ...topProducts[category][idx], category, index: idx };
        setProduct(selectedProduct);

        // build related items (preserve original index)
        const relatedItems = topProducts[category]
          .map((item, i) => ({ ...item, originalIndex: i }))
          .filter((it) => it.originalIndex !== idx);

        setRelated(relatedItems);
      } else {
        setProduct(null);
        setRelated([]);
      }
    } catch (e) {
      console.error("Invalid product id", e);
      setProduct(null);
      setRelated([]);
    }
  }, [id]);

  const handleAdd = (itemOverride) => {
    if (!product && !itemOverride) return;

    const itemData =
      itemOverride ||
      ({
        id: encodeURIComponent(`${product.category}__${product.index}`),
        name: product.name,
        price: product.price,
        img: product.img,
        qty: Number(qty) || 1,
        source: "top",
        category: product.category,
      });

    if (typeof addToCart === "function") {
      addToCart(itemData);
    } else {
      const cart = JSON.parse(localStorage.getItem("cartItems") || "[]");
      cart.push(itemData);
      localStorage.setItem("cartItems", JSON.stringify(cart));
    }

    setToast(true);
    setTimeout(() => setToast(false), 2000);
  };

  if (!product) {
    return (
      <div className="pd-notfound">
        <Nav />
        <div className="pd-notfound-inner">
          <p>Product not found.</p>
          <button className="pd-back" onClick={() => navigate(-1)}>
            Back
          </button>
        </div>
        <Footer />
      </div>
    );
  }

  // helper to render specs which in data is `specs` (object)
  const renderSpecs = (specObj) => {
    if (!specObj || typeof specObj !== "object") return null;
    return (
      <div className="pd-specs">
        <h3>Specifications</h3>
        <table className="pd-specs-table">
          <tbody>
            {Object.entries(specObj).map(([k, v]) => (
              <tr key={k}>
                <td className="spec-key">{k}</td>
                <td className="spec-val">{String(v)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };

  return (
    <div className="topdetails-page">
      <Nav />

      <div className="pd-wrap">
        <div className="pd-container">
          {/* Breadcrumb */}
          <div className="pd-breadcrumbs">
            <Link to="/products" className="pd-link">
              Products
            </Link>
            <span className="pd-sep">›</span>
            <span className="pd-current">{product.name}</span>
          </div>

          <div className="pd-grid">
            {/* Image */}
            <div className="pd-gallery">
              <div
                className={`pd-main ${zoom ? "zoom" : ""}`}
                onClick={() => setZoom((z) => !z)}
                role="button"
                tabIndex={0}
                onKeyDown={() => setZoom((z) => !z)}
              >
                <img
                  src={product.img}
                  alt={product.name}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/product/placeholder.png";
                  }}
                />
              </div>

              {/* small thumbnails (if the product has gallery array) */}
              {product.gallery && Array.isArray(product.gallery) && (
                <div className="pd-thumbs">
                  {product.gallery.map((g, i) => (
                    <img
                      key={i}
                      className="pd-thumb"
                      src={g}
                      alt={`${product.name} ${i + 1}`}
                      onClick={() => setProduct((p) => ({ ...p, img: g }))}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* Info */}
            <div className="pd-info">
              <h1 className="pd-title">{product.name}</h1>
              <div className="pd-price">{product.price}</div>
              <p className="pd-desc">{product.description}</p>

              {/* Specifications - use `specs` from the provided data */}
              {renderSpecs(product.specs)}

              <div className="pd-actions">
                <div className="pd-qty">
                 
                  <div className="pd-action-buttons">
                  <button className="btn primary" onClick={() => handleAdd()}>
                    🛒 Add to Cart
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

              {/* Extra metadata */}
              
            </div>
          </div>

          {toast && <div className="toast">✅ Added to Cart</div>}
        </div>

        {/* Related Products */}
        {related.length > 0 && product.category && (
          <div className="related-section">
            <h2>Related Products</h2>
            <div className="related-grid">
              {related.map((item) => {
                const productId = `${product.category}__${item.originalIndex}`;
                return (
                  <div className="related-card" key={productId}>
                    <Link
                      to={`/topdetails/${encodeURIComponent(productId)}`}
                      className="related-link"
                    >
                      <img
                        src={item.img}
                        alt={item.name}
                        onError={(e) => {
                          e.target.onerror = null;
                          e.target.src = "/product/placeholder.png";
                        }}
                      />
                      <h3>{item.name}</h3>
                    </Link>
                    <p className="related-price">{item.price}</p>
                    <button
                      className="btn small"
                      onClick={() =>
                        handleAdd({
                          id: encodeURIComponent(productId),
                          name: item.name,
                          price: item.price,
                          img: item.img,
                          qty: 1,
                          source: "top",
                          category: product.category,
                        })
                      }
                    >
                      Add to Cart
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
