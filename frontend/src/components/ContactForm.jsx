import { useState } from "react";
import axios from "axios";
import "./ContactForm.css";

const ContactForm = ({ refreshContacts }) => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email) =>
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !isValidEmail(form.email)) {
      setError("Please fill all required fields correctly");
      return;
    }

    try {
      await axios.post("https://contact-manager-mern-ey69.onrender.com/api/contacts",form);


      setForm({ name: "", email: "", phone: "", message: "" });
      setError("");
      setSuccess(true);
      refreshContacts();

      // auto-hide popup after 2 seconds
      setTimeout(() => setSuccess(false), 2000);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="form-container">
      <h3>Contact Form</h3>

      {error && <p className="error">{error}</p>}

      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name *"
          value={form.name}
          onChange={handleChange}
        />

        <input
          name="email"
          placeholder="Email *"
          value={form.email}
          onChange={handleChange}
        />

        <input
          name="phone"
          placeholder="Phone *"
          value={form.phone}
          onChange={handleChange}
        />

        <textarea
          name="message"
          placeholder="Message (optional)"
          value={form.message}
          onChange={handleChange}
        />

        <button
          type="submit"
          disabled={!form.name || !form.phone || !isValidEmail(form.email)}
        >
          Submit
        </button>
      </form>

      {/* SUCCESS POPUP */}
      {success && (
        <div className="popup">
          <p>✅ Contact submitted successfully!</p>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
