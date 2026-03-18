import ProductGridCard from "../ProductGridCard";
import { useEffect, useState, useContext } from "react"
import { WishlistContext } from "../wishlist/WishlistContext";
import axios from "axios"

const FeaturedProducts = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    axios.get("http://localhost:3000/products")
      .then(res => {
        setProducts(res.data)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])

  const { toggleWishlist, isInWishlist } = useContext(WishlistContext);

  return (
    <>

      {/* Featured Products */}

      <h2 className="text-lg font-bold mb-6">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white pb-4 rounded-lg transition">
            <img src={product.image} alt="" className="pb-4" />
            <h3 className="text-gray-700 flex justify-between">
              {product.name}
              <i
                className={`cursor-pointer text-lg ${isInWishlist(product.id)
                  ? "fa-solid text-red-500"
                  : "fa-regular"
                  } fa-heart`}
                onClick={() => toggleWishlist(product)}
              ></i>
            </h3>
            <div className="text-gray-300 text-[10px]">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
            <p className="text-gray-800 font-bold text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
