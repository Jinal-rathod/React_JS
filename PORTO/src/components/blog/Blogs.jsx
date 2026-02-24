import React from "react";

const Blogs = () => {
  return (
    <div className="min-h-screen">
      {/* Top Navbar */}
      <div className=" bg-gray-100 text-center ">
        <div className=" max-w-6xl mx-auto py-5 flex text-sm font-medium text-gray-600 space-x-6">
          <a href="#" className="hover:text-black">
            HOME
          </a>
          <a href="#" className="hover:text-black">
            CATEGORIES
          </a>
          <a href="#" className="hover:text-black">
            PRODUCTS
          </a>
          <a href="#" className="hover:text-black">
            PAGES
          </a>
          <a href="#" className="hover:text-black">
            FEATURES
          </a>
          <a href="#" className="hover:text-black">
            BLOG
          </a>
          <a href="#" className="hover:text-black">
            ABOUT US
          </a>
          <a href="#" className="hover:text-black">
            BUY PORTO!
          </a>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        {/* LEFT CONTENT */}
        <div className="lg:col-span-2">
          <h1 className="text-2xl font-bold text-blue-500 mb-8">
            Monthly Archives: January 2021
          </h1>

          {/* Blog Post 1 */}
          <div className="pb-6 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://m2.portotheme.com/media/magefan_blog/shop1_post4_thumb.jpg"
                alt=""
                className="w-full md:w-68 h-50 object-cover"
              />

              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-500">
                  Fashion Trends
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  admin admin - January 13, 2021
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
                  non placerat mi. Etiam non tellus sem. Aenean pretium
                  convallis lorem.
                </p>

                <button className="bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Blog Post 2 */}
          <div className="py-6 mb-10 border-b border-gray-200">
            <div className="flex flex-col md:flex-row gap-6">
              <img
                src="https://m2.portotheme.com/media/magefan_blog/shop4_post3_thumb.jpg"
                alt=""
                className="w-full md:w-68 h-50 object-cover"
              />

              <div>
                <h2 className="text-2xl font-semibold mb-2 text-gray-500">
                  Post Format Video
                </h2>
                <p className="text-sm text-gray-500 mb-3">
                  admin admin - January 12, 2021
                </p>
                <p className="text-gray-600 mb-4 text-sm">
                  Leap into electronic typesetting, remaining essentially
                  unchanged. It was popularised in the 1960s with the release of
                  Letraset sheets.
                </p>

                <button className="bg-blue-600 text-white px-6 py-2 font-semibold hover:bg-blue-700 transition">
                  READ MORE
                </button>
              </div>
            </div>
          </div>

          {/* Pagination */}
          <div className="flex gap-3 mt-6">
            <button className="border border-gray-300 px-3 py-1 text-gray-600 font-bold hover:border-blue-500 focus:border-blue-500">
              1
            </button>
            <button className="border border-gray-300 px-3 py-1 text-gray-600 font-bold hover:border-blue-500 focus:border-blue-500">
              2
            </button>
            <button className="border border-gray-300 px-3 py-1 text-gray-600 font-bold hover:border-blue-500 focus:border-blue-500">
              &gt;
            </button>
          </div>
        </div>

        {/* RIGHT SIDEBAR */}
        <div>
          {/* Search */}
          <div className="bg-white p-6 pb-4">
            <div className="flex">
              <input
                type="text"
                placeholder="Search posts here..."
                className="w-full border border-gray-300 text-gray-400 px-4 py-2"
              />
              <button className="bg-black text-white px-4">🔍</button>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white p-6 pt-2">
            <h3 className="text-lg font-semibold mb-4">Categories</h3>
            <ul className="text-gray-500">
              <li className="border-b border-gray-200 py-2">
                Haircuts & hairstyles
              </li>
              <li className="border-b border-gray-200 py-2">Fashion trends</li>
              <li className="border-b border-gray-200 py-2">Accessories</li>
              <li className="border-b border-gray-200 py-2">
                Make-up & beauty
              </li>
              <li className="border-b border-gray-200 py-2">
                All about clothing
              </li>
            </ul>
          </div>

          {/* Recent Posts */}
          <div className="bg-white p-6 pt-0">
            <h3 className="text-lg font-semibold mb-4">Recent Posts</h3>

            <div className="flex gap-4 mb-4">
              <img
                src="https://m2.portotheme.com/media/magefan_blog/shop1_post4_thumb.jpg"
                className="w-16 h-16 object-cover"
                alt=""
              />
              <div>
                <p className="font-medium text-blue-500">Fashion Trends</p>
                <p className="text-sm text-gray-500">January 13, 2021</p>
              </div>
            </div>

            <div className="flex gap-4">
              <img
                src="https://m2.portotheme.com/media/magefan_blog/shop4_post3_thumb.jpg"
                className="w-16 h-16 object-cover"
                alt=""
              />
              <div>
                <p className="font-medium text-blue-500">Post Format Video</p>
                <p className="text-sm text-gray-500">January 12, 2021</p>
              </div>
            </div>
          </div>

          {/* Archive */}
          <div className="bg-white px-6">
            <h3 className="text-lg font-semibold">Archive</h3>
            <p className="text-gray-700 border-b border-gray-200 py-2">
              January 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
