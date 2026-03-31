// import { useState } from "react";
// import TopNavbar from "../TopNavbar";
// import { useNavigate } from "react-router-dom";
// import { auth } from "../../firebase/firebaseConfig";
// import {
//   signInWithEmailAndPassword,
// } from "firebase/auth";

// const CustomerLogin = () => {

//   const navigate = useNavigate();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [errors, setErrors] = useState({});

//   // ✅ Login
//   const handleLogin = async (e) => {
//     e.preventDefault();

//     let newErrors = {};

//     if (!email) {
//       newErrors.email = "Email is required";
//     } else if (!/\S+@\S+\.\S+/.test(email)) {
//       newErrors.email = "Invalid email format";
//     }

//     if (!password) {
//       newErrors.password = "Password is required";
//     } else if (password.length < 6) {
//       newErrors.password = "Password must be at least 6 characters";
//     }

//     if (Object.keys(newErrors).length > 0) {
//       setErrors(newErrors);
//       return;
//     }

//     setErrors({});

//     try {
//       await signInWithEmailAndPassword(
//         auth,
//         email,
//         password
//       );

//       alert("Login Successful ✅");

//       navigate("/");

//     } catch (error) {
//       console.log(error);

//       if (error.code === "auth/user-not-found") {
//         setErrors({ general: "User not found ❌" });
//       } else if (error.code === "auth/wrong-password") {
//         setErrors({ general: "Wrong password ❌" });
//       } else {
//         setErrors({ general: "Login failed ❌" });
//       }
//     }
//   };

//   return (
//     <div className="min-h-screen">
//       <TopNavbar />

//       <div className="bg-gray-100 py-12">
//         <h1 className="text-3xl font-semibold text-center">
//           Customer Login
//         </h1>
//       </div>

//       {/* Login Form Section */}
//       <div className="flex justify-center py-10 px-4">
//         <form onSubmit={handleLogin} className="w-full max-w-2xl bg-white p-10">
//           <h2 className="text-2xl font-bold mb-2">Registered Customers</h2>
//           <p className="text-gray-500 mb-8">
//             If you have an account, sign in with your email address.
//           </p>

//           {/* Email */}
//           <div className="mt-6">
//             <label className="block mb-2 font-medium text-gray-700">
//               Email <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
//             />
//             {errors.email && (
//               <p className="text-red-500 text-sm">{errors.email}</p>
//             )}
//           </div>

//           {/* Password */}
//           <div className="mt-6">
//             <label className="block mb-2 font-medium text-gray-700">
//               Password <span className="text-red-500">*</span>
//             </label>
//             <input
//               type="password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="w-full border border-gray-300 px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
//             />
//             {errors.password && (
//               <p className="text-red-500 text-sm">{errors.password}</p>
//             )}
//           </div>

//           {/* General Error */}
//           {errors.general && (
//             <p className="text-red-500 mt-4">{errors.general}</p>
//           )}

//           <div className="my-5">
//             <button
//               type="button"
//               onClick={() => navigate("/forgot")}
//               className="text-md text-gray-900 font-semibold hover:underline"
//             >
//               Forgot Your Password?
//             </button>
//           </div>

//           {/* Buttons */}
//           <button type="submit" className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 font-semibold mb-4 hover:opacity-90 transition">
//             SIGN IN
//           </button>

//           <button type="button" onClick={() => navigate("/register")} className="w-full bg-gradient-to-r from-gray-800 to-black text-white py-4 font-semibold hover:opacity-90 transition">
//             CREATE AN ACCOUNT
//           </button>

//           <p className="text-red-500 text-sm mt-6">* Required Fields</p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default CustomerLogin;

import { useState } from "react";
import TopNavbar from "../../components/TopNavbar";
import { auth } from "../../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [generatedCaptcha, setGeneratedCaptcha] = useState(
    Math.random().toString(36).substring(3, 9)
  );

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState("");

  //  Reload Captcha
  const reloadCaptcha = () => {
    setGeneratedCaptcha(Math.random().toString(36).substring(3, 9));
  };

  //  Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    let newErrors = {};

    // Email validation (same as login)
    if (!email) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "Invalid email format";
    }

    // Captcha validation
    if (!captcha) {
      newErrors.captcha = "Captcha is required";
    } else if (captcha !== generatedCaptcha) {
      newErrors.captcha = "Captcha does not match ";
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setSuccess("");

    try {
      await sendPasswordResetEmail(auth, email);

      setSuccess("Reset link sent to your email ");

      // reset fields
      setEmail("");
      setCaptcha("");
      reloadCaptcha();

    } catch (error) {
      console.log(error);

      if (error.code === "auth/user-not-found") {
        setErrors({ general: "User not found " });
      } else {
        setErrors({ general: "Something went wrong " });
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavbar />

      {/* Title */}
      <div className="bg-gray-100 py-12">
        <h1 className="text-3xl font-semibold text-center">
          Forgot Your Password?
        </h1>
      </div>

      {/* Form */}
      <div className="flex justify-center py-10 px-4">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-2xl bg-white p-10"
        >
          <p className="text-gray-500 mb-8">
            Please enter your email address below to receive a password reset link.
          </p>

          {/* Email */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">
              Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border px-4 py-3 focus:outline-none focus:ring-1 focus:ring-black"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>

          {/* Captcha */}
          <div className="mt-6">
            <label className="block mb-2 font-medium text-gray-700">
              Please type the letters and numbers below{" "}
              <span className="text-red-500">*</span>
            </label>

            <input
              type="text"
              value={captcha}
              onChange={(e) => setCaptcha(e.target.value)}
              className="w-full border px-4 py-3 mb-4 focus:outline-none"
            />

            {errors.captcha && (
              <p className="text-red-500 text-sm mb-2">
                {errors.captcha}
              </p>
            )}

            <div className="flex items-center gap-4">
              <div className="bg-gray-200 px-6 py-3 font-bold tracking-widest">
                {generatedCaptcha}
              </div>

              <button
                type="button"
                onClick={reloadCaptcha}
                className="border px-4 py-2"
              >
                Reload captcha
              </button>
            </div>
          </div>

          {/* General Error */}
          {errors.general && (
            <p className="text-red-500 mt-4">{errors.general}</p>
          )}

          {/* Success */}
          {success && (
            <p className="text-green-600 mt-4">{success}</p>
          )}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-black text-white py-4 font-semibold mt-6 hover:opacity-90"
          >
            RESET MY PASSWORD
          </button>

          {/* Back to Login */}
          <button
            type="button"
            onClick={() => navigate("/login")}
            className="mt-4 underline text-sm"
          >
            Back to Login
          </button>

        </form>
      </div>
    </div>
  );
}