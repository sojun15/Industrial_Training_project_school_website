import React from "react";
import Admission from "./Admission";
export default function About() {
  const styling = {
    backgroundColor: "blue",
    padding: "20px",
    color: "white",
  };

  const students = [
    {
      class_number: "10",
      student: "80",
      fee: "1500",
    },
    {
      class_number: "9",
      student: "70",
      fee: "1300",
    },
  ];
  
  return (
    <div style={styling}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src="/pic.jpg" className="photo" style={{ height: "150px" }} />
        <h1 style={{ display: "inline", fontSize: "50px" }}>
          Kasba Govt High School
        </h1>
      </div>

      <h2>Something about our school</h2>
      <ol style={{ textDecoration: "none" }}>
        <li>There have five classes student</li>
        <li>There can admit only boy student</li>
        <li>After passing admission test student can admit here</li>
      </ol>

      {students.map((student) => (
        <Admission student={student} />
      ))}
    </div>
  );
}
