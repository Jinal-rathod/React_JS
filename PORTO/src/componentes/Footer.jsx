const Footer = () => {
  return (
    <footer className="bg-[#0B1C2D] text-gray-300 pt-12 pb-6">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* About Us */}
          <div>
            <h3 className="text-sm text-gray-400 mb-2">ABOUT US</h3>
            <h1 className="text-3xl font-bold text-white">PORTO</h1>
            <p className="text-xs text-gray-400 -mt-1 mb-4">eCommerce</p>

            <p className="text-sm text-gray-400 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis nec
              vestibulum magna, et dapibus lacus. Duis nec vestibulum magna, et
              dapibus lacus.
            </p>

            <p className="mt-3 text-white underline cursor-pointer">
              read more...
            </p>

            <div className="flex space-x-4 mt-4">
              <i className="fa-brands fa-facebook-f cursor-pointer"></i>
              <i className="fa-brands fa-twitter cursor-pointer"></i>
              <i className="fa-brands fa-linkedin-in cursor-pointer"></i>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">CONTACT INFO</h3>

            <p className="text-gray-400 text-sm mb-2">ADDRESS:</p>
            <p className="text-sm mb-4">123 Street Name, City, England</p>

            <p className="text-gray-400 text-sm mb-2">PHONE:</p>
            <p className="text-sm mb-4">(123) 456-7890</p>

            <p className="text-gray-400 text-sm mb-2">EMAIL:</p>
            <p className="text-sm mb-4">mail@example.com</p>

            <p className="text-gray-400 text-sm mb-2">WORKING DAYS/HOURS:</p>
            <p className="text-sm">Mon - Sun / 9:00 AM - 8:00 PM</p>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="text-white font-semibold mb-4">CUSTOMER SERVICE</h3>
            <ul className="space-y-2 text-sm">
              <li className="cursor-pointer hover:text-white">Help & FAQs</li>
              <li className="cursor-pointer hover:text-white">
                Order Tracking
              </li>
              <li className="cursor-pointer hover:text-white">
                Shipping & Delivery
              </li>
              <li className="cursor-pointer hover:text-white">
                Orders History
              </li>
              <li className="cursor-pointer hover:text-white">
                Advanced Search
              </li>
              <li className="cursor-pointer hover:text-white">My Account</li>
              <li className="cursor-pointer hover:text-white">Careers</li>
              <li className="cursor-pointer hover:text-white">About Us</li>
              <li className="cursor-pointer hover:text-white">
                Corporate Sales
              </li>
              <li className="cursor-pointer hover:text-white">Privacy</li>
            </ul>
          </div>

          {/* Popular Tags */}
          <div>
            <h3 className="text-white font-semibold mb-4">POPULAR TAGS</h3>
            <div className="flex flex-wrap gap-2">
              {[
                "Bag",
                "Black",
                "Blue",
                "Clothes",
                "Fashion",
                "Hub",
                "Jean",
                "Shirt",
                "Skirt",
                "Sports",
                "Sweater",
                "Winter",
              ].map((tag) => (
                <span
                  key={tag}
                  className="border border-gray-600 px-3 py-1 text-sm cursor-pointer hover:bg-gray-800"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        <hr className="border-gray-700 mb-6" />

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© Porto Magento 2023. All Rights Reserved</p>

          <div className="flex space-x-4 mt-4 md:mt-0 text-5xl ">
            <i class="fa-brands fa-cc-visa "></i>
            <i class="fa-brands fa-cc-paypal"></i>
            <i class="fa-brands fa-cc-stripe"></i>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Verisign_logo.svg"
              alt="verisign"
              className="h-6"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
