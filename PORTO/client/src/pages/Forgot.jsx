// import TopNavbar from "../components/TopNavbar";

// export default function Forgot() {

//     return (
//         <div className="min-h-screen flex flex-col">
//             <TopNavbar />

//             <div className="bg-gray-100 py-12">
//                 <h1 className="text-3xl font-semibold text-center">
//                     Forgot Your Password?
//                 </h1>
//             </div>

//             <main className="flex justify-center py-10 px-4">
//                 <form className="w-full max-w-2xl bg-white p-10">

//                     <p className="mb-5">Please enter your email address below to receive a password reset link.</p>

//                     {/* Sign-in Info */}
//                     <div className="space-y-5">
//                         <div>
//                             <label>Email *</label>
//                             <input
//                                 type="email"
//                                 className="w-full border px-4 py-2 rounded"
//                             />
//                         </div>

//                         <div>
//                             <label>Please type the letters and numbers below *</label>
//                             <input
//                                 type="text"
//                                 className="w-full border px-4 py-2 rounded"
//                             />
//                         </div>

//                         <button
//                             type="submit"
//                             className="mt-10 bg-gray-900 w-full text-white py-3 rounded hover:bg-black">
//                             REGISTER
//                         </button>
//                     </div>
//                 </form>
//             </main>
//         </div >
//     );
// }

import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import { auth } from "../firebase/firebaseConfig";
import { sendPasswordResetEmail } from "firebase/auth";

export default function ForgotPassword() {
    const [email, setEmail] = useState("");
    const [captcha, setCaptcha] = useState("");
    const [generatedCaptcha, setGeneratedCaptcha] = useState(
        Math.random().toString(36).substring(3, 9)
    );
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    //  Reload Captcha
    const reloadCaptcha = () => {
        setGeneratedCaptcha(Math.random().toString(36).substring(3, 9));
    };

    //  Handle Reset
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!email) {
            return setError("Email is required");
        }

        if (captcha !== generatedCaptcha) {
            return setError("Captcha does not match ");
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setSuccess("Reset link sent to your email ");
            setError("");
        } catch (err) {
            setError(err.message);
            setSuccess("");
        }
    };

    return (
        <div className="min-h-screen bg-gray-50">
            <TopNavbar />

            {/* Title */}
            <div className="bg-gray-200 py-12 text-center">
                <h1 className="text-3xl font-semibold">
                    Forgot Your Password?
                </h1>
            </div>

            {/* Form */}
            <div className="flex justify-center py-12 px-4">
                <form
                    onSubmit={handleSubmit}
                    className="w-full max-w-2xl bg-white p-10"
                >
                    <p className="text-gray-600 mb-6">
                        Please enter your email address below to receive a password reset link.
                    </p>

                    {/* Email */}
                    <div className="mb-6">
                        <label className="block mb-2 font-medium">
                            Email <span className="text-red-500">*</span>
                        </label>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full border px-4 py-3 focus:outline-none"
                        />
                    </div>

                    {/* Captcha */}
                    <div className="mb-6">
                        <label className="block mb-2 font-medium">
                            Please type the letters and numbers below{" "}
                            <span className="text-red-500">*</span>
                        </label>

                        <input
                            type="text"
                            onChange={(e) => setCaptcha(e.target.value)}
                            className="w-full border px-4 py-3 mb-4"
                        />

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

                    {/* Messages */}
                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {success && <p className="text-green-600 mb-4">{success}</p>}

                    {/* Button */}
                    <button
                        type="submit"
                        className="w-full bg-black text-white py-4 font-semibold hover:opacity-90"
                    >
                        RESET MY PASSWORD
                    </button>
                </form>
            </div>
        </div>
    );
}