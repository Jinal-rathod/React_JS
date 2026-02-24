const SidebarLeft = () => {
  return (
    <div className="w-72 space-y-6">
      {/* SALE BOX */}
      <div className="border flex flex-col justify-center items-center text-center py-5">
        <img
          src="https://m2.portotheme.com/media/wysiwyg/smartwave/porto/homepage/01/shop1_off.png"
          alt=""
        />
        <h3 className="text-8xl flex items-center font-bold my-3">
          <small className="text-sm flex flex-col">UP TO</small>
          50
          <div className="text-5xl text-left">
            <p>%</p>
            <p className="text-2xl">OFF</p>
          </div>
        </h3>
        <p className="text-gray-400 mt-3 px-2">
          Bags, Clothing, T-Shirts, Shoes, Watches and much more...
        </p>
        <a
          href="#"
          className="bg-black px-4 py-3 w-35 font-bold text-white mt-4"
        >
          VIEW SALE
        </a>
      </div>

      {/* NEWSLETTER */}
      <div className="bg-gray-100 p-6 shadow rounded text-center">
        <h3 className="font-bold">SUBSCRIBE NEWSLETTER</h3>
        <p className="text-sm text-gray-500 mt-3">
          Get all the latest information on Events, Sales and Offers.
        </p>
        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 rounded-full my-4 bg-white text-gray-400 text-sm"
        />
        <button className="w-30 bg-blue-600 text-white py-3 font-bold text-sm">
          SUBSCRIBE
        </button>
      </div>

      {/* TESTIMONIAL */}
      <div className="bg-white p-6 py-10 shadow rounded border border-blue-500 border-3">
        <div className="flex items-center gap-3">
          <img
            src="https://randomuser.me/api/portraits/men/32.jpg"
            className="w-12 h-12 rounded-full"
          />
          <div>
            <h4 className="font-semibold">John Smith</h4>
            <p className="text-sm text-gray-500">CEO & Founder</p>
          </div>
        </div>

        <p className="text-md text-gray-600 mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      {/* Fashion Trands */}

      <div className=" flex flex-col justify-left items-left text-left py-10">
        <img
          src="https://m2.portotheme.com/media/magefan_blog/shop1_post4_thumb.jpg"
          alt=""
        />
        <h3 className="text-xl flex items-center font-bold mt-5">
          Fashion Trands
        </h3>
        <p className="text-gray-400 mt-3 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras non
          placerat mi. Etiam non...
        </p>
        <a href="#" className="text-sm font-semibold">
          read more &gt;
        </a>
      </div>
    </div>
  );
};

export default SidebarLeft;
