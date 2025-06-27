import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const [editProductId, setEditProductId] = useState(null);
  const [editFormData, setEditFormData] = useState({
    title: "",
    category: "",
    price: "",
  });

  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleEditClick = (product) => {
    setEditProductId(product.id);
    setEditFormData({
      title: product.title,
      category: product.category,
      price: product.price,
    });
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setEditFormData({ ...editFormData, [name]: value });
  };

  const handleSaveClick = () => {
    const updatedProducts = products.map((product) =>
      product.id === editProductId
        ? { ...product, ...editFormData }
        : product
    );
    setProducts(updatedProducts);
    setEditProductId(null);
  };

  const handleCancelClick = () => {
    setEditProductId(null);
  };

  return (
    <div className="container mt-5">
      <h3 className="text-center mb-4">All Products</h3>
      <div className="table-responsive">
        <table className="table table-striped table-bordered text-center align-middle">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              let rowContent;

              if (editProductId === product.id) {
                // Editable row
                rowContent = (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ height: "60px", objectFit: "contain" }}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="title"
                        value={editFormData.title}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        name="category"
                        value={editFormData.category}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td>
                      <input
                        type="number"
                        name="price"
                        value={editFormData.price}
                        onChange={handleFormChange}
                      />
                    </td>
                    <td colSpan={2}>
                      <button className="btn btn-success me-2" onClick={handleSaveClick}>
                        Save
                      </button>
                      <button className="btn btn-secondary" onClick={handleCancelClick}>
                        Cancel
                      </button>
                    </td>
                  </tr>
                );
              } else {
                // Normal row
                rowContent = (
                  <tr key={product.id}>
                    <td>{product.id}</td>
                    <td>
                      <img
                        src={product.image}
                        alt={product.title}
                        style={{ height: "60px", objectFit: "contain" }}
                      />
                    </td>
                    <td>{product.title}</td>
                    <td>{product.category}</td>
                    <td>${product.price}</td>
                    <td>
                      <button
                        className="btn btn-warning"
                        onClick={() => handleEditClick(product)}
                      >
                        Edit
                      </button>
                    </td>
                    <td>
                      <button className="btn btn-dark mt-1">Delete</button>
                    </td>
                  </tr>
                );
              }

              return rowContent;
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllProducts;