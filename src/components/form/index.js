import React, { useState } from "react";
import "./index.css";

// function Form() {
//   const [formData, setFormData] = useState({
//     studentName: "",
//     mobile: "",
//     email: "",
//     fatherName: "",
//     motherName: "",
//     course: "",
//     dob: "",
//     gender: "",
//     branches: [],
//     photo: null,
//     address: "",
//   });

//   const handleChange = (e) => {
//     const { name, value, type, files } = e.target;

//     if (type === "file") {
//       setFormData({ ...formData, [name]: files[0] });
//       return;
//     }

//     setFormData({ ...formData, [name]: value });
//   };

//   const handleBranchChange = (e) => {
//     const { value, checked } = e.target;

//     let updatedBranches = [...formData.branches];

//     if (checked) {
//       updatedBranches.push(value);
//     } else {
//       updatedBranches = updatedBranches.filter((b) => b !== value);
//     }

//     setFormData({ ...formData, branches: updatedBranches });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log("Form Submitted Successfully!");
//     console.log(formData);

//     alert("Form Submitted Successfully! Check console for output.");
//   };

//   return (
//     <div className="form-container">
//       <form className="form-box" onSubmit={handleSubmit}>
//         <h2>Student Registration Form</h2>

//         <label>Student Name</label>
//         <input
//           type="text"
//           name="studentName"
//           value={formData.studentName}
//           onChange={handleChange}
//           required
//         />

//         <div className="row">
//           <div>
//             <label>Mobile No.</label>
//             <input
//               type="text"
//               name="mobile"
//               value={formData.mobile}
//               onChange={handleChange}
//               required
//             />
//           </div>

//           <div>
//             <label>Email Id</label>
//             <input
//               type="email"
//               name="email"
//               value={formData.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div>
//             <label>Father Name</label>
//             <input
//               type="text"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//             />
//           </div>

//           <div>
//             <label>Mother Name</label>
//             <input
//               type="text"
//               name="motherName"
//               value={formData.motherName}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div>
//             <label>Select Course</label>
//             <select
//               name="course"
//               value={formData.course}
//               onChange={handleChange}
//               required
//             >
//               <option value="">Select...</option>
//               <option value="BCA">BCA</option>
//               <option value="BBA">BBA</option>
//               <option value="MBA">MBA</option>
//               <option value="MCA">MCA</option>
//             </select>
//           </div>

//           <div>
//             <label>Date Of Birth</label>
//             <input
//               type="date"
//               name="dob"
//               value={formData.dob}
//               onChange={handleChange}
//             />
//           </div>
//         </div>

//         <div className="row">
//           <div>
//             <label>Gender</label>
//             <div className="gender-group">
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Male"
//                   onChange={handleChange}
//                 />{" "}
//                 Male
//               </label>
//               <label>
//                 <input
//                   type="radio"
//                   name="gender"
//                   value="Female"
//                   onChange={handleChange}
//                 />{" "}
//                 Female
//               </label>
//             </div>
//           </div>

//           <div>
//             <label>Student Photo</label>
//             <input type="file" name="photo" onChange={handleChange} />
//           </div>
//         </div>

//         <label>Select Branch</label>
//         <div className="branch-group">
//           <label>
//             <input type="checkbox" value="CSE" onChange={handleBranchChange} />{" "}
//             CSE
//           </label>
//           <label>
//             <input type="checkbox" value="IT" onChange={handleBranchChange} />{" "}
//             IT
//           </label>
//           <label>
//             <input type="checkbox" value="ECE" onChange={handleBranchChange} />{" "}
//             ECE
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               value="Civil"
//               onChange={handleBranchChange}
//             />{" "}
//             Civil
//           </label>
//         </div>

//         <label>Address</label>
//         <textarea
//           name="address"
//           rows="4"
//           value={formData.address}
//           onChange={handleChange}
//         ></textarea>

//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// }

function Form() {
  const [formData, setFormData] = useState({
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
    let { value, name, type, files } = e.target;

    if (type === "file") {
      setFormData({ ...formData, [name]: files[0] });
      return;
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleBranchChange = (e) => {
    const { value, checked } = e.target;
    let updatedBranches = [...formData.branches];
    if (checked) {
      updatedBranches.push(value);
    } else {
      updatedBranches = updatedBranches.filter((b) => b !== value);
    }
    setFormData({ ...formData, branches: updatedBranches });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="form-container">
      <form className="form-box" onSubmit={handleSubmit}>
        <h2>Student Registration Form</h2>
        <label>Student Name</label>
        <input
          type="text"
          name="studentName"
          value={formData.studentName}
          onChange={handleChange}
        ></input>

        <div className="row">
          <div>
            <label>Mobile No</label>
            <input
              type="text"
              name="mobileNum"
              value={formData.mobileNum}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Email Id</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            ></input>
          </div>
        </div>

        <div className="row">
          <div>
            <label>Father Name</label>
            <input
              type="text"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            ></input>
          </div>
          <div>
            <label>Mother Name</label>
            <input
              type="text"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div>
            <label>Select Course</label>
            <select
              name="course"
              value={formData.course}
              onChange={handleChange}
            >
              <option value="">Select...</option>
              <option value="BCA">BCA</option>
              <option value="BBA">BBA</option>
              <option value="MBA">MBA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>
          <div>
            <label>Date Of Birth</label>
            <input
              type="date"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            ></input>
          </div>
        </div>
        <div className="row">
          <div>
            <label>Gender</label>
            <div className="gender-group">
              <input
                type="radio"
                name="gender"
                value="Male"
                onChange={handleChange}
              />
              <label>Male</label>
              <input
                type="radio"
                name="gender"
                value="Female"
                onChange={handleChange}
              />
              <label>Female</label>
            </div>
          </div>
          <div>
            <label>Student Photo</label>
            <input type="file" name="photo" onChange={handleChange}></input>
          </div>
        </div>
        <label>Select Branch</label>
        <div className="branch-group">
          <input type="checkbox" value="CSE" onChange={handleBranchChange} />
          <label>CSE</label>
          <input type="checkbox" value="IT" onChange={handleBranchChange} />
          <label>IT</label>
          <input type="checkbox" value="ECE" onChange={handleBranchChange} />
          <label>ECE</label>
          <input type="checkbox" value="Civil" onChange={handleBranchChange} />
          <label>Civil</label>
        </div>
        <label>Address</label>
        <textarea
          name="address"
          rows={4}
          value={formData.address}
          onChange={handleChange}
        ></textarea>
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
