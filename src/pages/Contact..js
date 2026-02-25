import React from "react";
import ContactSection from "../components/ContactSection";

const Contact = () => {
  return (
    <section className="relative  pt-20 bg-black overflow-hidden">
      <div className="relative  max-w-7xl mx-auto px-6 py-4">
        <span className=" border-emerald-400 text-emerald-400 bg-transparent border-2 py-2 px-2 rounded-full my-5 ">
          contact
        </span>
        <h1 className="text-white font-bold text-5xl mt-6">
          Let's Build Someting
        </h1>
        <p className="text-white font-semibold text-lg py-3">
          Have a project in mind? Let's discuss how we can work together to
          bring your vision to life.
        </p>
      </div>
      <ContactSection />
    </section>
  );
};

export default Contact;
