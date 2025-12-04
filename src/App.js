import React, { useState } from "react";
import "./global.css";
import Form from "./components/form";
import StudentList from "./components/studentList";

function App() {
  const [students, setStudents] = useState([]);

  const addStudent = (studentData) => {
    setStudents([
      { ...studentData, id: Math.round(Math.random() * 9999) },
      ...students,
    ]);
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const editStudent = (id, updatedData) => {
    setStudents(
      students.map((s) => (s.id === id ? { ...s, ...updatedData } : s))
    );
  };

  return (
    <div>
      <Form addStudent={addStudent} />
      <StudentList
        students={students}
        deleteStudent={deleteStudent}
        editStudent={editStudent}
      />
    </div>
  );
}

export default App;
