import { useState } from "react";

export default function UserForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        age: "",
        course: "",
        address: "",
    });

    const [users, setUsers] = useState([]);
    const [editIndex, setEditIndex] = useState(null);

    // handle input change
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // handle submit (Create + Update)
    const handleSubmit = (e) => {
        e.preventDefault();

        if (!form.name || !form.email) {
            alert("Name & Email required");
            return;
        }

        if (editIndex !== null) {
            // UPDATE
            const updatedUsers = [...users];
            updatedUsers[editIndex] = form;
            setUsers(updatedUsers);
            setEditIndex(null);
        } else {
            // CREATE
            setUsers([...users, form]);
        }

        // reset form
        setForm({
            name: "",
            email: "",
            phone: "",
            age: "",
            course: "",
            address: "",
        });
    };

    // DELETE
    const handleDelete = (index) => {
        const filtered = users.filter((_, i) => i !== index);
        setUsers(filtered);
    };

    // EDIT (fill form)
    const handleEdit = (index) => {
        setForm(users[index]);
        setEditIndex(index);
    };

    return (
        <div className="min-h-screen bg-[#0f172a] p-6 flex justify-center items-center flex-col">
            <h1 className="text-3xl font-bold mb-6 text-gray-800 text-white">
                User CRUD App
            </h1>

            {/* FORM */}
            <div className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-xl px-6 py-15 w-[1000px]">
                <form onSubmit={handleSubmit} className="space-y-4 text-white">
                    
                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="name"
                            placeholder="Full Name"
                            value={form.name}
                            onChange={handleChange}
                            className="input"
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={form.email}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                        <input
                            type="text"
                            name="phone"
                            placeholder="Phone"
                            value={form.phone}
                            onChange={handleChange}
                            className="input"
                        />

                        <input
                            type="number"
                            name="age"
                            placeholder="Age"
                            value={form.age}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <input
                        type="text"
                        name="course"
                        placeholder="Course"
                        value={form.course}
                        onChange={handleChange}
                        className="input w-full"
                    />

                    <textarea
                        name="address"
                        placeholder="Address"
                        value={form.address}
                        onChange={handleChange}
                        className="input w-full"
                    />

                    <button
                        type="submit"
                        className={`w-full py-2 rounded-lg text-white ${editIndex !== null
                            ? "bg-yellow-500 hover:bg-yellow-600"
                            : "bg-blue-500 hover:bg-blue-600"
                            }`}
                    >
                        {editIndex !== null ? "Update User" : "Add User"}
                    </button>
                </form>
            </div >

            {/* USER LIST */}
            <div className="mt-6 grid md:grid-cols-2 gap-4 " >
                {
                    users.map((user, index) => (
                        <div
                            key={index}
                            className="backdrop-blur-lg bg-white/10 border border-white/20 shadow-2xl rounded-xl px-6 py-10 text-white w-[500px]"
                        >
                            <h2 className="font-semibold text-lg">{user.name}</h2>
                            <p className="text-sm">{user.email}</p>
                            <p className="text-sm">{user.phone}</p>
                            <p className="text-sm">Age : {user.age}</p>
                            <p className="text-sm">{user.course}</p>
                            <p className="text-sm">{user.address}</p>

                            {/* ACTION BUTTONS */}
                            <div className="flex gap-2 mt-3">
                                <button
                                    onClick={() => handleEdit(index)}
                                    className="px-3 py-1 bg-yellow-400 text-white rounded"
                                >
                                    Edit
                                </button>

                                <button
                                    onClick={() => handleDelete(index)}
                                    className="px-3 py-1 bg-red-500 text-white rounded"
                                >
                                    Delete
                                </button>
                            </div>
                        </div>
                    ))
                }
            </div >
        </div >
    );
}