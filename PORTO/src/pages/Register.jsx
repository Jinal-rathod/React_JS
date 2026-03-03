import { Link } from "react-router-dom";
import TopNavbar from "../components/TopNavbar";

export default function Register() {
  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />

      {/* Page Title */}
      <div className="bg-gray-100 py-12">
        <h1 className="text-3xl font-semibold text-center">
          Create New Customer Account
        </h1>
      </div>

      {/* Form Section */}    
      <main className="flex-1 container mx-auto px-4 py-12">
        <div className="bg-white p-10 rounded">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Personal Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm mb-1 text-gray-500">
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-500">
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input type="checkbox" />
                  <label className="text-sm text-gray-600">
                    Sign Up for Newsletter
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="mt-30">
                <button className="bg-gray-900 w-full text-white px-10 py-3 rounded hover:bg-black transition">
                  <Link to={`/login`}>REGISTER</Link>
                </button>
              </div>
            </div>

            {/* Sign-in Information */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Sign-in Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label className="block text-sm mb-1 text-gray-500">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-500">
                    Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                  <p className="text-xs text-gray-400 mt-1">
                    Password Strength: No Password
                  </p>
                </div>

                <div>
                  <label className="block text-sm mb-1 text-gray-500">
                    Confirm Password <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="password"
                    className="w-full border border-gray-300 px-4 py-2 rounded focus:ring-2 focus:ring-blue-500 outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
