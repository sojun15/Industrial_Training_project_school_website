import React, { useState, useEffect } from "react";
import Admission from "./Admission";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import NameLogo from "./NameLogo";
import Headmaster from "./Headmaster";

export default function HomePage() {
  const students = [
    { class_number: "10", student: "80", fee: "1500" },
    { class_number: "9", student: "70", fee: "1300" },
  ];

  const images = [{ src: "/public/ku.jpg" }, { src: "/public/ku2.jpg" }];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <>
      <NameLogo />
      <div>
        <RouterProvider router={router} />
      </div>
      <Headmaster />
      <div className="flex gap-3 justify-center m-3" >
        <img src={images[currentImageIndex].src} alt="" height={300} width={300} />
      </div>
      <div>
        {students.map((student, index) => (
          <Admission key={index} student={student} />
        ))}
      </div>
    </>
  );
}
