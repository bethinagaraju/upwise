// // // import React from 'react';

// // // function Resources() {
// // //   return (
// // //     <div>
// // //       <h1>resouces</h1>
// // //     </div>
// // //   );
// // // }

// // // export default Resources;



// // import React from 'react';
// // import Header from '../components/Header';

// // // Array of all video data to make the code cleaner
// // const videos = [
// //   {
// //     src: "https://www.youtube.com/embed/JwiAv6esTc4?si=IfHePKhYwZ7lSHaQ",
// //     title: "YouTube video player 1"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/VWSDNPBp0C0?si=E5pHGlC0kMY0246r",
// //     title: "YouTube video player 2"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/ISmmJCiqkyY?si=wU_-vQJL5bwIGlmg",
// //     title: "YouTube video player 3"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/qhbtpLlfako?si=oIX8ntInpyA-Cb-P",
// //     title: "YouTube video player 4"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/3ulDorvhVa8?si=CXUmEO8b0a8Ny6Nu",
// //     title: "YouTube video player 5"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/zCjOoTDxefM?si=X7v7yW2awDYfGGNG",
// //     title: "YouTube video player 6"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/aynxwO37ir0?si=UmQYlIQSvtRZ3B9n",
// //     title: "YouTube video player 7"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/bLuthVP_UXI?si=GejNm0HA_kJiYo_D",
// //     title: "YouTube video player 8"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/sUDf9SVPtkM?si=5IkwlNYObaNN2M0h",
// //     title: "YouTube video player 9"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/QyUHuB6bxX0?si=Ivb8300H7qYmixfv",
// //     title: "YouTube video player 10"
// //   },
// //   {
// //     src: "https://www.youtube.com/embed/C24toLDD7Nc?si=DXaXyFI96eA3_q_A",
// //     title: "YouTube video player 11"
// //   }
// // ];

// // function Resources() {
// //   return (
// //     <>
// //     <Header />
// //     <div className="mt-16 w-11/12 max-w-6xl mx-auto my-8 text-center">
// //       {/* <h1 className="text-4xl font-bold mb-8 text-gray-800">Resources</h1> */}

// //       {/* Video Grid */}
// //       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
        
// //         {/* Map through the videos array to render each one */}
// //         {videos.map((video, index) => (
// //           <div key={index} className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden shadow-lg">
// //             <iframe
// //               className="w-[360px] h-[200px]"
// //               src={video.src}
// //               title={video.title}
// //               allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
// //               allowFullScreen
// //             ></iframe>
// //           </div>
// //         ))}

// //       </div>

// //       {/* "Watch More" Button */}
// //       <div className="flex justify-center">
// //         <a
// //           href="https://www.youtube.com/@learnwithrituarora"
// //           target="_blank"
// //           rel="noopener noreferrer"
// //           className="inline-block bg-red-600 text-white font-bold py-3 px-6 rounded-full text-base no-underline transition-transform transform hover:bg-red-700 hover:-translate-y-0.5"
// //         >
// //           Watch more videos
// //         </a>
// //       </div>
// //     </div>
// //     </>
// //   );
// // }

// // export default Resources;



// import React from 'react';
// import Header from '../components/Header';

// // Array of all video data
// const videos = [
//   { src: "https://www.youtube.com/embed/JwiAv6esTc4?si=IfHePKhYwZ7lSHaQ", title: "YouTube video player 1" },
//   { src: "https://www.youtube.com/embed/VWSDNPBp0C0?si=E5pHGlC0kMY0246r", title: "YouTube video player 2" },
//   { src: "https://www.youtube.com/embed/ISmmJCiqkyY?si=wU_-vQJL5bwIGlmg", title: "YouTube video player 3" },
//   { src: "https://www.youtube.com/embed/qhbtpLlfako?si=oIX8ntInpyA-Cb-P", title: "YouTube video player 4" },
//   { src: "https://www.youtube.com/embed/3ulDorvhVa8?si=CXUmEO8b0a8Ny6Nu", title: "YouTube video player 5" },
//   { src: "https://www.youtube.com/embed/zCjOoTDxefM?si=X7v7yW2awDYfGGNG", title: "YouTube video player 6" },
//   { src: "https://www.youtube.com/embed/aynxwO37ir0?si=UmQYlIQSvtRZ3B9n", title: "YouTube video player 7" },
//   { src: "https://www.youtube.com/embed/bLuthVP_UXI?si=GejNm0HA_kJiYo_D", title: "YouTube video player 8" },
//   { src: "https://www.youtube.com/embed/sUDf9SVPtkM?si=5IkwlNYObaNN2M0h", title: "YouTube video player 9" },
//   { src: "https://www.youtube.com/embed/QyUHuB6bxX0?si=Ivb8300H7qYmixfv", title: "YouTube video player 10" },
//   { src: "https://www.youtube.com/embed/C24toLDD7Nc?si=DXaXyFI96eA3_q_A", title: "YouTube video player 11" }
// ];

// function Resources() {
//   return (
//     // <>
//     //   <Header />
//     //   <div className="mt-20 w-11/12 max-w-6xl mx-auto my-8 text-center">
//     //     <h1 className="text-3xl md:text-4xl font-bold mb-10 text-gray-800">Resources</h1>

//     //     {/* Video Grid */}
//     //     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//     //       {videos.map((video, index) => (
//     //         <div
//     //           key={index}
//     //           className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black"
//     //         >
//     //           <iframe
//     //             className="w-full h-full"
//     //             src={video.src}
//     //             title={video.title}
//     //             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//     //             allowFullScreen
//     //           ></iframe>
//     //         </div>
//     //       ))}
//     //     </div>

//     //     {/* "Watch More" Button */}
//     //     <div className="flex justify-center">
//     //       <a
//     //         href="https://www.youtube.com/@learnwithrituarora"
//     //         target="_blank"
//     //         rel="noopener noreferrer"
//     //         className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-base transition-transform transform hover:bg-red-700 hover:-translate-y-1 shadow-md"
//     //       >
//     //         Watch more videos
//     //       </a>
//     //     </div>
//     //   </div>
//     // </>
//     <>
//   <Header />
//     <div className="mt-20 w-full md:w-11/12 max-w-6xl mx-auto px-4 my-8 text-center">
//   <h1 className="text-2xl md:text-4xl font-bold mb-8 text-gray-800">
//     Resources
//   </h1>

//   {/* Video Grid */}
//   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
//     {videos.map((video, index) => (
//       <div
//         key={index}
//         className="w-full aspect-video rounded-lg overflow-hidden shadow-lg bg-black"
//       >
//         <iframe
//           className="w-full h-full"
//           src={video.src}
//           title={video.title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
//           allowFullScreen
//         ></iframe>
//       </div>
//     ))}
//   </div>

//   {/* "Watch More" Button */}
//   <div className="flex justify-center">
//     <a
//       href="https://www.youtube.com/@learnwithrituarora"
//       target="_blank"
//       rel="noopener noreferrer"
//       className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-base transition-transform transform hover:bg-red-700 hover:-translate-y-1 shadow-md"
//     >
//       Watch more videos
//     </a>
//   </div>
// </div>
// </>

//   );
// }

// export default Resources;



import React from 'react';
import Header from '../components/Header';
import Footeer from '../components/Footeer';
import Footer from '../components/Footer';

// Array of all video data
const videos = [
  { src: "https://www.youtube.com/embed/JwiAv6esTc4?si=IfHePKhYwZ7lSHaQ", title: "YouTube video player 1" },
  { src: "https://www.youtube.com/embed/VWSDNPBp0C0?si=E5pHGlC0kMY0246r", title: "YouTube video player 2" },
  { src: "https://www.youtube.com/embed/ISmmJCiqkyY?si=wU_-vQJL5bwIGlmg", title: "YouTube video player 3" },
  { src: "https://www.youtube.com/embed/qhbtpLlfako?si=oIX8ntInpyA-Cb-P", title: "YouTube video player 4" },
  { src: "https://www.youtube.com/embed/3ulDorvhVa8?si=CXUmEO8b0a8Ny6Nu", title: "YouTube video player 5" },
  { src: "https://www.youtube.com/embed/zCjOoTDxefM?si=X7v7yW2awDYfGGNG", title: "YouTube video player 6" },
  { src: "https://www.youtube.com/embed/aynxwO37ir0?si=UmQYlIQSvtRZ3B9n", title: "YouTube video player 7" },
  { src: "https://www.youtube.com/embed/bLuthVP_UXI?si=GejNm0HA_kJiYo_D", title: "YouTube video player 8" },
  { src: "https://www.youtube.com/embed/sUDf9SVPtkM?si=5IkwlNYObaNN2M0h", title: "YouTube video player 9" },
  { src: "https://www.youtube.com/embed/QyUHuB6bxX0?si=Ivb8300H7qYmixfv", title: "YouTube video player 10" },
  { src: "https://www.youtube.com/embed/C24toLDD7Nc?si=DXaXyFI96eA3_q_A", title: "YouTube video player 11" }
];

function Resources() {
  return (
    <div style={{ background: "radial-gradient(circle at center, #ffffffff, #f8976334)" }}>
      <Header />
      <div className="mt-10 w-full md:w-11/12 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 my-2">
        
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-[#f89763] text-center">
          Resources
        </h1>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
          {videos.map((video, index) => (
            <div
              key={index}
              className="w-full aspect-video rounded-lg overflow-hidden"
            >
              <iframe
                className="w-full h-full"
                src={video.src}
                title={video.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>
          ))}
        </div>

        {/* "Watch More" Button */}
        <div className="flex justify-center">
          <a
            href="https://www.youtube.com/@learnwithrituarora"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-semibold py-3 px-6 rounded-full text-base transition-transform transform hover:bg-red-700 hover:-translate-y-1 shadow-md"
          >
            Watch more videos
          </a>
        </div>
      </div>
      <br />
    <Footer/>
    </div>
  );
}

export default Resources;
