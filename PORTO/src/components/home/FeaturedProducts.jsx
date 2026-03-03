import ProductGridCard from "../ProductGridCard";
import products from "../../data/products";

const FeaturedProducts = () => {
  return (
    <>
      {/* content */}
      <div className="flex justify-between">
        <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_home_ads1.jpg" className="object-cover" alt="" />
        <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_home_ads2.jpg" className="object-cover" alt="" />
        <img src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_home_ads3.jpg" className="object-cover" alt="" />
      </div>

      {/* Featured Products */}

      <h2 className="text-lg font-bold mb-6">FEATURED PRODUCTS</h2>

      <div className="grid grid-cols-4 gap-4">
        {products.map((product, index) => (
          <div key={index} className="bg-white pb-4 rounded-lg transition">
            <img src={product.image} alt="" className="pb-4" />
            <h3 className="text-gray-700 flex justify-between">
              {product.name}
              <i class="fa-regular fa-heart"></i>
            </h3>
            <div className="text-gray-300 text-[10px]">
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
              <i class="fa-solid fa-star"></i>
            </div>
            <p className="text-gray-800 font-bold text-lg">{product.price}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
