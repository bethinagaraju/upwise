// // import React from "react";
// // import { ArrowRight, Download } from "lucide-react";

// // const CourseCTA: React.FC = () => {
// //   return (
// //     <section className="py-20 bg-gradient-to-r from-[#f07b51] to-[#ff9b73]">
// //       <div className="max-w-5xl mx-auto px-6 text-center">
// //         <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
// //           Ready to Master Advanced Excel?
// //         </h2>

// //         <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
// //           Transform your Excel skills with hands-on projects, real-world case
// //           studies, and expert-led training.
// //         </p>

// //         <div className="flex flex-col sm:flex-row justify-center gap-4">
// //           <button className="flex items-center justify-center gap-2 bg-white text-[#f07b51] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
// //             Enrol Now
// //             <ArrowRight size={18} />
// //           </button>

// //           <button className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#f07b51] transition-all">
// //             <Download size={18} />
// //             Download Brochure
// //           </button>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default CourseCTA;


// import React, { useState } from "react";
// import { ArrowRight, Download, X } from "lucide-react";

// const CourseCTA: React.FC = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [formData, setFormData] = useState({
//     name: "",
//     phone: "",
//   });

//   const handleChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleDownload = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!formData.name || !formData.phone) {
//       alert("Please fill all fields");
//       return;
//     }

//     // Optional: Send data to backend here

//     const link = document.createElement("a");
//     link.href = "/Gemini_Generated_Image_2lm8vl2lm8vl2lm8.png";
//     link.download = "Advanced-Excel-Brochure.png";
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);

//     setShowModal(false);

//     setFormData({
//       name: "",
//       phone: "",
//     });
//   };

//   return (
//     <>
//       <section className="py-20 bg-gradient-to-r from-[#f07b51] to-[#ff9b73]">
//         <div className="max-w-5xl mx-auto px-6 text-center">
//           <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
//             Ready to Master Advanced Excel?
//           </h2>

//           <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
//             Transform your Excel skills with hands-on projects,
//             real-world case studies, and expert-led training.
//           </p>

//           <div className="flex flex-col sm:flex-row justify-center gap-4">
//             <button className="flex items-center justify-center gap-2 bg-white text-[#f07b51] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all">
//               Enrol Now
//               <ArrowRight size={18} />
//             </button>

//             <button
//               onClick={() => setShowModal(true)}
//               className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#f07b51] transition-all"
//             >
//               <Download size={18} />
//               Download Brochure
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* Modal */}
//       {showModal && (
//         <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
//           <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
//             <button
//               onClick={() => setShowModal(false)}
//               className="absolute top-4 right-4"
//             >
//               <X size={20} />
//             </button>

//             <h3 className="text-2xl font-bold mb-2">
//               Download Brochure
//             </h3>

//             <p className="text-gray-600 mb-6">
//               Fill in your details to get the brochure.
//             </p>

//             <form onSubmit={handleDownload} className="space-y-4">
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Full Name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f07b51]"
//               />

//               <input
//                 type="tel"
//                 name="phone"
//                 placeholder="Phone Number"
//                 value={formData.phone}
//                 onChange={handleChange}
//                 className="w-full border rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#f07b51]"
//               />

//               <button
//                 type="submit"
//                 className="w-full bg-[#f07b51] text-white py-3 rounded-lg font-semibold hover:bg-[#e66a3f]"
//               >
//                 Submit & Download
//               </button>
//             </form>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default CourseCTA;



import React, { useState } from "react";
import { ArrowRight, Download, X } from "lucide-react";

const courses = [
  "Advanced Excel",
  "Power BI",
  "SQL",
  "Python",
  "Data Analytics",
];

interface CourseCTAProps {
  courseName?: string;
  brochureUrl?: string;
  brochureName?: string;
}

const CourseCTA: React.FC<CourseCTAProps> = ({
  courseName = "Advanced Excel",
  brochureUrl = "/Gemini_Generated_Image_2lm8vl2lm8vl2lm8.png",
  brochureName = "Advanced-Excel-Brochure.png",
}) => {
  const [showEnrollModal, setShowEnrollModal] = useState(false);
  const [showBrochureModal, setShowBrochureModal] = useState(false);

  const [enrollData, setEnrollData] = useState({
    name: "",
    phone: "",
    course: courseName,
  });

  const [brochureData, setBrochureData] = useState({
    name: "",
    phone: "",
  });

  const handleEnrollChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setEnrollData({
      ...enrollData,
      [e.target.name]: e.target.value,
    });
  };

  const handleBrochureChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setBrochureData({
      ...brochureData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEnrollSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (
      !enrollData.name ||
      !enrollData.phone ||
      !enrollData.course
    ) {
      alert("Please fill all fields");
      return;
    }

    console.log("Enquiry Submitted:", enrollData);

    // TODO: Call your API here

    alert("Enquiry submitted successfully!");

    setEnrollData({
      name: "",
      phone: "",
      course: courseName,
    });

    setShowEnrollModal(false);
  };

  const handleBrochureSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    if (!brochureData.name || !brochureData.phone) {
      alert("Please fill all fields");
      return;
    }

    console.log("Brochure Request:", brochureData);

    // TODO: Call your API here

    const link = document.createElement("a");
    link.href = brochureUrl;
    link.download = brochureName;

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setBrochureData({
      name: "",
      phone: "",
    });

    setShowBrochureModal(false);
  };

  return (
    <>
      <section className="py-20 bg-gradient-to-r from-[#f07b51] to-[#ff9b73]">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Master {courseName}?
          </h2>

          <p className="text-white/90 text-lg max-w-2xl mx-auto mb-10">
            Transform your {courseName} skills with hands-on projects,
            real-world case studies, and expert-led training.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button
              onClick={() => setShowEnrollModal(true)}
              className="flex items-center justify-center gap-2 bg-white text-[#f07b51] font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all"
            >
              Enrol Now
              <ArrowRight size={18} />
            </button>

            <button
              onClick={() => setShowBrochureModal(true)}
              className="flex items-center justify-center gap-2 border-2 border-white text-white font-semibold px-8 py-4 rounded-xl hover:bg-white hover:text-[#f07b51] transition-all"
            >
              <Download size={18} />
              Download Brochure
            </button>
          </div>
        </div>
      </section>

      {/* Enrol Modal */}
      {showEnrollModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowEnrollModal(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Course Enquiry
            </h3>

            <p className="text-gray-600 mb-6">
              Fill in your details and our team will contact you.
            </p>

            <form
              onSubmit={handleEnrollSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={enrollData.name}
                onChange={handleEnrollChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={enrollData.phone}
                onChange={handleEnrollChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <select
                name="course"
                value={enrollData.course}
                onChange={handleEnrollChange}
                className="w-full border rounded-lg px-4 py-3"
              >
                <option value="">Select Course</option>

                {courses.map((course) => (
                  <option key={course} value={course}>
                    {course}
                  </option>
                ))}
              </select>

              <button
                type="submit"
                className="w-full bg-[#f07b51] text-white py-3 rounded-lg font-semibold hover:bg-[#e66a3f]"
              >
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      )}

      {/* Brochure Modal */}
      {showBrochureModal && (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-6 w-full max-w-md relative">
            <button
              onClick={() => setShowBrochureModal(false)}
              className="absolute top-4 right-4"
            >
              <X size={20} />
            </button>

            <h3 className="text-2xl font-bold mb-2">
              Download Brochure
            </h3>

            <p className="text-gray-600 mb-6">
              Fill in your details to download the brochure.
            </p>

            <form
              onSubmit={handleBrochureSubmit}
              className="space-y-4"
            >
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={brochureData.name}
                onChange={handleBrochureChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={brochureData.phone}
                onChange={handleBrochureChange}
                className="w-full border rounded-lg px-4 py-3"
              />

              <button
                type="submit"
                className="w-full bg-[#f07b51] text-white py-3 rounded-lg font-semibold hover:bg-[#e66a3f]"
              >
                Submit & Download
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseCTA;
