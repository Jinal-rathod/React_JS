const SidebarLeft = () => {
  return (
    <div className="w-full lg:w-72 space-y-6">

      {/* SALE BOX */}
      <div className="border flex flex-col justify-center items-center text-center py-6 px-4">
        <img
          src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_off.png"
          alt=""
          className="w-20 sm:w-24"
        />

        <h3 className="flex items-center font-bold my-3 text-5xl sm:text-6xl lg:text-7xl">
          <small className="text-xs sm:text-sm flex flex-col mr-1">
            UP TO
          </small>

          50

          <div className="text-2xl sm:text-3xl lg:text-4xl text-left ml-1">
            <p>%</p>
            <p className="text-sm sm:text-lg">OFF</p>
          </div>
        </h3>

        <p className="text-gray-400 mt-2 px-2 text-sm">
          Bags, Clothing, T-Shirts, Shoes, Watches and much more...
        </p>

        <a
          href="#"
          className="bg-black px-5 py-2 text-sm font-bold text-white mt-4 hover:bg-gray-800 transition"
        >
          VIEW SALE
        </a>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-gray-100 p-5 sm:p-6 shadow rounded text-center">
        <h3 className="font-bold text-sm sm:text-base">
          SUBSCRIBE NEWSLETTER
        </h3>

        <p className="text-xs sm:text-sm text-gray-500 mt-3">
          Get all the latest information on Events, Sales and Offers.
        </p>

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-full my-4 bg-white text-gray-400 text-sm outline-none"
        />

        <button className="w-full bg-blue-600 text-white py-2 font-bold text-sm hover:bg-blue-700">
          SUBSCRIBE
        </button>
      </div>

      {/* TESTIMONIAL */}
      <div className="bg-white p-5 sm:p-6 py-8 shadow rounded border-2 border-blue-500">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt=""
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-full"
          />

          <div>
            <h4 className="font-semibold text-sm sm:text-base">
              John Smith
            </h4>
            <p className="text-xs sm:text-sm text-gray-500">
              CEO & Founder
            </p>
          </div>
        </div>

        <p className="text-sm text-gray-600 mt-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Fashion Trends */}
      <div className="flex flex-col text-left py-6">
        <img
          src="https://m2.portotheme.com/media/magefan_blog/shop1_post4_thumb.jpg"
          alt=""
          className="w-full rounded"
        />

        <h3 className="text-lg sm:text-xl font-bold mt-4">
          Fashion Trends
        </h3>

        <p className="text-gray-400 mt-2 text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
          placerat mi. Etiam non...
        </p>

        <a
          href="#"
          className="text-sm font-semibold mt-2 hover:text-blue-600"
        >
          read more &gt;
        </a>
      </div>

    </div>
  );
};

export default SidebarLeft;