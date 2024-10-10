import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  category: "",
  type: "",
  taskTitle: "",
  instructions: "",
  saveToLibrary: false,
  requireActivity: false,
  activity: "",
  frequency: "",
  dueIn: "",
  businessOrClient: "",
  singleUseFrequency: "",
  date: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  category: Yup.string().required("Category is required"),
  type: Yup.string().required("Type is required"),
  taskTitle: Yup.string()
    .min(2, "Task Title must be at least 2 characters")
    .required("Task Title is required"),
  instructions: Yup.string()
    .min(10, "Instructions must be at least 10 characters")
    .required("Instructions are required"),
  activity: Yup.string().required("Activity is required"),
  frequency: Yup.string().required("Frequency is required"),
  dueIn: Yup.number()
    .typeError("Due in must be a number")
    .required("Due in is required"),
  businessOrClient: Yup.string().required(
    "Business or Client selection is required",
  ),
  singleUseFrequency: Yup.string().required("Single Use Frequency is required"),
  date: Yup.date().typeError("Invalid date").required("Date is required"),
});

// Options for the select fields
export const categoryOptions = [
  { value: "category1", label: "Category 1" },
  { value: "category2", label: "Category 2" },
];

export const typeOptions = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
];

export const activityOptions = [
  { value: "activity1", label: "Activity 1" },
  { value: "activity2", label: "Activity 2" },
];

export const frequencyOptions = [
  { value: "daily", label: "Daily" },
  { value: "weekly", label: "Weekly" },
];

export const businessOrClientOptions = [
  { value: "business1", label: "Business 1" },
  { value: "client1", label: "Client 1" },
];

export const singleUseFrequencyOptions = [
  { value: "monthly", label: "Monthly" },
  { value: "quarterly", label: "Quarterly" },
];
