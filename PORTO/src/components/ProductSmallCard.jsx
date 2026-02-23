const ProductSmallCard = ({ product }) => {
  return (
    <div className="flex gap-3 items-center">
      <img src={product.image} className="w-16 h-16 object-cover" />
      <div>
        <h4 className="text-sm">{product.name}</h4>
        <p className="text-blue-600 font-semibold text-sm">
          {product.price}
        </p>
      </div>
    </div>
  );
};

export default ProductSmallCard;