// CreateProductData.jsx
export const initialFormData = {
  type: "",
  name: "",
  defaultPrice: "",
  priceType: "",
  description: "",
};

export const typeOptions = [
  { value: "type1", label: "Type 1" },
  { value: "type2", label: "Type 2" },
];

export const priceTypeOptions = [
  { value: "fixed", label: "Fixed" },
  { value: "variable", label: "Variable" },
];
