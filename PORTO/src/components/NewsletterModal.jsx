import { useState } from "react";

export default function NewsletterModal() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/50"
        onClick={() => setIsOpen(false)}
      ></div>

      {/* Modal */}
      <div className="relative w-[90%] md:w-[850px] shadow-2xl overflow-hidden bg-white">
        {/* Close Button */}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-700 text-xl z-10"
        >
          ✕
        </button>

        <div className="grid md:grid-cols-2 min-h-[450px]">
          {/* Left Content */}
          <div className="p-10 flex flex-col justify-center bg-white">
            <img
              src="https://m2.portotheme.com/media/porto/newsletter/logo/default/logo_ecomblue_lg_1.png"
              alt=""
              className="w-30 py-5"
            />

            <h2 className="text-xl font-bold mb-4">SUBSCRIBE TO NEWSLETTER</h2>

            <p className="text-gray-500 mb-6">
              Subscribe to the Porto mailing list to receive updates on new
              arrivals, special offers and our promotions.
            </p>

            {/* Email Input */}
            <div className="flex mb-5">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 border border-gray-300 bg-gray-200 text-gray-400 rounded-l-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white  px-6 py-3 rounded-r-full hover:bg-blue-700 transition">
                SUBMIT
              </button>
            </div>

            {/* Checkbox */}
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <input type="checkbox" />
              <label>Don’t show this popup again</label>
            </div>
          </div>

          {/* Right Side Background Image */}
          <div
            className="hidden md:block bg-cover bg-right"
            style={{
              backgroundImage:
                "url('https://m2.portotheme.com/static/version1711849646/frontend/Smartwave/porto/en_US/images/shop_newsletter_popup.jpg')",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
