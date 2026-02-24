import { Link } from "react-router-dom";

const Products = () => {
  const productList = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Mobile" },
    { id: 3, name: "Headphones" },
  ];

  return (
    <div>
      <h1>Products Page</h1>
      <ul>
        {productList.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
