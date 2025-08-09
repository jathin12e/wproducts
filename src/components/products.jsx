import React, { useState, useEffect, useContext } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { CartContext } from "../cartcontext";
import "./products.css";
import productData from "./productdata";
import Nav from './nav'
import Footer from './footer'

export default function ProductLayout() {
  const sectionKeys = Object.keys(productData);
  const [searchParams] = useSearchParams();
  const { addToCart } = useContext(CartContext);
  const navigate = useNavigate();

  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedSubSection, setSelectedSubSection] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [sortOption, setSortOption] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");

  useEffect(() => {
    const search = searchParams.get("search")?.toLowerCase();
    let matchFound = false;
    for (const section of sectionKeys) {
      const subsections = productData[section];
      for (const subsection in subsections) {
        const products = subsections[subsection];
        if (
          section.toLowerCase().includes(search) ||
          subsection.toLowerCase().includes(search) ||
          products.some(p => p.name.toLowerCase().includes(search))
        ) {
          setSelectedSection(section);
          setSelectedSubSection(subsection);
          setSearchQuery("");
          matchFound = true;
          break;
        }
      }
      if (matchFound) break;
    }
    if (!matchFound && sectionKeys.length) {
      const defaultSection = sectionKeys[0];
      const defaultSubSection = Object.keys(productData[defaultSection])[0];
      setSelectedSection(defaultSection);
      setSelectedSubSection(defaultSubSection);
    }
  }, [searchParams]);

  const filteredProducts = (() => {
    if (!selectedSection || !selectedSubSection) return [];
    let products = productData[selectedSection]?.[selectedSubSection] || [];
    if (searchQuery.trim()) {
      products = products.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    products = products.filter(product => {
      const numeric = parseFloat((product.price || "").replace(/[^0-9.]/g, '')) || 0;
      const min = parseFloat(minPrice);
      const max = parseFloat(maxPrice);
      if (!isNaN(min) && numeric < min) return false;
      if (!isNaN(max) && numeric > max) return false;
      return true;
    });
    switch (sortOption) {
      case "price-asc": return [...products].sort((a,b)=> (parseFloat((a.price||"").replace(/[^0-9.]/g,''))||0) - (parseFloat((b.price||"").replace(/[^0-9.]/g,''))||0));
      case "price-desc": return [...products].sort((a,b)=> (parseFloat((b.price||"").replace(/[^0-9.]/g,''))||0) - (parseFloat((a.price||"").replace(/[^0-9.]/g,''))||0));
      case "name-asc": return [...products].sort((a,b)=> a.name.localeCompare(b.name));
      default: return products;
    }
  })();

  const handleAdd = (product, idx, e) => {
    e?.stopPropagation();
    const pid = encodeURIComponent(`${selectedSection}__${selectedSubSection}__${idx}`);
    const item = { id: pid, name: product.name, price: product.price, img: product.img, qty: 1, source: "catalog", category: selectedSection, subcategory: selectedSubSection, index: idx };
    addToCart ? addToCart(item) : (() => {
      const cart = JSON.parse(localStorage.getItem("cartItems")||"[]");
      const ix = cart.findIndex(c=>c.id===pid);
      if (ix>=0) cart[ix].qty += 1; else cart.push(item);
      localStorage.setItem("cartItems", JSON.stringify(cart));
    })();
  };

  return (
    <div>
      <Nav />
    <div style={{ backgroundColor: "gray" }}>
      <div className="product-layout">
        <div className="top-menu">
          {sectionKeys.map(section => (
            <div key={section} className={`top-item ${selectedSection===section?"active":""}`} onClick={()=>{ setSelectedSection(section); setSelectedSubSection(Object.keys(productData[section])[0]); }}>
              {section}
            </div>
          ))}
        </div>

        <div className="main-content">
          <div className="left-panel">
            <h3 className="filter-title">Categories</h3>
            {selectedSection && Object.keys(productData[selectedSection]).map(sub => (
              <div key={sub} className={`sub-item ${selectedSubSection===sub?"active":""}`} onClick={()=>setSelectedSubSection(sub)}>{sub}</div>
            ))}
          </div>

          <div className="right-panel">
            <div className="product-header">
              <h2 style={{color:"white"}}>{selectedSubSection || selectedSection || "Products"}</h2>
              <div className="sort-options">
                <select onChange={e=>setSortOption(e.target.value)} value={sortOption}>
                  <option value="default">Default</option>
                  <option value="price-asc">Price: Low to High</option>
                  <option value="price-desc">Price: High to Low</option>
                  <option value="name-asc">Name: A-Z</option>
                </select>
              </div>
            </div>

            <div className="product-grid">
              {filteredProducts.map((product, idx) => {
                const pid = encodeURIComponent(`${selectedSection}__${selectedSubSection}__${idx}`);
                return (
                  <div className="product-card" key={idx}>
                    <div className="product-preview" onClick={()=>window.location.assign(`/details/${pid}`)} style={{cursor:"pointer"}}>
                      <img src={product.img} alt={product.name} />
                      <div className="product-info">
                        <h4>{product.name}</h4>
                        <p>{product.price}</p>
                      </div>
                    </div>

                    <div className="product-actions">
                      <button onClick={(e)=>handleAdd(product, idx, e)}>Add to Cart</button>
                      <button onClick={(e)=>{ e.stopPropagation(); window.location.assign(`/enquiry?product=${encodeURIComponent(product.name)}`); }} style={{backgroundColor:"green",color:"white"}}>Enquiry</button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
}
