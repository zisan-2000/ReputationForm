import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  type: "",
  name: "",
  defaultPrice: "",
  priceType: "",
  description: "",
};

// Options for the select fields
export const typeOptions = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
];

export const priceTypeOptions = [
  { value: "fixed", label: "Fixed" },
  { value: "variable", label: "Variable" },
];

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  type: Yup.string().required("Type is required"),
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .required("Name is required"),
  defaultPrice: Yup.number()
    .typeError("Default Price must be a number")
    .required("Default Price is required"),
  priceType: Yup.string().required("Price Type is required"),
  description: Yup.string()
    .min(10, "Description must be at least 10 characters")
    .required("Description is required"),
});
