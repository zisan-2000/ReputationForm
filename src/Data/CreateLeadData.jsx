// data.jsx
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
