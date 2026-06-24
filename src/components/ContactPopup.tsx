import React, { useState } from "react";
import emailjs from "emailjs-com";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  brochure: string;
}

const ContactPopup: React.FC<ContactPopupProps> = ({
  isOpen,
  onClose,
  brochure,
}) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [authorizeContact, setAuthorizeContact] = useState(false);

  if (!isOpen) return null;

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!authorizeContact) {
      alert("Please authorize contact.");
      return;
    }

    try {
      await emailjs.send(
        "service_fia16gg",
        "template_yhe3e2n",
        {
          from_name: formData.name,
          from_email: formData.email,
          from_mobile: formData.mobile,
          message: formData.message,
        },
        "RjaBjLzRhs3dZdy6q"
      );

      // Download brochure after successful submission
      const link = document.createElement("a");
      link.href = brochure;
      link.download = brochure.split("/").pop() || "brochure.pdf";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      alert("Form submitted successfully!");

      onClose();
    } catch (error) {
      console.error(error);
      alert("Failed to submit form.");
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg w-[90%] max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">
          Download Brochure
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Your Name*"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="email"
            name="email"
            placeholder="Work Email*"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          <input
            type="tel"
            name="mobile"
            placeholder="Mobile*"
            value={formData.mobile}
            onChange={handleChange}
            required
            className="w-full border p-3 rounded"
          />

          <textarea
            name="message"
            placeholder="Message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full border p-3 rounded"
          />

          <div className="flex items-center">
            <input
              type="checkbox"
              checked={authorizeContact}
              onChange={(e) => setAuthorizeContact(e.target.checked)}
            />
            <label className="ml-2 text-sm">
              I authorize contact
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-[#f89763] text-white py-3 rounded"
          >
            Submit & Download
          </button>

          <button
            type="button"
            onClick={onClose}
            className="w-full border py-3 rounded"
          >
            Cancel
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPopup;