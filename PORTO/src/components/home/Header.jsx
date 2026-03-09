import { Outlet, Link } from "react-router-dom";


const Header = () => {
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
    integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
    crossOrigin="anonymous"
    referrerPolicy="no-referrer"
  />;
  return (
    <div className="font-sans bg-white">
      <div className="py-2 px-4 mt-5">
        <div className="max-w-6xl mx-auto ">
          <div className="flex flex-wrap lg:flex-nowrap justify-between items-center">
            <div className="border border-gray-200 w-full">
              <div className="flex p-4 items-center gap-4">
                <i class="fa-solid fa-truck text-2xl"></i>
                <div>
                  <p className="font-bold text-md">FREE SHIPPING & RETURN</p>
                  <p className="text-sm text-gray-500">
                    Free shipping on all orders over $99
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 w-full">
              <div className="flex p-4 items-center gap-4">
                <i class="fa-solid fa-dollar-sign  text-2xl"></i>
                <div>
                  <p className="font-bold text-md">MONEY BACK GUARANTEE</p>
                  <p className="text-sm text-gray-500">
                    100% money back guarantee
                  </p>
                </div>
              </div>
            </div>
            <div className="border border-gray-200 w-full">
              <div className="flex p-4 items-center gap-4">
                <i class="fa-solid fa-hourglass text-2xl"></i>
                <div>
                  <p className="font-bold text-md">ONLINE SUPPORT 24/7</p>
                  <p className="text-sm text-gray-500">
                    Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex mt-6 gap-6">
        {/* Sidebar */}
        <aside className="w-1/4 bg-white border border-gray-300">
          <h2 className="font-bold bg-gray-200 p-4 py-3">BROWSE CATEGORIES</h2>
          <ul className="text-gray-600 px-4 py-2">
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/`}><i class="fa-solid fa-house me-2"></i>Home</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/categories`}><i class="fa-solid fa-award me-2"></i>Categories</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/cart`}><i class="fa-solid fa-cart-shopping me-2"></i>Shopping Cart</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/checkout`}><i class="fa-solid fa-cash-register me-2"></i>Checkout</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/blog`}><i class="fa-solid fa-layer-group me-2"></i>Blog</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/about`}><i class="fa-solid fa-user-group me-2"></i>About Us</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/contact`}><i class="fa-solid fa-address-book me-2"></i>Contact Us</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer border-b border-gray-200 py-2">
              <Link to={`/login`}><i class="fa-solid fa-circle-user me-2"></i>My Account</Link>
            </li>
            <li className="hover:text-blue-600 cursor-pointer py-2">
              <Link to={`/register`}><i class="fa-solid fa-user-plus me-2"></i>Register</Link>
            </li>
          </ul>
        </aside>

        {/* Hero Section */}
        <section className=" header_img">
          <div className="p-10 text-white flex flex-col justify-center h-full">
            <h4 className="text-gray-300 text-lg">
              Find the Boundaries. Push Through!
            </h4>
            <h2 className="text-5xl mt-1">Summer Sale</h2>
            <h1 className="text-7xl font-bold">70% OFF</h1>
            <div className="my-4 flex items-center gap-4">
              <div>Starting At</div>
              <h4 className="bg-red-400 text-xl w-20 text-center p-1">
                <b>
                  <sup>$</sup>199<sup>99</sup>
                </b>
              </h4>
              <button className="bg-black px-6 py-3 w-40 font-bold">
                SHOP NOW!
              </button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Header;
