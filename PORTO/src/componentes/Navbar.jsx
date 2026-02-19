import logo from "../assets/logo_ecomblue_lg.png";

const Navbar = () => {
  return (
    <>
      {/* Top Bar */}
      <div className="bg-[#0088cc] text-white text-sm">
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
          integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
        <div className="max-w-7xl mx-auto px-4 py-2 flex justify-between items-center">
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
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={logo} alt="" className="w-28" />
          </div>

          {/* Search Bar */}
          <div className="flex items-center border rounded-full px-4 py-2 w-1/2 bg-gray-100">
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
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-5">
              <i className="fa-solid fa-phone text-[#0088cc] text-lg"></i>
              <div>
                <p className="text-xs text-gray-500">CALL US NOW</p>
                <p className="font-bold text-sm">+123 5678 890</p>
              </div>
            </div>

            <i className="fa-regular fa-user text-xl cursor-pointer"></i>
            <i className="fa-regular fa-heart text-xl cursor-pointer"></i>

            <div className="relative">
              <i className="fa-solid fa-cart-shopping text-xl cursor-pointer"></i>
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

// import React from "react";
// import logo from "../assets/logo_ecomblue_lg.png";
// import banner from "../assets/shop1_home_slider1.png"

// const Navbar = () => {
//   return (
//     <div>
//       <link
//         rel="stylesheet"
//         href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/7.0.1/css/all.min.css"
//         integrity="sha512-2SwdPD6INVrV/lHTZbO2nodKhrnDdJK9/kg2XD1r9uGqPo1cUbujc+IYdlYdEErWNu69gVcYgdxlmVmzTWnetw=="
//         crossOrigin="anonymous"
//         referrerPolicy="no-referrer"
//       />

//       {/* <nav class="bg-blue-500 w-full z-20 top-0 start-0 border-b border-default">
//         <div class="max-w-screen-xl text-slate-200 flex flex-wrap items-center justify-between mx-auto p-4">
//           <a
//             href="https://flowbite.com/"
//             class="flex items-center space-x-3 rtl:space-x-reverse"
//           >
//             <img
//               src="https://flowbite.com/docs/images/logo.svg"
//               class="h-7"
//               alt="Flowbite Logo"
//             />
//             <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
//               Flowbite
//             </span>
//           </a>
//           <button
//             data-collapse-toggle="navbar-default"
//             type="button"
//             class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
//             aria-controls="navbar-default"
//             aria-expanded="false"
//           >
//             <span class="sr-only">Open main menu</span>
//             <svg
//               class="w-6 h-6"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               fill="none"
//               viewBox="0 0 24 24"
//             >
//               <path
//                 stroke="currentColor"
//                 stroke-linecap="round"
//                 stroke-width="2"
//                 d="M5 7h14M5 12h14M5 17h14"
//               />
//             </svg>
//           </button>
//           <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//             <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                   aria-current="page"
//                 >
//                   WELCOM
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   BLOG
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   SIGN IN
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   CONTACT US
//                 </a>
//               </li>
//               <li>
//                 <a
//                   href="#"
//                   class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                 >
//                   CREATE AN ACCOUNT
//                 </a>
//               </li>
//               <li class="space-x-5">
//                 <i class="fa-brands fa-facebook-f"></i>
//                 <i class="fa-brands fa-twitter"></i>
//                 <i class="fa-brands fa-instagram"></i>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//       <div>
//         <div>
//           <img src={logo} alt="" className="w-35"/>
//         </div>
//         <div>
//         <input type="text" name="" id="" />
//         </div>
//       </div> */}

//       <>
//         {/* Top Offer Bar */}
//         <nav class="bg-blue-500 w-full top-0 start-0 border-b border-default">
//           <div class="max-w-screen-xl text-slate-200 flex flex-wrap items-center justify-between mx-auto p-4">
//             <a
//               href="https://flowbite.com/"
//               class="flex items-center space-x-3 rtl:space-x-reverse"
//             >
//               <img
//                 src="https://flowbite.com/docs/images/logo.svg"
//                 class="h-7"
//                 alt="Flowbite Logo"
//               />
//               <span class="self-center text-xl text-heading font-semibold whitespace-nowrap">
//                 Flowbite
//               </span>
//             </a>
//             <button
//               data-collapse-toggle="navbar-default"
//               type="button"
//               class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-body rounded-base md:hidden hover:bg-neutral-secondary-soft hover:text-heading focus:outline-none focus:ring-2 focus:ring-neutral-tertiary"
//               aria-controls="navbar-default"
//               aria-expanded="false"
//             >
//               <span class="sr-only">Open main menu</span>
//               <svg
//                 class="w-6 h-6"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="24"
//                 height="24"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   stroke="currentColor"
//                   stroke-linecap="round"
//                   stroke-width="2"
//                   d="M5 7h14M5 12h14M5 17h14"
//                 />
//               </svg>
//             </button>
//             <div class="hidden w-full md:block md:w-auto" id="navbar-default">
//               <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                     aria-current="page"
//                   >
//                     WELCOM
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                   >
//                     BLOG
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                   >
//                     SIGN IN
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                   >
//                     CONTACT US
//                   </a>
//                 </li>
//                 <li>
//                   <a
//                     href="#"
//                     class="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
//                   >
//                     CREATE AN ACCOUNT
//                   </a>
//                 </li>
//                 <li class="space-x-5">
//                   <i class="fa-brands fa-facebook-f"></i>
//                   <i class="fa-brands fa-twitter"></i>
//                   <i class="fa-brands fa-instagram"></i>
//                 </li>
//               </ul>
//             </div>
//           </div>
//         </nav>

//         {/* Navbar */}
//         <header className="bg-white shadow">
//           <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <div className="container flex justify-between items-center">
//               <div className="bg-white shadow p-4 rounded w-full flex">
//                 {/* <i class="fa-solid fa-truck-fast"></i> */}
//                 <div>
//                   <h3 className="font-semibold">FREE SHIPPING & RETURN</h3>
//                   <p className="text-gray-400">
//                     Free shipping on all orders over $99
//                   </p>
//                 </div>
//               </div>
//               <div className="bg-white shadow p-4 rounded w-full">
//                 <h3 className="font-semibold">MONEY BACK GUARANTEE</h3>
//                 <p className="text-gray-400">100% money back guarantee</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded w-full">
//                 <h3 className="font-semibold">ONLINE SUPPORT 24/7</h3>
//                 <p className="text-gray-400">Lorem ipsum dolor sit amet.</p>
//               </div>
//             </div>
//           </div>
//           <div className="container mx-auto px-4 py-4 flex justify-between items-center">
//             <img src={logo} alt="" className="w-30" />
//             <div className="flex w-1/2">
//               <input
//                 type="text"
//                 placeholder="Search..."
//                 className="w-full border p-2 rounded-l-md"
//               />
//               <button className="bg-blue-600 text-white px-4 rounded-r-md">
//                 Search
//               </button>
//             </div>
//             <div className="space-x-4 text-gray-600">❤️ 🛒 👤</div>
//           </div>
//         </header>
//         {/* Main Layout */}
//         <div className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">
//           {/* Sidebar */}
//           <aside className="col-span-3 bg-white p-4 shadow rounded">
//             <h2 className="font-semibold mb-4">Browse Categories</h2>
//             <ul className="space-y-2 text-gray-600">
//               <li className="hover:text-blue-600 cursor-pointer">Home</li>
//               <li className="hover:text-blue-600 cursor-pointer">Categories</li>
//               <li className="hover:text-blue-600 cursor-pointer">Products</li>
//               <li className="hover:text-blue-600 cursor-pointer">Blog</li>
//               <li className="hover:text-blue-600 cursor-pointer">About Us</li>
//             </ul>
//             {/* Sale Box */}
//             <div className="bg-blue-50 mt-6 p-4 text-center rounded">
//               <p className="text-blue-600 font-bold text-lg">50% OFF</p>
//               <button className="mt-2 bg-blue-600 text-white px-4 py-1 rounded">
//                 View Sale
//               </button>
//             </div>
//           </aside>
//           {/* Content */}
//           <main className="col-span-9 space-y-6">
//             {/* Hero Banner */}
//               <img src={banner} className="rounded absolute" />
//             <div className="text-white p-8 rounded flex justify-between items-center relative">
//               <div>
//                 <p>Find the Boundaries. Push Through!</p>
//                 <h2 className="text-3xl font-bold">Summer Sale</h2>
//                 <p className="text-xl">70% OFF</p>
//                 <button className="mt-3 bg-black px-5 py-2 rounded">
//                   Shop Now
//                 </button>
//               </div>
//             </div>
//             {/* Promo Cards */}
//             <div className="grid grid-cols-3 gap-4">
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="font-semibold">Porto Watches</h3>
//                 <p className="text-blue-600">30% OFF</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="font-semibold">Deal Promos</h3>
//                 <p>Starting at $99</p>
//               </div>
//               <div className="bg-white shadow p-4 rounded">
//                 <h3 className="font-semibold">Handbags</h3>
//                 <p className="text-red-500">40% OFF</p>
//               </div>
//             </div>
//             {/* Featured Products */}
//             <section>
//               <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
//               <div className="grid grid-cols-4 gap-6">
//                 {/* Product Card */}
//                 <div className="bg-white p-4 shadow rounded text-center">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     className="mx-auto mb-2"
//                   />
//                   <p>Camera</p>
//                   <p className="font-bold">$599</p>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded text-center">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     className="mx-auto mb-2"
//                   />
//                   <p>Headphones</p>
//                   <p className="font-bold">$101</p>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded text-center">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     className="mx-auto mb-2"
//                   />
//                   <p>Shoes</p>
//                   <p className="font-bold">$101</p>
//                 </div>
//                 <div className="bg-white p-4 shadow rounded text-center">
//                   <img
//                     src="https://via.placeholder.com/150"
//                     className="mx-auto mb-2"
//                   />
//                   <p>Bag</p>
//                   <p className="font-bold">$299</p>
//                 </div>
//               </div>
//             </section>
//           </main>
//         </div>
//         {/* Newsletter */}
//         <section className="bg-white py-8 shadow mt-8">
//           <div className="container mx-auto text-center">
//             <h2 className="text-xl font-semibold">Subscribe Newsletter</h2>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               className="border p-2 mt-4 rounded"
//             />
//             <button className="bg-blue-600 text-white px-4 py-2 rounded ml-2">
//               Subscribe
//             </button>
//           </div>
//         </section>
//         {/* Footer */}
//         <footer className="bg-gray-900 text-gray-300 mt-8 py-8">
//           <div className="container mx-auto grid grid-cols-4 gap-6">
//             <div>
//               <h3 className="text-white font-semibold mb-2">About Us</h3>
//               <p className="text-sm">Porto Ecommerce template UI example.</p>
//             </div>
//             <div>
//               <h3 className="text-white font-semibold mb-2">Contact Info</h3>
//               <p>City, England</p>
//               <p>123-456-7890</p>
//             </div>
//             <div>
//               <h3 className="text-white font-semibold mb-2">
//                 Customer Service
//               </h3>
//               <ul className="space-y-1 text-sm">
//                 <li>Help &amp; FAQs</li>
//                 <li>Shipping</li>
//                 <li>Privacy</li>
//               </ul>
//             </div>
//             <div>
//               <h3 className="text-white font-semibold mb-2">Popular Tags</h3>
//               <div className="flex flex-wrap gap-2">
//                 <span className="bg-gray-700 px-2 py-1 rounded text-sm">
//                   Fashion
//                 </span>
//                 <span className="bg-gray-700 px-2 py-1 rounded text-sm">
//                   Clothes
//                 </span>
//                 <span className="bg-gray-700 px-2 py-1 rounded text-sm">
//                   Sports
//                 </span>
//               </div>
//             </div>
//           </div>
//           <p className="text-center text-sm mt-6">© 2026 Porto Ecommerce</p>
//         </footer>
//       </>
//     </div>
//   );
// };

// export default Navbar;
