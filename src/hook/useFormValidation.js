import { useState } from "react";

const useFormValidation = (initialValues) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};

    // Name validation
    if (!values.name.trim()) {
      newErrors.name = "Name is required";
    } else if (values.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters";
    }

    // Email validation
    if (!values.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i.test(values.email)) {
      newErrors.email = "Invalid email address";
    }

    // Project Type
    if (!values.projectType || values.projectType === "Select a service") {
      newErrors.projectType = "Please select a project type";
    }

    // Budget
    if (!values.budget || values.budget === "Select budget") {
      newErrors.budget = "Please select a budget range";
    }

    // Timeline
    if (!values.timeline || values.timeline === "Select timeline") {
      newErrors.timeline = "Please select a timeline";
    }

    // Message
    if (!values.message.trim()) {
      newErrors.message = "Message is required";
    } else if (values.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });

    // Remove error while typing
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  return { values, errors, handleChange, validate, setValues };
};

export default useFormValidation;
