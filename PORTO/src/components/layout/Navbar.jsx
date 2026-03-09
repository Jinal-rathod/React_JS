import logo from "../../assets/logo_ecomblue_lg.png";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0088cc] text-white text-sm ">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="max-w-6xl mx-auto px-4 py-2 flex justify-between items-center">
          {/* Left */}
          <div className="flex items-center space-x-4">
            <span className="cursor-pointer">USD ▼</span>
            <span className="cursor-pointer">🇺🇸 ENGLISH ▼</span>
          </div>

          {/* Right */}
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:underline">
              WELCOME
            </a>
            <a href="#" className="hover:underline">
              BLOG
            </a>
            <a href="#" className="hover:underline">
              SIGN IN
            </a>
            <a href="#" className="hover:underline">
              CONTACT US
            </a>
            <a href="#" className="hover:underline">
              CREATE AN ACCOUNT
            </a>

            <i className="fa-brands fa-facebook cursor-pointer"></i>
            <i className="fa-brands fa-twitter cursor-pointer"></i>
            <i className="fa-brands fa-instagram cursor-pointer"></i>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">

          {/* Mobile Menu */}
          <div className="md:hidden flex"><i class=""></i></div>

          {/* Logo */}
          <div>
            <img src={logo} alt="" className="w-28" />
          </div>

          {/* Search icon */}
          <div className="md:hidden flex">
            <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2 cursor-pointer"></i>
          </div>

          {/* Search Bar */}
          <div className="md:flex hidden items-center border rounded-full px-4 py-2 w-1/2 bg-gray-100">
            <input
              type="text"
              placeholder="Search..."
              className="outline-none w-full text-sm"
            />
            <span className="mx-2 text-gray-400">|</span>
            <select className="outline-none text-sm bg-transparent text-gray-500">
              <option>All Categories</option>
            </select>
            <i className="fa-solid fa-magnifying-glass text-gray-500 ml-2 cursor-pointer"></i>
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <div className="lg:flex hidden items-center space-x-3 ">
              <i class="fa-solid fa-phone text-2xl"></i>
              <div>
                <p className="text-xs text-gray-500">CALL US NOW</p>
                <p className="font-bold text-sm">+123 5678 890</p>
              </div>
            </div>

            <i class="fa-solid fa-user text-2xl"></i>
            <i class="fa-solid fa-heart text-2xl"></i>

            <div className="relative">
              <i class="fa-solid fa-bag-shopping text-2xl"></i>
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs w-5 h-5 flex items-center justify-center rounded-full">
                0
              </span>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
