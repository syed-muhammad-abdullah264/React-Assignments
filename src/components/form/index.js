import React, { useState } from "react";
import styles from "./index.module.css";

function Form({ addStudent }) {
  const [data, setData] = useState({
    studentName: "",
    mobileNum: "",
    email: "",
    fatherName: "",
    motherName: "",
    course: "",
    dob: "",
    gender: "",
    branches: [],
    photo: null,
    address: "",
  });

  const handleChange = (e) => {
    const { name, value, type, files } = e.target;
    if (type === "file") {
      setData({ ...data, [name]: files[0] });
    } else {
      setData({ ...data, [name]: value });
    }
  };

  const handleBranchChange = (e) => {
    const { value, checked } = e.target;
    let updatedBranches = [...data.branches];
    if (checked) {
      updatedBranches.push(value);
    } else {
      updatedBranches = updatedBranches.filter((b) => b !== value);
    }
    setData({ ...data, branches: updatedBranches });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!data.studentName || !data.email) {
      alert("Please fill required fields!");
      return;
    }
    addStudent(data);
    setData({
      studentName: "",
      mobileNum: "",
      email: "",
      fatherName: "",
      motherName: "",
      course: "",
      dob: "",
      gender: "",
      branches: [],
      photo: null,
      address: "",
    });
  };

  return (
    <div className={styles.formContainer}>
      <form className={styles.formBox} onSubmit={handleSubmit}>
        <h2>Student Registration Form</h2>
        <label>Student Name</label>
        <input
          type="text"
          name="studentName"
          value={data.studentName}
          onChange={handleChange}
        />
        <div className={styles.row}>
          <div>
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNum"
              value={data.mobileNum}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={data.fatherName}
              onChange={handleChange}
            />
          </div>
          <div>
            <label>Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={data.motherName}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div>
            <label>Course</label>
            <select name="course" value={data.course} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div>
            <label>DOB</label>
            <input
              type="date"
              name="dob"
              value={data.dob}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.genderGroup}>
            <input
              type="radio"
              id="male"
              name="gender"
              value="Male"
              onChange={handleChange}
            />
            <label htmlFor="male">Male</label>

            <input
              type="radio"
              id="female"
              name="gender"
              value="Female"
              onChange={handleChange}
            />
            <label htmlFor="female">Female</label>
          </div>

          <div>
            <label>Photo</label>
            <input type="file" name="photo" onChange={handleChange} />
          </div>
        </div>
        <label>Branches</label>
        <div className={styles.branchGroup}>
          <input
            type="checkbox"
            id="cse"
            value="CSE"
            checked={data.branches.includes("CSE")}
            onChange={handleBranchChange}
          />
          <label htmlFor="cse">CSE</label>

          <input
            type="checkbox"
            id="it"
            value="IT"
            checked={data.branches.includes("IT")}
            onChange={handleBranchChange}
          />
          <label htmlFor="it">IT</label>

          <input
            type="checkbox"
            id="ece"
            value="ECE"
            checked={data.branches.includes("ECE")}
            onChange={handleBranchChange}
          />
          <label htmlFor="ece">ECE</label>

          <input
            type="checkbox"
            id="civil"
            value="Civil"
            checked={data.branches.includes("Civil")}
            onChange={handleBranchChange}
          />
          <label htmlFor="civil">Civil</label>
        </div>

        <label>Address</label>
        <textarea
          name="address"
          rows={4}
          value={data.address}
          onChange={handleChange}
        />
        <button type="submit" className={styles.submitBtn}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
