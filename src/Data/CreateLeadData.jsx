import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  firstName: "",
  lastName: "",
  company: "",
  website: "",
  email: "",
  phone: "",
  status: "",
  type: "",
  agent: "",
  notes: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name must be at least 2 characters")
    .required("First Name is required"),
  lastName: Yup.string()
    .min(2, "Last Name must be at least 2 characters")
    .required("Last Name is required"),
  company: Yup.string().required("Company is required"),
  website: Yup.string()
    .url("Invalid URL format")
    .required("Website is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phone: Yup.string().required("Phone is required"),
  status: Yup.string().required("Status is required"),
  type: Yup.string().required("Type is required"),
  agent: Yup.string().required("Agent is required"),
  notes: Yup.string()
    .min(10, "Notes must be at least 10 characters")
    .required("Notes are required"),
});

// Options for select fields
export const statusOptions = [
  { value: "new", label: "New" },
  { value: "inProgress", label: "In Progress" },
  { value: "closed", label: "Closed" },
];

export const typeOptions = [
  { value: "prospect", label: "Prospect" },
  { value: "client", label: "Client" },
];

export const agentOptions = [
  { value: "agent1", label: "Agent 1" },
  { value: "agent2", label: "Agent 2" },
];
