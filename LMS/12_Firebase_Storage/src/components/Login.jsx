import { useState } from "react";

export default function Login() {
    const [show, setShow] = useState(false);

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0f172a] relative overflow-hidden">

            {/* 🔵 Floating Gradient Circles */}
            <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>
            <div className="absolute w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-30 top-1/2 left-1/2"></div>

            {/* 💎 Glass Card */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white">

                <h2 className="text-2xl font-semibold text-center mb-6 tracking-widest">
                    LOGIN
                </h2>

                {/* Email */}
                <div className="mb-4">
                    <label className="text-sm text-gray-300">Email address</label>
                    <input
                        type="email"
                        placeholder=""
                        className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Password */}
                <div className="mb-4 relative">
                    <label className="text-sm text-gray-300">Password</label>
                    <input
                        type={show ? "text" : "password"}
                        className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />

                    {/* 👁 Toggle */}
                    <span
                        onClick={() => setShow(!show)}
                        className="absolute right-3 top-9 cursor-pointer text-gray-300"
                    >
                        👁
                    </span>
                </div>

                {/* Remember + Forgot */}
                <div className="flex justify-between text-sm text-gray-300 mb-6">
                    <label className="flex items-center gap-2">
                        <input type="checkbox" />
                        Remember me
                    </label>

                    <span className="cursor-pointer hover:text-white">
                        Forgot password?
                    </span>
                </div>

                {/* Button */}
                <button className="w-full py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 hover:scale-105 transition-all">
                    SIGN IN
                </button>
            </div>
        </div>
    );
}