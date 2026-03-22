import React, { useEffect, useState, useMemo, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
    fetchUsers,
    addUser,
    deleteUser,
    updateUser,
} from "../features/users/userSlice";

const UserTable = () => {
    const dispatch = useDispatch();
    const users = useSelector((state) => state.users.list);

    const [form, setForm] = useState({ name: "", email: "" });
    const [editId, setEditId] = useState(null);
    const [search, setSearch] = useState("");

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const filteredUsers = useMemo(() => {
        return users.filter((u) =>
            u.name.toLowerCase().includes(search.toLowerCase())
        );
    }, [users, search]);

    const handleDelete = useCallback(
        (id) => {
            dispatch(deleteUser(id));
        },
        [dispatch]
    );

    const handleSubmit = (e) => {
        e.preventDefault();

        if (editId) {
            dispatch(updateUser({ ...form, id: editId }));
            setEditId(null);
        } else {
            dispatch(addUser(form));
        }

        setForm({ name: "", email: "" });
    };

    const handleEdit = (user) => {
        setForm({ name: user.name, email: user.email });
        setEditId(user.id);
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Redux Builder</h1>

            {/* Form */}
            <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
                <input
                    className="border p-2 rounded"
                    placeholder="Name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
                <input
                    className="border p-2 rounded"
                    placeholder="Email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <button className="bg-blue-500 text-white px-4 rounded">
                    {editId ? "Update" : "Add"}
                </button>
            </form>

            {/* Search */}
            <input
                type="text"
                placeholder="Search..."
                className="border p-2 mb-4 w-full"
                onChange={(e) => setSearch(e.target.value)}
            />

            {/* Table */}
            <table className="w-full border shadow">
                <thead className="bg-gray-100">
                    <tr>
                        <th className="p-2">Name</th>
                        <th>Email</th>
                        <th>Actions</th>
                    </tr>
                </thead>

                <tbody>
                    {filteredUsers.map((u) => (
                        <tr key={u.id} className="text-center border-t">
                            <td className="p-2">{u.name}</td>
                            <td>{u.email}</td>
                            <td className="space-x-2">
                                <button
                                    onClick={() => handleEdit(u)}
                                    className="bg-yellow-400 text-white px-2 py-1 rounded"
                                >
                                    Edit
                                </button>
                                <button
                                    onClick={() => handleDelete(u.id)}
                                    className="bg-red-500 text-white px-2 py-1 rounded"
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UserTable;