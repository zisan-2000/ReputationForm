import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  name: "",
  company: "",
  website: "",
  email: "",
  phone: "",
  status: "",
  type: "",
  agent: "",
  plan: "",
  billingDetails: {
    cardNumber: "",
    cardHolderName: "",
    street1: "",
    street2: "",
    city: "",
    state: "",
    zip: "",
  },
  leadProfileNotes: "",
  createNotes: "",
  finalProposal: null,
  preSaleEmailHistory: null,
  ccAuthorization: null,
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  lead: Yup.string().required("Lead is required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  company: Yup.string().required("Company is required"),
  website: Yup.string()
    .url("Website must be a valid URL")
    .required("Website is required"),
  email: Yup.string()
    .email("Email must be a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g,
      "Phone number is not valid",
    )
    .required("Phone is required"),
  type: Yup.string().required("Type is required"),
  agent: Yup.string().required("Agent is required"),
  plan: Yup.string().required("Plan is required"),
  status: Yup.string().required("Status is required"),
  billingDetails: Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Card number must be 16 digits")
      .required("Card number is required"),
    cardHolderName: Yup.string().required("Card holder name is required"),
    street1: Yup.string().required("Street address is required"),
    city: Yup.string().required("City is required"),
    state: Yup.string().required("State is required"),
    zip: Yup.string()
      .matches(/^[0-9]{5}$/, "Zip code must be 5 digits")
      .required("Zip code is required"),
  }),
  leadProfileNotes: Yup.string().min(
    10,
    "Notes must be at least 10 characters",
  ),
  createNotes: Yup.string().min(10, "Notes must be at least 10 characters"),
  finalProposal: Yup.mixed().required("Final proposal file is required"),
  preSaleEmailHistory: Yup.mixed().required(
    "Pre-sale email history file is required",
  ),
  ccAuthorization: Yup.mixed().required("CC authorization file is required"),
});

// Options for select fields
export const leadOptions = [
  { value: "lead1", label: "Lead 1" },
  { value: "lead2", label: "Lead 2" },
];

export const planOptions = [
  { value: "plan1", label: "Plan 1" },
  { value: "plan2", label: "Plan 2" },
];

export const agentOptions = [
  { value: "agent1", label: "Agent 1" },
  { value: "agent2", label: "Agent 2" },
];

export const typeOptions = [
  { value: "prospect", label: "Prospect" },
  { value: "client", label: "Client" },
];

export const statusOptions = [
  { value: "new", label: "New" },
  { value: "inProgress", label: "In Progress" },
  { value: "closed", label: "Closed" },
];
