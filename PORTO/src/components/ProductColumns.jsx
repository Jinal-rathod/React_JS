import products from "../data/products";
import ProductSmallCard from "./ProductSmallCard";

const ProductColumns = () => {
  return (
    <div className="grid grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold mb-4">TOP RATED PRODUCTS</h3>
        <div className="space-y-4">
          {products.slice(0, 3).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">BEST SELLING PRODUCTS</h3>
        <div className="space-y-4">
          {products.slice(1, 4).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">LATEST PRODUCTS</h3>
        <div className="space-y-4">
          {products.slice(0, 3).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductColumns;
