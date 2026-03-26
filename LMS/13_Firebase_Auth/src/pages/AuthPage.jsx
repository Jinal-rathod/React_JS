import { useState } from "react";
import { auth, provider } from "../firebase/firebaseConfig";
import {
    signInWithPopup,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from "firebase/auth";

export default function AuthPage({ setUser }) {
    const [view, setView] = useState("login");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [show, setShow] = useState(false);

    // Google Login
    const handleGoogle = async () => {
        try {
            const res = await signInWithPopup(auth, provider);
            setUser(res.user);
        } catch (error) {
            alert(error.message);
        }
    };

    // Register
    const handleRegister = async () => {
        try {
            if (!email || !password) return alert("Enter email & password");

            const res = await createUserWithEmailAndPassword(auth, email, password);
            setUser(res.user);
        } catch (error) {
            alert(error.message);
        }
    };

    // Login
    const handleLogin = async () => {
        try {
            if (!email || !password) return alert("Enter email & password");

            const res = await signInWithEmailAndPassword(auth, email, password);
            setUser(res.user);
        } catch (error) {
            alert("Invalid email or password", error.message);
        }
    };

    // Forgot Password
    const handleForgot = async () => {
        try {
            if (!email) return alert("Enter your email");

            await sendPasswordResetEmail(auth, email);
            alert("Reset link sent!");
        } catch (error) {
            alert(error.message);
        }
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden">

            {/* 🔵 Background Glow */}
            <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>
            <div className="absolute w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-30 top-1/2 left-1/2"></div>

            {/* LOGIN */}
            {view === "login" && (
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white">

                    <button
                        onClick={handleGoogle}
                        className="w-full p-3 mb-4 rounded-lg bg-blue-900/40 border border-blue-400/20"
                    >
                        Login with Google
                    </button>

                    <h2 className="text-2xl text-center my-6">LOGIN</h2>

                    <div className="mb-4">
                        <label className="text-sm text-gray-300">Email address</label>
                        <input
                            type="email"
                            placeholder=""
                            className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="relative mb-3">
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type={show ? "text" : "password"}
                            className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <span
                            onClick={() => setShow(!show)}
                            className="absolute right-3 top-9 cursor-pointer text-gray-300"
                        >
                            👁
                        </span>
                    </div>

                    <div className="flex justify-between text-sm mb-4">
                        <span onClick={() => setView("forgot")} className="cursor-pointer">
                            Forgot password?
                        </span>
                    </div>

                    <button
                        onClick={handleLogin}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-2"
                    >
                        LOGIN
                    </button>

                    <button
                        onClick={() => setView("register")}
                        className="w-full py-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full"
                    >
                        SIGN UP
                    </button>
                </div>
            )}

            {/* REGISTER */}
            {view === "register" && (
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white">
                    <h2 className="text-2xl text-center mb-6">Register</h2>

                    <div className="mb-4">
                        <label className="text-sm text-gray-300">Email address</label>
                        <input
                            type="email"
                            placeholder=""
                            className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="text-sm text-gray-300">Password</label>
                        <input
                            type="password"
                            placeholder=""
                            className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleRegister}
                        className="w-full py-3 mt-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-2"
                    >
                        LOGIN
                    </button>

                    <p onClick={() => setView("login")} className="mt-3 cursor-pointer">
                        Go back
                    </p>
                </div>
            )}

            {/* FORGOT */}
            {view === "forgot" && (
                <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-96 text-white">
                    <h2 className="text-2xl text-center my-6">Forgot Password</h2>

                    <div className="mb-4">
                        <label className="text-sm text-gray-300">Email address</label>
                        <input
                            type="email"
                            placeholder=""
                            className="w-full mt-1 p-3 rounded-lg bg-blue-900/40 border border-blue-400/20 focus:outline-none focus:ring-2 focus:ring-blue-500"
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <button
                        onClick={handleForgot}
                        className="w-full py-3 my-3 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-2"
                    >
                        Sent
                    </button>

                    <p onClick={() => setView("login")} className="mt-3 cursor-pointer">
                        Go back
                    </p>
                </div>
            )}
        </div>
    );
}