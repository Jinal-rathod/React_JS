import ProductGridCard from "../ProductGridCard";
import { useEffect, useState, useContext } from "react"
import { WishlistContext } from "../../context/WishlistContext.jsx";
import { CartContext } from "../../context/CartContext.jsx";
import axios from "axios"

const FeaturedProducts = () => {

  const [products, setProducts] = useState([]);

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
  const { toggleCart, isInCart } = useContext(CartContext);

  return (
    <>

      {/* Featured Products */}

      <h2 className="text-lg font-bold mb-6">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div
            key={index}
            className="group bg-white pb-4 rounded-lg overflow-hidden "
          >
            {/* Image Container */}
            <div className="relative overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-full h-48 object-cover transform"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 flex items-center justify-center gap-3">

                {/* Cart Icon */}
                <div className="absolute top-0 right-0 p-2">
                  <i className={`text-lg cursor-pointer mx-1 ${isInCart(product.id)
                    ? "fa-solid fa-bag-shopping text-blue-500"
                    : "fa-solid fa-bag-shopping"}
                  `} onClick={() => toggleCart(product)}></i>
                  <i className="fa-solid fa-chart-simple text-lg cursor-pointer mx-1"></i>
                </div>

                {/* Quick View button*/}
                <div className="absolute bottom-0 p-2">
                  <a href="#" className="bg-blue-500 py-2 text-white px-15">QUICKVIEW</a>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="px-2">
              <h3 className="text-gray-700 flex justify-between items-center mt-2">
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
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
