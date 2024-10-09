// CreateTaskData.jsx
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
  owners: [],
  businessOrClient: "",
  singleUseFrequency: "",
  date: "",
};

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
