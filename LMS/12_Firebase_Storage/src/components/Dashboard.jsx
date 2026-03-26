import { signOut } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

export default function Dashboard({ user, setUser }) {
    const handleLogout = async () => {
        await signOut(auth);
        setUser(null);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] flex items-center justify-center relative overflow-hidden">

            {/* 🔵 Background Glow */}
            <div className="absolute w-72 h-72 bg-blue-600 rounded-full blur-3xl opacity-40 top-10 left-10"></div>
            <div className="absolute w-80 h-80 bg-blue-500 rounded-full blur-3xl opacity-30 bottom-10 right-10"></div>
            <div className="absolute w-60 h-60 bg-indigo-500 rounded-full blur-3xl opacity-30 top-1/2 left-1/2"></div>

            <div className="backdrop-blur-lg bg-white/10 border border-white/20 p-8 rounded-2xl shadow-2xl w-[600px] text-white text-center">

                {/* Profile Image */}
                <img
                    src={user.photoURL || "https://i.pravatar.cc/100"}
                    className="w-20 h-20 rounded-full mx-auto mt-5 border-4 border-white"
                    alt="profile"
                />

                <h2 className="mt-2 font-semibold">
                    {user.displayName || "User"}
                </h2>

                <p className="text-gray-400 text-sm">
                    {user.email}
                </p>

                {/* Stats */}
                <div className="flex justify-around mt-8 text-sm">
                    <div>
                        <p className="font-bold">2k</p>
                        <p>Followers</p>
                    </div>
                    <div>
                        <p className="font-bold">10k</p>
                        <p>Likes</p>
                    </div>
                    <div>
                        <p className="font-bold">15</p>
                        <p>Projects</p>
                    </div>
                </div>

                {/* Button */}
                <button
                    className="w-full py-3 my-8 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full mb-2"
                >
                    Follow
                </button>

                <button
                onClick={handleLogout}
                    className="w-full py-3 mt-3 bg-gradient-to-r from-red-600 to-red-400 rounded-full mb-2"
                >
                    Logout
                </button>
            </div>
        </div>
    );
}