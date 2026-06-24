// import React from 'react';
// import { ArrowUp, Mail, Phone, MapPin, Linkedin, Twitter, Facebook } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer style={{ background: 'linear-gradient(to bottom, white 0%, white 15%, #0f0b53 15%, #0f0b53 100%)', paddingTop: '6rem' }} className="text-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
//           <div>
//             <div className="flex items-center mb-6">
//               {/* <ArrowUp className="h-8 w-8 text-white" />
//               <span className="ml-2 text-2xl font-bold">UPWISE</span> */}
//               <img src='upwise-logo.jpg' alt="Upwise Logo" className="h-12 w-auto" />
//             </div>
//             <p className="text-[#ffffff] opacity-90 mb-6">
//               Empowering organizations worldwide with transformative corporate training solutions.
//             </p>
//             <div className="flex space-x-4">
//               <Linkedin className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
//               <Twitter className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
//               <Facebook className="h-6 w-6 text-white opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
//             </div>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Programs</h3>
//             <ul className="space-y-2 text-[#ffffff] opacity-90">
//               <li><a href="#" className="hover:opacity-100 transition-opacity">Excel Training</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">PowerPoint Mastery</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">Communication Skills</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">Productivity Training</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Company</h3>
//             <ul className="space-y-2 text-[#ffffff] opacity-90">
//               <li><a href="#" className="hover:opacity-100 transition-opacity">About Us</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">Our Team</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">Careers</a></li>
//               <li><a href="#" className="hover:opacity-100 transition-opacity">News</a></li>
//             </ul>
//           </div>

//           <div>
//             <h3 className="text-lg font-bold mb-4">Contact</h3>
//             <div className="space-y-3 text-[#ffffff] opacity-90">
//               <div className="flex items-center space-x-2">
//                 <Mail className="h-4 w-4" />
//                 <span>hello@upwise.com</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Phone className="h-4 w-4" />
//                 <span>98916 28225</span>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <MapPin className="h-4 w-4" />
//                 <span>New York, NY</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         <div className="border-t border-white mt-12 pt-8 text-center text-[#4a4a4a] opacity-90">
//           <p style={{ color: 'white' }}>&copy; 2024 Upwise. All rights reserved. | Privacy Policy | Terms of Service</p>
//         </div>
//       </div>
//     </footer>
//   );
// }






import React from 'react';
import { Mail, Phone, MapPin, X } from 'lucide-react';

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    // Main footer container with a dark background color matching the image
    <footer style={{ background: "radial-gradient(circle at center, #ffffffff, #f8976334)" }} className="text-white py-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid layout for the footer sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* First column: Logo, description, and social media (moved to bottom) */}
          <div>
            <div className="flex items-center mb-6">
              {/* Using the uploaded image for the logo, with a fallback placeholder */}
              <img
                src="upwise-logo.jpg"
                alt="Upwise Logo"
                className="h-12 w-auto mr-2"
                onError={(e) => {
                  const target = e.currentTarget;
                  target.onerror = null;
                  target.src = "https://placehold.co/48x48/FFA500/FFFFFF?text=U";
                  target.className = "h-12 w-auto mr-2 rounded-md";
                }}
              />
              {/* <span className="ml-2 text-2xl font-bold">Upwise</span> */}
            </div>
            <p className="text-[#4a4a4a] opacity-90 mb-6">
              Empowering professionals to grow smarter, present sharper,
              and perform better through expert-led corporate training
              and professional development programs.
            </p>
            {/* Contact information in the first column, as per the image */}
            {/* <div className="space-y-3 text-[#4a4a4a] opacity-90">
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@upwisetraining.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98196 28225</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>E-119 Sector 41, Noida- 201303</span>
              </div>
            </div> */}
          </div>

          {/* Second column: Programs */}
          <div className="md:pl-12">
            <h3 style={{ color: '#f89763' }} className="text-lg font-bold mb-4">Programs</h3>
            <ul className="space-y-2 text-[#4a4a4a] opacity-90">
              <li><Link to="/ignite" className="hover:opacity-100 transition-opacity">Ignite</Link></li>
              <li><Link to="/elevate" className="hover:opacity-100 transition-opacity">Elevate</Link></li>
              <li><Link to="/empower" className="hover:opacity-100 transition-opacity">Empower</Link></li>

            </ul>
          </div>

          {/* Third column: Resources (New section based on image) */}
          <div className="md:pl-12">
            <h3 style={{ color: '#f89763' }} className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-2 text-[#4a4a4a] opacity-90">
              <li><Link to="/gallery" className="hover:opacity-100 transition-opacity">Gallery</Link></li>
               <li><a href="/#about-us" className="hover:opacity-100 transition-opacity">About</a></li>
              <li><Link to="/resources" className="hover:opacity-100 transition-opacity">Resources</Link></li>
              
            </ul>
          </div>

          {/* Fourth column: Company */}
            <div className="space-y-3 text-[#4a4a4a] opacity-90">
              <h3 style={{ color: '#f89763' }} className="text-lg font-bold mb-4">Resources</h3>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>support@upwisetraining.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+91 98196 28225</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>E-119 Sector 41, Noida- 201303</span>
              </div>
            </div>
        </div>

        {/* Bottom section: Copyright, policy links, and social media icons */}
        <div className="border-t border-[#f89763] mt-4 pt-4 flex flex-col sm:flex-row justify-between items-center text-sm">
          {/* Copyright text */}
          <p className="text-[#f89763] opacity-90 text-center sm:text-left mb-4 sm:mb-0">
            &copy; 2026 Upwise. All rights reserved.
          </p>

          {/* Policy links */}
          <div className="flex space-x-4 text-[#f89763] opacity-90 mb-4 sm:mb-0">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Cookie Policy</a>
          </div>

          {/* Social media icons */}
          <div className="flex space-x-4">
<a href="https://www.linkedin.com/in/upwisetraining/" target="_blank" rel="noopener noreferrer">
              <span className="h-6 w-6 inline-flex items-center justify-center text-[#f89763] font-bold">in</span>
            </a>

<a href="https://x.com/UpWiseTraining" target="_blank" rel="noopener noreferrer">
            <X className="h-6 w-6 text-[#f89763] opacity-80 hover:opacity-100 cursor-pointer transition-opacity" />
            </a>

            <a href="https://www.instagram.com/upwisetraining/" target="_blank" rel="noopener noreferrer">
              <span className="h-6 w-6 inline-flex items-center justify-center text-[#f89763] font-bold">IG</span>
            </a>
            
          </div>
        </div>
        <div>
          <p className="text-center text-[#f89763] opacity-90">
            Developed and Maintained by <a href="https://zynlogic.com" target="_blank" rel="noopener noreferrer" className="hover:opacity-100 transition-opacity">
              <img src="ZylogicLogo.png" className="h-6  inline-block" alt="Zylogic Technologies" />
              {/* <span className="ml-2">@Zynlogic Technologies</span> */}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
