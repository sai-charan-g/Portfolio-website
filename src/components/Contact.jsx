"use client";

import { useState } from "react";

const contacts = [
  {
    label: "Email",
    value: "saicharanreddy131@gmail.com",
    href: "mailto:saicharanreddy131@gmail.com",
    external: false,
  },
  {
    label: "GitHub",
    value: "github.com/sai-charan-g",
    href: "https://github.com/sai-charan-g",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "linkedin.com/in/g-sai-charan-8b1b10324",
    href: "https://www.linkedin.com/in/g-sai-charan-8b1b10324/",
    external: true,
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending your message.");
      }

      setStatus({
        type: "success",
        message: "Your message has been sent. I will get back to you soon.",
      });
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message || "Unable to send message right now. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <section className="section" id="contact">
      <div className="container">
        <div className="contact-card">
          <div className="contact-intro">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s build something useful.</h2>
            <p className="section-copy">
              If you have a role, freelance project, or collaboration idea, I&apos;m open to a
              conversation.
            </p>

            <div className="contact-note">
              <strong>Best for:</strong> web development roles, internship opportunities, and
              product ideas where clean UX and practical engineering matter.
            </div>

            <div className="contact-links">
              {contacts.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.external ? "_blank" : undefined}
                  rel={item.external ? "noreferrer" : undefined}
                >
                  <span>{item.label}</span>
                  <strong>{item.value}</strong>
                </a>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <label className="form-field">
              <span>Name</span>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </label>

            <label className="form-field">
              <span>Email</span>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </label>

            <label className="form-field">
              <span>Subject</span>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                placeholder="What is this about?"
                required
              />
            </label>

            <label className="form-field">
              <span>Message</span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Tell me a bit about your project or opportunity."
                rows="6"
                required
              />
            </label>

            {status.message ? (
              <p className={`form-status ${status.type}`} aria-live="polite">
                {status.message}
              </p>
            ) : null}

            <button className="button button-primary submit-button" type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
