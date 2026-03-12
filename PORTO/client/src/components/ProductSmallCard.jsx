const ProductSmallCard = ({ product }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={product.image} className="w-20 h-20 object-cover" />
      <div>
        <h4 className="text-sm font-semibold">{product.name}</h4>
        <p className="text-gray-800 font-semibold text-lg">{product.price}</p>
      </div>
    </div>
  );
};

export default ProductSmallCard;
