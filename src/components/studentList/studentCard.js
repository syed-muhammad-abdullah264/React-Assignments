import React from "react";
import styles from "./index.module.css";

const StudentCard = ({ student, deleteStudent }) => {
  return (
    <div className={styles.card}>
      <h3>{student.studentName}</h3>
      <p>Email: {student.email}</p>
      <p>Mobile: {student.mobileNum}</p>
      <p>Father: {student.fatherName}</p>
      <p>Mother: {student.motherName}</p>
      <p>Course: {student.course}</p>
      <p>DOB: {student.dob}</p>
      <p>Gender: {student.gender}</p>
      <p>Branches: {student.branches.join(", ")}</p>
      <p>Address: {student.address}</p>
      <button onClick={() => deleteStudent(student.id)}>Delete</button>
    </div>
  );
};

export default StudentCard;
