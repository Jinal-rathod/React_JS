const ProductGridCard = ({ product }) => {
  return (
    <div className="bg-white p-4 shadow rounded hover:shadow-lg transition">
      <img src={product.image} className="h-40 mx-auto mb-4" />
      <h3 className="text-gray-700">{product.name}</h3>
      <p className="text-blue-600 font-semibold mt-2">{product.price}</p>
    </div>
  );
};

export default ProductGridCard;
