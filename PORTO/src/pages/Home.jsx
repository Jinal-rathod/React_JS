import Header from "../components/home/Header.jsx";
import SidebarLeft from "../components/home/SidebarLeft.jsx";
import FeaturedProducts from "../components/home/FeaturedProducts.jsx";
import BrandLogos from "../components/home/BrandLogos.jsx";
import ProductColumns from "../components/home/ProductColumns.jsx";
import Services from "../components/home/Services.jsx";

const Home = () => {
  return (
    <>
      <div className="">
        <div className="font-sans bg-white">
          <Header />

          <div className="max-w-6xl mx-auto flex gap-6 pt-10">
            <SidebarLeft />
            <div className="flex-1 space-y-10">
              <FeaturedProducts />
              <BrandLogos />
              <ProductColumns />
              <Services />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
