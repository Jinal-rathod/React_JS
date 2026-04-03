import ProductSmallCard from "../ProductSmallCard";
import { useEffect, useState } from "react"
import axios from "axios"

const ProductColumns = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:4000/api/products")
      .then(res => {
        setProducts(res.data.products)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
      <div>
        <h3 className="font-bold mb-4">TOP RATED PRODUCTS</h3>
        <div className="space-y-4">
          { Array.isArray(products) && products.slice(0, 3).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">BEST SELLING PRODUCTS</h3>
        <div className="space-y-4">
          {Array.isArray(products) && products.slice(1, 4).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="font-bold mb-4">LATEST PRODUCTS</h3>
        <div className="space-y-4">
          {Array.isArray(products) && products.slice(0, 3).map((p, i) => (
            <ProductSmallCard key={i} product={p} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductColumns;
