export default function ShippingForm() {
  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-6 border-b border-gray-300 pb-2">
        SHIPPING ADDRESS
      </h2>

      <form className="space-y-5">
        <div className="border-b border-gray-300 pb-7 mb-7">
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Email Address *
          </label>
          <input
            type="email"
            className="w-full border border-gray-300 px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <span className="text-gray-500">
            You can create an account after checkout.
          </span>
        </div>

        <div className="mb-7">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              First Name *
            </label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded " />
          </div>
        </div>
        <div className="mb-7">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              Last Name *
            </label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
        </div>

        <div className="mb-7">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              Company
            </label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Street Address *
          </label>
          <span className="text-gray-500">Street Address Line 1</span>
          <input className="w-full border border-gray-300 px-3 py-2 rounded mb-2" />
          <input className="w-full border border-gray-300 px-3 py-2 rounded mb-2" />
          <input className="w-full border border-gray-300 px-3 py-2 rounded mb-2" />
        </div>

        <div className="">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              Country *
            </label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded text-gray-500 ">
              <option>United States</option>
            </select>
          </div>
        </div>
        <div className="">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              State/Province *
            </label>
            <select className="w-full border border-gray-300 px-3 py-2 rounded text-gray-500">
              <option>Please select a region, state or province.</option>
            </select>
          </div>
        </div>

        <div className="">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              City *
            </label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
        </div>
        <div className="">
          <div>
            <label className="block text-sm font-medium mb-1 text-gray-500">
              Zip/Postal Code *
            </label>
            <input className="w-full border border-gray-300 px-3 py-2 rounded" />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1 text-gray-500">
            Phone Number *
          </label>
          <input className="w-full border border-gray-300 px-3 py-2 rounded" />
        </div>

        {/* Shipping Methods */}
        <div className="pt-6 border-t">
          <h3 className="font-bold mb-3 ">SHIPPING METHODS</h3>

          <div className="grid grid-cols-4 border-b border-gray-300 p-3 rounded mb-2 text-gray-500">
            <div>
              <input type="radio" name="shipping" className="mr-2 " />
              Free Shipping
            </div>
            <span>$0.00</span>
            <span>Free</span>
            <span>Free Shipping</span>
          </div>

          <div className="grid grid-cols-4 border-b border-gray-300 p-3 rounded text-gray-500">
            <div>
              <input type="radio" name="shipping" className="mr-2" />
              Flat Rate
            </div>
            <span>$5.00</span>
            <span>Fixed</span>
            <span>Flat Rate</span>
          </div>
        </div>

        <button
          type="submit"
          className="mt-6 bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
        >
          NEXT
        </button>
      </form>
    </div>
  );
}
