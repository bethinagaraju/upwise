// import React, { useState } from 'react';
// import './ContactForm.css';

// interface FormState {
//   name: string;
//   email: string;
//   mobile: string;
//   message: string;
//   authorize: boolean;
// }

// const ContactForm: React.FC = () => {
//   const [form, setForm] = useState<FormState>({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     authorize: false,
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type, checked } = e.target;
//     setForm(prev => ({
//       ...prev,
//       [name]: type === 'checkbox' ? checked : value,
//     }));
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     // 👉 TODO: replace with real submit logic
//     console.table(form);
//   };

//   return (
//     <section className="talk-to-us-section">
//       <h2 className="section-title">Talk To Us</h2>

//       <form className="hubspot-form" onSubmit={handleSubmit}>
//         {/* Your Name */}
//         <div className="form-group">
//           <label htmlFor="name">
//             Your Name<span className="required">*</span>
//           </label>
//           <input
//             id="name"
//             name="name"
//             type="text"
//             required
//             value={form.name}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Work Email */}
//         <div className="form-group">
//           <label htmlFor="email">
//             Work Email <span className="required">*</span>
//           </label>
//           <input
//             id="email"
//             name="email"
//             type="email"
//             required
//             value={form.email}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Mobile */}
//         <div className="form-group">
//           <label htmlFor="mobile">
//             Mobile<span className="required">*</span>
//           </label>
//           <input
//             id="mobile"
//             name="mobile"
//             type="tel"
//             required
//             value={form.mobile}
//             onChange={handleChange}
//           />
//         </div>

//         {/* Message */}
//         <div className="form-group">
//           <label htmlFor="message">
//             Message<span className="required">*</span>
//           </label>
//           <textarea
//             id="message"
//             name="message"
//             required
//             value={form.message}
//             onChange={handleChange}
//             rows={4}
//           />
//         </div>

//         {/* Checkbox */}
//         <div className="form-check">
//           <input
//             id="authorize"
//             name="authorize"
//             type="checkbox"
//             checked={form.authorize}
//             onChange={handleChange}
//             required
//           />
//           <label htmlFor="authorize" className="checkbox-label">
//             I authorize&nbsp;Harappa&nbsp;to&nbsp;contact&nbsp;me
//             <span className="required">*</span>
//           </label>
//         </div>

//         {/* CTA */}
//         <button type="submit" className="submit-btn">
//           Schedule A Meeting
//         </button>
//       </form>

//       {/* HubSpot credit line */}
//       <p className="hubspot-note">
//         {/* swap the src below with an svg/asset in your project if desired */}
//         <img src="https://avatars.githubusercontent.com/u/326419?s=280&v=4" alt="" />
//         <span>
//           <a
//             href="https://www.hubspot.com/products/marketing/forms"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Create your own free forms
//           </a>
//           to generate leads from your website.
//         </span>
//       </p>
//     </section>
//   );
// };

// export default ContactForm;









import React, { useState } from 'react';
import './ContactForm.css';

interface FormState {
  name: string;
  email: string;
  mobile: string;
  message: string;
  authorize: boolean;
}

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    message: '',
    authorize: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    // Assert the target as HTMLInputElement for checkbox 'checked' property
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    setForm(prev => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 👉 TODO: replace with real submit logic
    console.table(form);
    alert('Form submitted! Check the console.');
  };

  return (

    <section  id='contact'>

      {/* <h1 className="text-center">TALK TO US</h1> */}
      
      <div className="contact-section">
      
      
      {/* Decorative background shapes */}
      <div className="blob blob1"></div>
      <div className="blob blob2"></div>
      

      <div className="contact-container">
        {/* Left Side: Informational Text */}
        <div className="contact-info">
          
          <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
          
          <p className="info-desc">
            Looking to supercharge your team's skills? We offer customized corporate training programs. Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
          </p>
        </div>

        {/* Right Side: The Form */}
        <div className="contact-form-wrapper">
          <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
           

            {/* Form Group for Name */}
            <div className="form-group">
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Your Name"
              />
            </div>

            {/* Form Group for Email */}
            <div className="form-group">
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="Work Email"
              />
            </div>

            {/* Form Group for Mobile */}
            <div className="form-group">
              <input
                id="mobile"
                name="mobile"
                type="tel"
                required
                value={form.mobile}
                onChange={handleChange}
                placeholder="Mobile Number"
              />
            </div>

            {/* Form Group for Message */}
            <div className="form-group">
              <textarea
                id="message"
                name="message"
                required
                value={form.message}
                onChange={handleChange}
                rows={4}
                placeholder="Your Message"
              />
            </div>

            {/* Checkbox */}
            <div className="form-check">
              <input
                id="authorize"
                name="authorize"
                type="checkbox"
                checked={form.authorize}
                onChange={handleChange}
                required
              />
              <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
                I authorize Upwise to contact me <span className="required">*</span>
              </label>
            </div>

            {/* Submit Button */}
            <button type="submit" className="submit-btn">
              Send Message
            </button>
          </form>
        </div>
      </div>
      </div>
    </section>
  );
};

export default ContactForm;
