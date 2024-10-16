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

export const validationSchema = Yup.object().shape({
  lead: Yup.string()
    .trim() // Removes unnecessary white spaces
    .required("Lead is required"),

  name: Yup.string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name cannot be longer than 50 characters")
    .matches(/^[a-zA-Z\s]+$/, "Name can only contain letters and spaces")
    .required("Name is required"),

  company: Yup.string()
    .trim()
    .min(2, "Company name must be at least 2 characters")
    .required("Company is required"),

  website: Yup.string()
    .trim()
    .url("Website must be a valid URL (e.g., https://example.com)")
    .required("Website is required"),

  email: Yup.string()
    .trim()
    .email("Email must be a valid email address (e.g., user@example.com)")
    .required("Email is required"),

  phone: Yup.string()
    .trim()
    .matches(
      /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s/0-9]*$/g,
      "Phone number must be a valid format (e.g., +123456789)",
    )
    .min(10, "Phone number must be at least 10 digits")
    .required("Phone is required"),

  type: Yup.string()
    .trim()
    .oneOf(
      ["customer", "supplier", "partner"],
      "Type must be one of: customer, supplier, partner",
    )
    .required("Type is required"),

  agent: Yup.string().trim().required("Agent is required"),

  plan: Yup.string()
    .trim()
    .oneOf(
      ["basic", "premium", "enterprise"],
      "Plan must be one of: basic, premium, enterprise",
    )
    .required("Plan is required"),

  status: Yup.string()
    .trim()
    .oneOf(
      ["active", "inactive", "pending"],
      "Status must be one of: active, inactive, pending",
    )
    .required("Status is required"),

  billingDetails: Yup.object().shape({
    cardNumber: Yup.string()
      .matches(/^[0-9]{16}$/, "Card number must be exactly 16 digits")
      .required("Card number is required"),

    cardHolderName: Yup.string()
      .trim()
      .matches(
        /^[a-zA-Z\s]+$/,
        "Card holder name can only contain letters and spaces",
      )
      .required("Card holder name is required"),

    street1: Yup.string().trim().required("Street address is required"),

    city: Yup.string().trim().required("City is required"),

    state: Yup.string()
      .trim()
      .matches(/^[A-Z]{2}$/, "State must be the two-letter state abbreviation")
      .required("State is required"),

    zip: Yup.string()
      .matches(/^[0-9]{5}$/, "Zip code must be exactly 5 digits")
      .required("Zip code is required"),
  }),

  leadProfileNotes: Yup.string()
    .trim()
    .min(10, "Notes must be at least 10 characters long")
    .max(500, "Notes cannot be longer than 500 characters"),

  createNotes: Yup.string()
    .trim()
    .min(10, "Notes must be at least 10 characters long")
    .max(500, "Notes cannot be longer than 500 characters"),

  finalProposal: Yup.mixed()
    .required("Final proposal file is required")
    .test(
      "fileSize",
      "File size is too large. Maximum size is 5MB",
      (value) => value && value.size <= 5242880,
    )
    .test(
      "fileFormat",
      "File format must be PDF or DOCX",
      (value) =>
        value &&
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type),
    ),

  preSaleEmailHistory: Yup.mixed()
    .required("Pre-sale email history file is required")
    .test(
      "fileSize",
      "File size is too large. Maximum size is 5MB",
      (value) => value && value.size <= 5242880,
    )
    .test(
      "fileFormat",
      "File format must be PDF or DOCX",
      (value) =>
        value &&
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type),
    ),

  ccAuthorization: Yup.mixed()
    .required("CC authorization file is required")
    .test(
      "fileSize",
      "File size is too large. Maximum size is 5MB",
      (value) => value && value.size <= 5242880,
    )
    .test(
      "fileFormat",
      "File format must be PDF or DOCX",
      (value) =>
        value &&
        [
          "application/pdf",
          "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
        ].includes(value.type),
    ),
});
