// // // // // // import React, { useState } from 'react';
// // // // // // import './ContactForm.css';

// // // // // // interface FormState {
// // // // // //   name: string;
// // // // // //   email: string;
// // // // // //   mobile: string;
// // // // // //   message: string;
// // // // // //   authorize: boolean;
// // // // // // }

// // // // // // const ContactForm: React.FC = () => {
// // // // // //   const [form, setForm] = useState<FormState>({
// // // // // //     name: '',
// // // // // //     email: '',
// // // // // //     mobile: '',
// // // // // //     message: '',
// // // // // //     authorize: false,
// // // // // //   });

// // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // //     const { name, value, type, checked } = e.target;
// // // // // //     setForm(prev => ({
// // // // // //       ...prev,
// // // // // //       [name]: type === 'checkbox' ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     // 👉 TODO: replace with real submit logic
// // // // // //     console.table(form);
// // // // // //   };

// // // // // //   return (
// // // // // //     <section className="talk-to-us-section">
// // // // // //       <h2 className="section-title">Talk To Us</h2>

// // // // // //       <form className="hubspot-form" onSubmit={handleSubmit}>
// // // // // //         {/* Your Name */}
// // // // // //         <div className="form-group">
// // // // // //           <label htmlFor="name">
// // // // // //             Your Name<span className="required">*</span>
// // // // // //           </label>
// // // // // //           <input
// // // // // //             id="name"
// // // // // //             name="name"
// // // // // //             type="text"
// // // // // //             required
// // // // // //             value={form.name}
// // // // // //             onChange={handleChange}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Work Email */}
// // // // // //         <div className="form-group">
// // // // // //           <label htmlFor="email">
// // // // // //             Work Email <span className="required">*</span>
// // // // // //           </label>
// // // // // //           <input
// // // // // //             id="email"
// // // // // //             name="email"
// // // // // //             type="email"
// // // // // //             required
// // // // // //             value={form.email}
// // // // // //             onChange={handleChange}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Mobile */}
// // // // // //         <div className="form-group">
// // // // // //           <label htmlFor="mobile">
// // // // // //             Mobile<span className="required">*</span>
// // // // // //           </label>
// // // // // //           <input
// // // // // //             id="mobile"
// // // // // //             name="mobile"
// // // // // //             type="tel"
// // // // // //             required
// // // // // //             value={form.mobile}
// // // // // //             onChange={handleChange}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Message */}
// // // // // //         <div className="form-group">
// // // // // //           <label htmlFor="message">
// // // // // //             Message<span className="required">*</span>
// // // // // //           </label>
// // // // // //           <textarea
// // // // // //             id="message"
// // // // // //             name="message"
// // // // // //             required
// // // // // //             value={form.message}
// // // // // //             onChange={handleChange}
// // // // // //             rows={4}
// // // // // //           />
// // // // // //         </div>

// // // // // //         {/* Checkbox */}
// // // // // //         <div className="form-check">
// // // // // //           <input
// // // // // //             id="authorize"
// // // // // //             name="authorize"
// // // // // //             type="checkbox"
// // // // // //             checked={form.authorize}
// // // // // //             onChange={handleChange}
// // // // // //             required
// // // // // //           />
// // // // // //           <label htmlFor="authorize" className="checkbox-label">
// // // // // //             I authorize&nbsp;Harappa&nbsp;to&nbsp;contact&nbsp;me
// // // // // //             <span className="required">*</span>
// // // // // //           </label>
// // // // // //         </div>

// // // // // //         {/* CTA */}
// // // // // //         <button type="submit" className="submit-btn">
// // // // // //           Schedule A Meeting
// // // // // //         </button>
// // // // // //       </form>

// // // // // //       {/* HubSpot credit line */}
// // // // // //       <p className="hubspot-note">
// // // // // //         {/* swap the src below with an svg/asset in your project if desired */}
// // // // // //         <img src="https://avatars.githubusercontent.com/u/326419?s=280&v=4" alt="" />
// // // // // //         <span>
// // // // // //           <a
// // // // // //             href="https://www.hubspot.com/products/marketing/forms"
// // // // // //             target="_blank"
// // // // // //             rel="noopener noreferrer"
// // // // // //           >
// // // // // //             Create your own free forms
// // // // // //           </a>
// // // // // //           to generate leads from your website.
// // // // // //         </span>
// // // // // //       </p>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ContactForm;









// // // // // // import React, { useState } from 'react';
// // // // // // import './ContactForm.css';

// // // // // // interface FormState {
// // // // // //   name: string;
// // // // // //   email: string;
// // // // // //   mobile: string;
// // // // // //   message: string;
// // // // // //   authorize: boolean;
// // // // // // }

// // // // // // const ContactForm: React.FC = () => {
// // // // // //   const [form, setForm] = useState<FormState>({
// // // // // //     name: '',
// // // // // //     email: '',
// // // // // //     mobile: '',
// // // // // //     message: '',
// // // // // //     authorize: false,
// // // // // //   });

// // // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // // //     const { name, value, type } = e.target;
// // // // // //     const isCheckbox = type === 'checkbox';
// // // // // //     // Assert the target as HTMLInputElement for checkbox 'checked' property
// // // // // //     const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

// // // // // //     setForm(prev => ({
// // // // // //       ...prev,
// // // // // //       [name]: isCheckbox ? checked : value,
// // // // // //     }));
// // // // // //   };

// // // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // // //     e.preventDefault();
// // // // // //     // 👉 TODO: replace with real submit logic
// // // // // //     console.table(form);
// // // // // //     alert('Form submitted! Check the console.');
// // // // // //   };

// // // // // //   return (

// // // // // //     <section  id='contact'>

// // // // // //       {/* <h1 className="text-center">TALK TO US</h1> */}
      
// // // // // //       <div className="contact-section">
      
      
// // // // // //       {/* Decorative background shapes */}
// // // // // //       <div className="blob blob1"></div>
// // // // // //       <div className="blob blob2"></div>
      

// // // // // //       <div className="contact-container">
// // // // // //         {/* Left Side: Informational Text */}
// // // // // //         <div className="contact-info">
          
// // // // // //           <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
          
// // // // // //           <p className="info-desc">
// // // // // //             Looking to supercharge your team's skills? We offer customized corporate training programs. Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
// // // // // //           </p>
// // // // // //         </div>

// // // // // //         {/* Right Side: The Form */}
// // // // // //         <div className="contact-form-wrapper">
// // // // // //           <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
           

// // // // // //             {/* Form Group for Name */}
// // // // // //             <div className="form-group">
// // // // // //               <input
// // // // // //                 id="name"
// // // // // //                 name="name"
// // // // // //                 type="text"
// // // // // //                 required
// // // // // //                 value={form.name}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Your Name"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Form Group for Email */}
// // // // // //             <div className="form-group">
// // // // // //               <input
// // // // // //                 id="email"
// // // // // //                 name="email"
// // // // // //                 type="email"
// // // // // //                 required
// // // // // //                 value={form.email}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Work Email"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Form Group for Mobile */}
// // // // // //             <div className="form-group">
// // // // // //               <input
// // // // // //                 id="mobile"
// // // // // //                 name="mobile"
// // // // // //                 type="tel"
// // // // // //                 required
// // // // // //                 value={form.mobile}
// // // // // //                 onChange={handleChange}
// // // // // //                 placeholder="Mobile Number"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Form Group for Message */}
// // // // // //             <div className="form-group">
// // // // // //               <textarea
// // // // // //                 id="message"
// // // // // //                 name="message"
// // // // // //                 required
// // // // // //                 value={form.message}
// // // // // //                 onChange={handleChange}
// // // // // //                 rows={4}
// // // // // //                 placeholder="Your Message"
// // // // // //               />
// // // // // //             </div>

// // // // // //             {/* Checkbox */}
// // // // // //             <div className="form-check">
// // // // // //               <input
// // // // // //                 id="authorize"
// // // // // //                 name="authorize"
// // // // // //                 type="checkbox"
// // // // // //                 checked={form.authorize}
// // // // // //                 onChange={handleChange}
// // // // // //                 required
// // // // // //               />
// // // // // //               <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
// // // // // //                 I authorize Upwise to contact me <span className="required">*</span>
// // // // // //               </label>
// // // // // //             </div>

// // // // // //             {/* Submit Button */}
// // // // // //             <button type="submit" className="submit-btn">
// // // // // //               Send Message
// // // // // //             </button>
// // // // // //           </form>
// // // // // //         </div>
// // // // // //       </div>
// // // // // //       </div>
// // // // // //     </section>
// // // // // //   );
// // // // // // };

// // // // // // export default ContactForm;



// // // // // import React, { useState } from 'react';
// // // // // import './ContactForm.css';

// // // // // interface FormState {
// // // // //   name: string;
// // // // //   email: string;
// // // // //   mobile: string;
// // // // //   message: string;
// // // // //   authorize: boolean;
// // // // // }

// // // // // const ContactForm: React.FC = () => {
// // // // //   const [form, setForm] = useState<FormState>({
// // // // //     name: '',
// // // // //     email: '',
// // // // //     mobile: '',
// // // // //     message: '',
// // // // //     authorize: false,
// // // // //   });

// // // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // // //     const { name, value, type } = e.target;
// // // // //     const isCheckbox = type === 'checkbox';
// // // // //     const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

// // // // //     setForm(prev => ({
// // // // //       ...prev,
// // // // //       [name]: isCheckbox ? checked : value,
// // // // //     }));
// // // // //   };

// // // // //   const handleSubmit = (e: React.FormEvent) => {
// // // // //     e.preventDefault();

// // // // //     const subject = encodeURIComponent(`Contact Form Submission from ${form.name}`);
// // // // //     const body = encodeURIComponent(
// // // // //       `Name: ${form.name}\n` +
// // // // //       `Email: ${form.email}\n` +
// // // // //       `Mobile: ${form.mobile}\n` +
// // // // //       `Message: ${form.message}\n`
// // // // //     );

// // // // //     // Open default email client with pre-filled data
// // // // //     window.location.href = `mailto:support@upwisetraining.com?subject=${subject}&body=${body}`;
// // // // //   };

// // // // //   return (
// // // // //     <section id='contact'>
// // // // //       <div className="contact-section">
// // // // //         {/* Decorative background shapes */}
// // // // //         <div className="blob blob1"></div>
// // // // //         <div className="blob blob2"></div>

// // // // //         <div className="contact-container">
// // // // //           {/* Left Side: Informational Text */}
// // // // //           <div className="contact-info">
// // // // //             <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
// // // // //             <p className="info-desc">
// // // // //               Looking to supercharge your team's skills? We offer customized corporate training programs. 
// // // // //               Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
// // // // //             </p>
// // // // //           </div>

// // // // //           {/* Right Side: The Form */}
// // // // //           <div className="contact-form-wrapper">
// // // // //             <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
// // // // //               {/* Form Group for Name */}
// // // // //               <div className="form-group">
// // // // //                 <input
// // // // //                   id="name"
// // // // //                   name="name"
// // // // //                   type="text"
// // // // //                   required
// // // // //                   value={form.name}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Your Name"
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Form Group for Email */}
// // // // //               <div className="form-group">
// // // // //                 <input
// // // // //                   id="email"
// // // // //                   name="email"
// // // // //                   type="email"
// // // // //                   required
// // // // //                   value={form.email}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Work Email"
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Form Group for Mobile */}
// // // // //               <div className="form-group">
// // // // //                 <input
// // // // //                   id="mobile"
// // // // //                   name="mobile"
// // // // //                   type="tel"
// // // // //                   required
// // // // //                   value={form.mobile}
// // // // //                   onChange={handleChange}
// // // // //                   placeholder="Mobile Number"
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Form Group for Message */}
// // // // //               <div className="form-group">
// // // // //                 <textarea
// // // // //                   id="message"
// // // // //                   name="message"
// // // // //                   required
// // // // //                   value={form.message}
// // // // //                   onChange={handleChange}
// // // // //                   rows={4}
// // // // //                   placeholder="Your Message"
// // // // //                 />
// // // // //               </div>

// // // // //               {/* Checkbox */}
// // // // //               <div className="form-check">
// // // // //                 <input
// // // // //                   id="authorize"
// // // // //                   name="authorize"
// // // // //                   type="checkbox"
// // // // //                   checked={form.authorize}
// // // // //                   onChange={handleChange}
// // // // //                   required
// // // // //                 />
// // // // //                 <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
// // // // //                   I authorize Upwise to contact me <span className="required">*</span>
// // // // //                 </label>
// // // // //               </div>

// // // // //               {/* Submit Button */}
// // // // //               <button type="submit" className="submit-btn">
// // // // //                 Send Message
// // // // //               </button>
// // // // //             </form>
// // // // //           </div>
// // // // //         </div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // };

// // // // // export default ContactForm;


// // // // import React, { useState } from 'react';
// // // // import emailjs from 'emailjs-com';
// // // // import './ContactForm.css';

// // // // interface FormState {
// // // //   name: string;
// // // //   email: string;
// // // //   mobile: string;
// // // //   message: string;
// // // //   authorize: boolean;
// // // // }

// // // // const SERVICE_ID = 'service_xxxxxxx'; // 🔹 Replace with your EmailJS Service ID
// // // // const TEMPLATE_ID = 'template_fmqu3ea'; // ✅ Your EmailJS Template ID
// // // // const PUBLIC_KEY = 'YOUR_PUBLIC_KEY'; // 🔹 Replace with your EmailJS Public Key

// // // // const ContactForm: React.FC = () => {
// // // //   const [form, setForm] = useState<FormState>({
// // // //     name: '',
// // // //     email: '',
// // // //     mobile: '',
// // // //     message: '',
// // // //     authorize: false,
// // // //   });

// // // //   const [isSending, setIsSending] = useState(false);

// // // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // // //     const { name, value, type } = e.target;
// // // //     const isCheckbox = type === 'checkbox';
// // // //     const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

// // // //     setForm(prev => ({
// // // //       ...prev,
// // // //       [name]: isCheckbox ? checked : value,
// // // //     }));
// // // //   };

// // // //   const handleSubmit = (e: React.FormEvent) => {
// // // //     e.preventDefault();

// // // //     if (!form.authorize) {
// // // //       alert('Please authorize contact permission.');
// // // //       return;
// // // //     }

// // // //     setIsSending(true);

// // // //     const templateParams = {
// // // //       name: form.name,
// // // //       email: form.email,
// // // //       mobile: form.mobile,
// // // //       message: form.message,
// // // //       time: new Date().toLocaleString(),
// // // //     };

// // // //     emailjs
// // // //       .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
// // // //       .then(() => {
// // // //         alert('✅ Message sent successfully! We’ll get back to you soon.');
// // // //         setForm({
// // // //           name: '',
// // // //           email: '',
// // // //           mobile: '',
// // // //           message: '',
// // // //           authorize: false,
// // // //         });
// // // //       })
// // // //       .catch((error) => {
// // // //         console.error('EmailJS Error:', error);
// // // //         alert('❌ Failed to send message. Please try again later.');
// // // //       })
// // // //       .finally(() => setIsSending(false));
// // // //   };

// // // //   return (
// // // //     <section id="contact">
// // // //       <div className="contact-section">
// // // //         <div className="blob blob1"></div>
// // // //         <div className="blob blob2"></div>

// // // //         <div className="contact-container">
// // // //           {/* Left Info */}
// // // //           <div className="contact-info">
// // // //             <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
// // // //             <p className="info-desc">
// // // //               Looking to supercharge your team's skills? We offer customized corporate training programs.
// // // //               Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
// // // //             </p>
// // // //           </div>

// // // //           {/* Form */}
// // // //           <div className="contact-form-wrapper">
// // // //             <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
// // // //               <div className="form-group">
// // // //                 <input
// // // //                   id="name"
// // // //                   name="name"
// // // //                   type="text"
// // // //                   required
// // // //                   value={form.name}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Your Name"
// // // //                 />
// // // //               </div>

// // // //               <div className="form-group">
// // // //                 <input
// // // //                   id="email"
// // // //                   name="email"
// // // //                   type="email"
// // // //                   required
// // // //                   value={form.email}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Work Email"
// // // //                 />
// // // //               </div>

// // // //               <div className="form-group">
// // // //                 <input
// // // //                   id="mobile"
// // // //                   name="mobile"
// // // //                   type="tel"
// // // //                   required
// // // //                   value={form.mobile}
// // // //                   onChange={handleChange}
// // // //                   placeholder="Mobile Number"
// // // //                 />
// // // //               </div>

// // // //               <div className="form-group">
// // // //                 <textarea
// // // //                   id="message"
// // // //                   name="message"
// // // //                   required
// // // //                   value={form.message}
// // // //                   onChange={handleChange}
// // // //                   rows={4}
// // // //                   placeholder="Your Message"
// // // //                 />
// // // //               </div>

// // // //               <div className="form-check">
// // // //                 <input
// // // //                   id="authorize"
// // // //                   name="authorize"
// // // //                   type="checkbox"
// // // //                   checked={form.authorize}
// // // //                   onChange={handleChange}
// // // //                   required
// // // //                 />
// // // //                 <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
// // // //                   I authorize Upwise to contact me <span className="required">*</span>
// // // //                 </label>
// // // //               </div>

// // // //               <button type="submit" className="submit-btn" disabled={isSending}>
// // // //                 {isSending ? 'Sending...' : 'Send Message'}
// // // //               </button>
// // // //             </form>
// // // //           </div>
// // // //         </div>
// // // //       </div>
// // // //     </section>
// // // //   );
// // // // };

// // // // export default ContactForm;



// // // import React, { useState } from 'react';
// // // import emailjs from 'emailjs-com';
// // // import './ContactForm.css';

// // // interface FormState {
// // //   name: string;
// // //   email: string;
// // //   mobile: string;
// // //   message: string;
// // //   authorize: boolean;
// // // }

// // // const SERVICE_ID = 'service_3g0c3qr'; // Your EmailJS Service ID
// // // const TEMPLATE_ID = 'template_fmqu3ea'; // Your EmailJS Template ID
// // // const PUBLIC_KEY = 'emyU64ABRRLgzdzuQ'; // Your EmailJS Public Key

// // // const ContactForm: React.FC = () => {
// // //   const [form, setForm] = useState<FormState>({
// // //     name: '',
// // //     email: '',
// // //     mobile: '',
// // //     message: '',
// // //     authorize: false,
// // //   });

// // //   const [isSending, setIsSending] = useState(false);

// // //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// // //     const { name, value, type } = e.target;
// // //     const isCheckbox = type === 'checkbox';
// // //     const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

// // //     setForm(prev => ({
// // //       ...prev,
// // //       [name]: isCheckbox ? checked : value,
// // //     }));
// // //   };

// // //   const handleSubmit = (e: React.FormEvent) => {
// // //     e.preventDefault();

// // //     if (!form.authorize) {
// // //       alert('Please authorize contact permission.');
// // //       return;
// // //     }

// // //     setIsSending(true);

// // //     const templateParams = {
// // //       name: form.name,
// // //       email: form.email,
// // //       mobile: form.mobile,
// // //       message: form.message,
// // //       time: new Date().toLocaleString(),
// // //     };

// // //     emailjs
// // //       .send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY)
// // //       .then(() => {
// // //         alert('✅ Message sent successfully! We’ll get back to you soon.');
// // //         setForm({
// // //           name: '',
// // //           email: '',
// // //           mobile: '',
// // //           message: '',
// // //           authorize: false,
// // //         });
// // //       })
// // //       .catch((error) => {
// // //         console.error('EmailJS Error:', error);
// // //         alert('❌ Failed to send message. Please try again later.');
// // //       })
// // //       .finally(() => setIsSending(false));
// // //   };

// // //   return (
// // //     <section id="contact">
// // //       <div className="contact-section">
// // //         <div className="blob blob1"></div>
// // //         <div className="blob blob2"></div>

// // //         <div className="contact-container">
// // //           {/* Left Info */}
// // //           <div className="contact-info">
// // //             <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
// // //             <p className="info-desc">
// // //               Looking to supercharge your team's skills? We offer customized corporate training programs.
// // //               Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
// // //             </p>
// // //           </div>

// // //           {/* Form */}
// // //           <div className="contact-form-wrapper">
// // //             <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
// // //               <div className="form-group">
// // //                 <input
// // //                   id="name"
// // //                   name="name"
// // //                   type="text"
// // //                   required
// // //                   value={form.name}
// // //                   onChange={handleChange}
// // //                   placeholder="Your Name"
// // //                 />
// // //               </div>

// // //               <div className="form-group">
// // //                 <input
// // //                   id="email"
// // //                   name="email"
// // //                   type="email"
// // //                   required
// // //                   value={form.email}
// // //                   onChange={handleChange}
// // //                   placeholder="Work Email"
// // //                 />
// // //               </div>

// // //               <div className="form-group">
// // //                 <input
// // //                   id="mobile"
// // //                   name="mobile"
// // //                   type="tel"
// // //                   required
// // //                   value={form.mobile}
// // //                   onChange={handleChange}
// // //                   placeholder="Mobile Number"
// // //                 />
// // //               </div>

// // //               <div className="form-group">
// // //                 <textarea
// // //                   id="message"
// // //                   name="message"
// // //                   required
// // //                   value={form.message}
// // //                   onChange={handleChange}
// // //                   rows={4}
// // //                   placeholder="Your Message"
// // //                 />
// // //               </div>

// // //               <div className="form-check">
// // //                 <input
// // //                   id="authorize"
// // //                   name="authorize"
// // //                   type="checkbox"
// // //                   checked={form.authorize}
// // //                   onChange={handleChange}
// // //                   required
// // //                 />
// // //                 <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
// // //                   I authorize Upwise to contact me <span className="required">*</span>
// // //                 </label>
// // //               </div>

// // //               <button type="submit" className="submit-btn" disabled={isSending}>
// // //                 {isSending ? 'Sending...' : 'Send Message'}
// // //               </button>
// // //             </form>
// // //           </div>
// // //         </div>
// // //       </div>
// // //     </section>
// // //   );
// // // };

// // // export default ContactForm;



// import React, { useState } from 'react';
// import axios from 'axios';
// import './ContactForm.css';

// interface FormState {
//   name: string;
//   email: string;
//   mobile: string;
//   message: string;
//   authorize: boolean;
// }

// const RESEND_API_KEY = 're_GLyKxevQ_734ieXqYTC7BDid6F3ma9JQf'; // Your Resend API Key

// const ContactForm: React.FC = () => {
//   const [form, setForm] = useState<FormState>({
//     name: '',
//     email: '',
//     mobile: '',
//     message: '',
//     authorize: false,
//   });

//   const [isSending, setIsSending] = useState(false);

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value, type } = e.target;
//     const isCheckbox = type === 'checkbox';
//     const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

//     setForm(prev => ({
//       ...prev,
//       [name]: isCheckbox ? checked : value,
//     }));
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!form.authorize) {
//       alert('Please authorize contact permission.');
//       return;
//     }

//     setIsSending(true);

//     try {
//       await axios.post(
//         'https://api.resend.com/emails',
//         {
//           from: 'onboarding@resend.dev', // Must be verified in Resend dashboard
//           to: 'bethinagaraju57@gmail.com',
//           subject: `Contact Form Submission from ${form.name}`,
//           html: `
//             <h2>New Contact Form Submission</h2>
//             <p><strong>Name:</strong> ${form.name}</p>
//             <p><strong>Email:</strong> ${form.email}</p>
//             <p><strong>Mobile:</strong> ${form.mobile}</p>
//             <p><strong>Message:</strong> ${form.message}</p>
//             <p><em>Time: ${new Date().toLocaleString()}</em></p>
//           `,
//         },
//         {
//           headers: {
//             Authorization: `Bearer ${RESEND_API_KEY}`,
//             'Content-Type': 'application/json',
//           },
//         }
//       );

//       alert('✅ Message sent successfully! We’ll get back to you soon.');
//       setForm({
//         name: '',
//         email: '',
//         mobile: '',
//         message: '',
//         authorize: false,
//       });
//     } catch (error) {
//       console.error('Resend Error:', error);
//       alert('❌ Failed to send message. Please try again later.');
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <section id="contact">
//       <div className="contact-section">
//         <div className="blob blob1"></div>
//         <div className="blob blob2"></div>

//         <div className="contact-container">
//           {/* Left Info */}
//           <div className="contact-info">
//             <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
//             <p className="info-desc">
//               Looking to supercharge your team's skills? We offer customized corporate training programs.
//               Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
//             </p>
//           </div>

//           {/* Form */}
//           <div className="contact-form-wrapper">
//             <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
//               <div className="form-group">
//                 <input
//                   id="name"
//                   name="name"
//                   type="text"
//                   required
//                   value={form.name}
//                   onChange={handleChange}
//                   placeholder="Your Name"
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   id="email"
//                   name="email"
//                   type="email"
//                   required
//                   value={form.email}
//                   onChange={handleChange}
//                   placeholder="Work Email"
//                 />
//               </div>

//               <div className="form-group">
//                 <input
//                   id="mobile"
//                   name="mobile"
//                   type="tel"
//                   required
//                   value={form.mobile}
//                   onChange={handleChange}
//                   placeholder="Mobile Number"
//                 />
//               </div>

//               <div className="form-group">
//                 <textarea
//                   id="message"
//                   name="message"
//                   required
//                   value={form.message}
//                   onChange={handleChange}
//                   rows={4}
//                   placeholder="Your Message"
//                 />
//               </div>

//               <div className="form-check">
//                 <input
//                   id="authorize"
//                   name="authorize"
//                   type="checkbox"
//                   checked={form.authorize}
//                   onChange={handleChange}
//                   required
//                 />
//                 <label htmlFor="authorize" className="checkbox-label" style={{ color: 'black' }}>
//                   I authorize Upwise to contact me <span className="required">*</span>
//                 </label>
//               </div>

//               <button type="submit" className="submit-btn" disabled={isSending}>
//                 {isSending ? 'Sending...' : 'Send Message'}
//               </button>
//             </form>
//           </div>
//         </div>
//       </div>
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

type SendMailResponse = {
  success: boolean;
  message: string;
};

const ContactForm: React.FC = () => {
  const [form, setForm] = useState<FormState>({
    name: '',
    email: '',
    mobile: '',
    message: '',
    authorize: false,
  });

  const [isSending, setIsSending] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const isCheckbox = type === 'checkbox';
    const checked = isCheckbox ? (e.target as HTMLInputElement).checked : false;

    setForm((prev) => ({
      ...prev,
      [name]: isCheckbox ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!form.authorize) {
      alert('Please authorize contact permission.');
      return;
    }

    if (isSending) return;

    setIsSending(true);
    try {
      const payload = {
        name: form.name,
        email: form.email,
        phone: form.mobile,
        message: form.message,
      };

      const res = await fetch('https://euphonious-treacle-d57527.netlify.app/.netlify/functions/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });

      const data = (await res.json()) as SendMailResponse;

      if (data?.success) {
        alert(data.message || 'Email sent successfully.');
        setForm({
          name: '',
          email: '',
          mobile: '',
          message: '',
          authorize: false,
        });
      } else {
        alert(data?.message || 'Failed to send email. Please try again.');
      }
    } catch (error) {
      console.error('Send mail error:', error);
      alert('Failed to send email. Please check your connection and try again.');
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact-section">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>

        <div className="contact-container">
          {/* Left Info */}
          <div className="contact-info">
            <h1 className="info-title">Partner with us to unlock your team's potential.</h1>
            <p className="info-desc">
              Looking to supercharge your team's skills? We offer customized corporate training programs.
              Fill out the form, and our team will get back to you within 24 hours to discuss your training needs.
            </p>
          </div>

          {/* Form */}
          <div className="contact-form-wrapper">
            <form className="glass-form" onSubmit={handleSubmit} autoComplete="off">
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
