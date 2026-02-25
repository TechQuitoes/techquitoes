import React, { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

import emailjs from "@emailjs/browser";
import useFormValidation from "../hook/useFormValidation";
const initialValues = {
  name: "",
  email: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
};

const ContactSection = () => {
  const [status, setStatus] = useState("");
  const { values, errors, handleChange, validate, setValues } =
    useFormValidation(initialValues);

  const handleSubmit = (e) => {
    e.preventDefault();

    // First validate form
    if (!validate()) return;

    emailjs
      .send(
        "service_8n00s9q",
        "template_17p0h2q",
        {
          from_name: values.name,
          from_email: values.email,
          project_type: values.projectType,
          budget: values.budget,
          timeline: values.timeline,
          message: values.message,
        },
        "-gsFCF1-xb9aMUFIn",
      )
      .then(
        () => {
          setStatus("success");
          setValues(initialValues);

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
        () => {
          setStatus("error");

          setTimeout(() => {
            setStatus("");
          }, 4000);
        },
      );
  };

  return (
    <section className="bg-[#070B14] text-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16">
        {/* LEFT SIDE */}
        <div className="space-y-10">
          <div>
            <h2 className="text-4xl font-bold mb-8">Get in Touch</h2>

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#0E1627] p-3 rounded-xl border border-cyan-500/30">
                <Mail className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="font-semibold">Email</p>
                <p className="text-gray-400 text-sm">hariomruhela0@gmail.com</p>
              </div>
            </div>

            <div className="flex items-start gap-4 mb-6">
              <div className="bg-[#0E1627] p-3 rounded-xl border border-cyan-500/30">
                <Phone className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="font-semibold">Phone</p>
                <p className="text-gray-400 text-sm">+91 8770948303</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#0E1627] p-3 rounded-xl border border-cyan-500/30">
                <MapPin className="text-cyan-400" size={20} />
              </div>
              <div>
                <p className="font-semibold">Location</p>
                <p className="text-gray-400 text-sm">Based in India</p>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE FORM */}
        <div>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label>Name *</label>
                <input
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className={`w-full mt-2 bg-[#0E1627] border ${
                    errors.name ? "border-red-500" : "border-gray-700"
                  } rounded-xl px-4 py-3`}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>

              <div>
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className={`w-full mt-2 bg-[#0E1627] border ${
                    errors.email ? "border-red-500" : "border-gray-700"
                  } rounded-xl px-4 py-3`}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
            </div>

            {/* Project + Budget */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label>Project Type</label>
                <select
                  name="projectType"
                  value={values.projectType}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#0E1627] border ${
                    errors.projectType ? "border-red-500" : "border-gray-700"
                  } rounded-xl px-4 py-3`}
                >
                  <option>Select a service</option>
                  <option>Frontend Development</option>
                  <option>Backend Development</option>
                  <option>App Development</option>
                  <option>Cloud & DevOps</option>
                </select>
                {errors.projectType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.projectType}
                  </p>
                )}
              </div>

              <div>
                <label>Budget Range</label>
                <select
                  name="budget"
                  value={values.budget}
                  onChange={handleChange}
                  className={`w-full mt-2 bg-[#0E1627] border ${
                    errors.budget ? "border-red-500" : "border-gray-700"
                  } rounded-xl px-4 py-3`}
                >
                  <option>Select budget</option>
                  <option>$500 - $1000</option>
                  <option>$1000 - $5000</option>
                  <option>$5000+</option>
                </select>
                {errors.budget && (
                  <p className="text-red-500 text-sm mt-1">{errors.budget}</p>
                )}
              </div>
            </div>

            {/* Timeline */}
            <div>
              <label>Timeline</label>
              <select
                name="timeline"
                value={values.timeline}
                onChange={handleChange}
                className={`w-full mt-2 bg-[#0E1627] border ${
                  errors.timeline ? "border-red-500" : "border-gray-700"
                } rounded-xl px-4 py-3`}
              >
                <option>Select timeline</option>
                <option>1-2 Weeks</option>
                <option>1 Month</option>
                <option>2-3 Months</option>
              </select>
              {errors.timeline && (
                <p className="text-red-500 text-sm mt-1">{errors.timeline}</p>
              )}
            </div>

            {/* Message */}
            <div>
              <label>Message *</label>
              <textarea
                name="message"
                value={values.message}
                onChange={handleChange}
                rows="5"
                placeholder="Tell me about your project..."
                className={`w-full mt-2 bg-[#0E1627] border ${
                  errors.message ? "border-red-500" : "border-gray-700"
                } rounded-xl px-4 py-3 resize-none`}
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* Submit */}
            <button
              type="submit"
              className="flex items-center gap-2 px-8 py-3 rounded-xl bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-semibold hover:opacity-90 transition"
            >
              Send Message
              <Send size={18} />
            </button>
            {/* ✅ Success / Error Message */}
            {status === "success" && (
              <p className="text-green-400 mt-3 text-sm font-medium">
                ✅ Message sent successfully!
              </p>
            )}

            {status === "error" && (
              <p className="text-red-400 mt-3 text-sm font-medium">
                ❌ Failed to send message. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
