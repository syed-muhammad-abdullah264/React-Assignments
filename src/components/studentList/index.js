import React from "react";
import StudentCard from "./studentCard";
import styles from "./index.module.css";

const StudentList = ({ students, deleteStudent }) => {
  if (students.length === 0)
    return <p style={{ textAlign: "center" }}>No students registered yet!</p>;

  return (
    <div className={styles.listContainer}>
      {students.map((s) => (
        <StudentCard key={s.id} student={s} deleteStudent={deleteStudent} />
      ))}
    </div>
  );
};

export default StudentList;
