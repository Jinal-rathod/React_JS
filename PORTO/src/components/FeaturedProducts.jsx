import ProductGridCard from "./ProductGridCard";
import products from "../data/products";

const FeaturedProducts = () => {
  return (
    <>
      {/* Featured Products */}

      <h2 className="text-lg font-bold mb-6">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white pb-4 rounded-lg shadow hover:shadow-lg transition"
          >
            <img src={product.image} alt="" className="pb-4" />
            <h3 className="text-gray-700">{product.name}</h3>
            <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
