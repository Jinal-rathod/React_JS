import { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  collection,
  addDoc,
  getDocs,
  deleteDoc,
  doc,
} from "firebase/firestore";

const DataForm = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [users, setUsers] = useState([]);

  const usersCollection = collection(db, "users");

  // Add Data
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !email || !number) return;

    await addDoc(usersCollection, {
      name,
      email,
      number,
    });

    setName("");
    setEmail("");
    setNumber("");
    fetchUsers();
  };

  // Fetch Data
  const fetchUsers = async () => {
    const data = await getDocs(usersCollection);
    setUsers(data.docs.map(doc => ({ ...doc.data(), id: doc.id })));
  };

  // Delete Data
  const handleDelete = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
    fetchUsers();
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className="min-h-screen bg-gray-300 p-6 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-center mb-6">
        Firebase Form App
      </h1>

      {/* Form */}
      <form className="bg-white px-6 py-10 rounded-xl shadow max-w-xl w-[500px] flex flex-col mx-auto" onSubmit={handleSubmit}>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="text"
            name="floating_name"
            id="floating_name"
            className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=""
            required="true"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label
            htmlFor="floating_name"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Name
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="email"
            name="floating_email"
            id="floating_email"
            className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required="true"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="floating_email"
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Email address
          </label>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <input
            type="tel"
            // pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            name="floating_phone"
            id="floating_phone"
            className="block py-3 px-0 w-full text-sm text-heading bg-transparent border-0 border-b-2 border-default-medium appearance-none focus:outline-none focus:ring-0 focus:border-brand peer"
            placeholder=" "
            required="true"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
          />
          <label
            className="absolute text-sm text-body duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-fg-brand peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
          >
            Phone number
          </label>
        </div>
        <button className="bg-blue-500 text-white font-medium px-4 py-2 w-full mt-5 rounded-full">
          Add User
        </button>
      </form>



      {/* Data Display */}
      <div className="mt-6 max-w-3xl w-full mx-auto">
        {users.map((user) => (
          <div
            key={user.id}
            className="bg-white p-4 mb-3 rounded-xl shadow flex justify-between"
          >
            <div className="flex">
              <p className="px-5 font-semibold text-gray-500">{user.name}</p>
              <p className="px-5 font-semibold text-gray-500">{user.email}</p>
              <p className="px-5 font-semibold text-gray-500">{user.number}</p>
            </div>

            <button
              onClick={() => handleDelete(user.id)}
              className="text-red-500"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}

export default DataForm
