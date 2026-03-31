import { useState } from "react";
import TopNavbar from "../components/TopNavbar";
import { auth } from "../firebase/firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth"
import { useNavigate } from "react-router-dom";

export default function Register({ setUser }) {

  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault(); // ✅ prevent reload

    if (!firstName || !lastName) {
      return alert("Enter First Name & Last Name");
    }

    if (!email) {
      return alert("Enter Email");
    }

    if (password.length < 6) {
      return alert("Password must be at least 6 characters");
    }

    if (password !== confirmPassword) {
      return alert("Passwords do not match ❌");
    }

    try {
      const res = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      setUser(res.user);
      alert("Registration Successful ✅");

      navigate("/login"); // ✅ redirect

    } catch (error) {
      console.log("Error Code:", error.code);
      console.log("Error Message:", error.message);

      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <TopNavbar />

      <div className="bg-gray-100 py-12">
        <h1 className="text-3xl font-semibold text-center">
          Create New Customer Account
        </h1>
      </div>

      <main className="flex-1 container mx-auto px-4 py-12">
        <form onSubmit={handleRegister} className="bg-white p-10 rounded">
          <div className="grid md:grid-cols-2 gap-12">

            {/* Personal Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Personal Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label>First Name *</label>
                  <input
                    onChange={(e) => setFirstName(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <div>
                  <label>Last Name *</label>
                  <input
                    onChange={(e) => setLastName(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name="newsletter"
                  // checked={form.newsletter}
                  // onChange={handleChange}
                  />
                  <label>Sign Up for Newsletter</label>
                </div>
              </div>

              <button
                type="submit"
                className="mt-10 bg-gray-900 w-full text-white py-3 rounded hover:bg-black"
              >
                REGISTER
              </button>
            </div>

            {/* Sign-in Info */}
            <div>
              <h2 className="text-xl font-semibold mb-6">
                Sign-in Information
              </h2>

              <div className="space-y-5">
                <div>
                  <label>Email *</label>
                  <input
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <div>
                  <label>Password *</label>
                  <input
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>

                <div>
                  <label>Confirm Password *</label>
                  <input
                    type="password"
                    name="confirmPassword"
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="w-full border px-4 py-2 rounded"
                  />
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}