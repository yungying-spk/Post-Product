import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function ViewProductPage() {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const params = useParams();

  const getProduct = async () => {
    const results = await axios(
      `http://localhost:4500/products/${params.productId}`
    );
    setProduct(results.data.data);
  };

  useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      <h1>View Product Page</h1>
      <div className="view-product-container">
        <h2>Name : {product.name}</h2>
        <h3>Category: IT</h3>
        <h3>Created Time: 1 Jan 2011, 00:00:00</h3>
        <p>Price : {product.price}</p>
        <p>Description :{product.description}</p>
      </div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Back to Home
      </button>
    </div>
  );
}

export default ViewProductPage;