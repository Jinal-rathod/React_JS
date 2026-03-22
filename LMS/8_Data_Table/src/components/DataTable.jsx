import React, { useState } from "react";

const DataTable = () => {
    const data = [
        { id: 1, name: "Jinal", email: "jinal@gmail.com", role: "Admin" },
        { id: 2, name: "Rahul", email: "rahul@gmail.com", role: "User" },
        { id: 3, name: "Priya", email: "priya@gmail.com", role: "Editor" },
        { id: 4, name: "Amit", email: "amit@gmail.com", role: "User" },
        { id: 5, name: "Neha", email: "neha@gmail.com", role: "Admin" },
    ];

    const [search, setSearch] = useState("");
    const [roleFilter, setRoleFilter] = useState("");
    const [sortConfig, setSortConfig] = useState({ key: "", direction: "" });

    let filteredData = data.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
    );

    if (roleFilter) {
        filteredData = filteredData.filter((item) => item.role === roleFilter);
    }

    if (sortConfig.key) {
        filteredData.sort((a, b) => {
            if (a[sortConfig.key] < b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? -1 : 1;
            }
            if (a[sortConfig.key] > b[sortConfig.key]) {
                return sortConfig.direction === "asc" ? 1 : -1;
            }
            return 0;
        });
    }

    const handleSort = (key) => {
        let direction = "asc";
        if (sortConfig.key === key && sortConfig.direction === "asc") {
            direction = "desc";
        }
        setSortConfig({ key, direction });
    };

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Data Table</h1>

            {/* Controls */}
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <input
                    type="text"
                    placeholder="Search by name..."
                    className="border p-2 rounded w-full md:w-1/3"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <select
                    className="border p-2 rounded w-full md:w-1/4"
                    onChange={(e) => setRoleFilter(e.target.value)}
                >
                    <option value="">All Roles</option>
                    <option value="Admin">Admin</option>
                    <option value="User">User</option>
                    <option value="Editor">Editor</option>
                </select>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
                <table className="min-w-full border rounded shadow">
                    <thead>
                        <tr className="bg-gray-800">
                            <th
                                className="p-3 cursor-pointer"
                                onClick={() => handleSort("name")}
                            >
                                Name ⬍
                            </th>
                            <th
                                className="p-3 cursor-pointer"
                                onClick={() => handleSort("email")}
                            >
                                Email ⬍
                            </th>
                            <th
                                className="p-3 cursor-pointer"
                                onClick={() => handleSort("role")}
                            >
                                Role ⬍
                            </th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredData.length > 0 ? (
                            filteredData.map((item) => (
                                <tr key={item.id} className="text-center border-t hover:bg-gray-500 hover:text-black">
                                    <td className="p-3">{item.name}</td>
                                    <td className="p-3">{item.email}</td>
                                    <td className="p-3">{item.role}</td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="3" className="p-4 text-gray-500">
                                    No data found
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default DataTable;