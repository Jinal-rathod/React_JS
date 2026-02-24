import { useState, useEffect } from "react";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [name, setName] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  useEffect(() => {
    const storedStudents = localStorage.getItem("localbox_students");
    if (storedStudents) {
      setStudents(JSON.parse(storedStudents));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("localbox_students", JSON.stringify(students));
  }, [students]);

  const handleAddOrUpdate = () => {
    if (name.trim() === "") return;

    if (editIndex !== null) {
      const updatedStudents = [...students];
      updatedStudents[editIndex] = name;
      setStudents(updatedStudents);
      setEditIndex(null);
    } else {
      setStudents([...students, name]);
    }

    setName("");
  };

  const handleEdit = (index) => {
    setName(students[index]);
    setEditIndex(index);
  };

  const handleDelete = (index) => {
    const filtered = students.filter((_, i) => i !== index);
    setStudents(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-5">
      <div className="bg-white shadow-xl rounded-2xl p-6 w-full max-w-md">
        <h1 className="text-2xl font-bold text-center mb-4 text-blue-600">
          📦 LocalBox Miner
        </h1>

        <div className="flex gap-2 mb-4">
          <input
            type="text"
            placeholder="Enter student name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            onClick={handleAddOrUpdate}
            className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>

        <ul className="space-y-2">
          {students.map((student, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-50 p-3 rounded-lg shadow-sm"
            >
              <span>{student}</span>

              <div className="flex gap-2">
                <button
                  onClick={() => handleEdit(index)}
                  className="bg-yellow-400 px-3 py-1 rounded text-sm hover:bg-yellow-500"
                >
                  Edit
                </button>

                <button
                  onClick={() => handleDelete(index)}
                  className="bg-red-500 text-white px-3 py-1 rounded text-sm hover:bg-red-600"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>

        {students.length === 0 && (
          <p className="text-center text-gray-400 mt-4">
            No students added yet.
          </p>
        )}
      </div>
    </div>
  );
};

export default Students;
