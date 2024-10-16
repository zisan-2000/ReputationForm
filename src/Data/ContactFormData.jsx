// ContactFormData.jsx
import { useState } from "react";
import * as Yup from "yup";

// Initial form data
export const useContactForm = () => {
  const [contacts, setContacts] = useState([
    { name: "", email: "", phone: "" },
  ]);

  const handleAddContact = () => {
    setContacts([...contacts, { name: "", email: "", phone: "" }]);
  };

  const initialFormData = {
    primaryName: "",
    primaryEmail: "",
    primaryPhone: "",
    additionalContacts: contacts,
    sendAccess: false,
  };

  return { initialFormData, contacts, setContacts, handleAddContact };
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  primaryName: Yup.string()
    .required("Primary Name is required")
    .min(2, "Name is too short"),
  primaryEmail: Yup.string()
    .email("Invalid email format")
    .required("Primary Email is required"),
  primaryPhone: Yup.string()
    .required("Primary Phone is required")
    .matches(
      /^\(\d{3}\) \d{3}-\d{4}$/,
      "Phone number is not valid. Format should be (XXX) XXX-XXXX",
    ),
  additionalContacts: Yup.array().of(
    Yup.object().shape({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email format")
        .required("Email is required"),
      phone: Yup.string()
        .required("Phone is required")
        .matches(
          /^\(\d{3}\) \d{3}-\d{4}$/,
          "Phone number is not valid. Format should be (XXX) XXX-XXXX",
        ),
    }),
  ),
  sendAccess: Yup.boolean(),
});
