import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputField from "../components/ReuseableComp/InputField";
import RichTextEditor from "../components/ReuseableComp/RichTextEditor";
import SelectField from "../components/ReuseableComp/SelectField";
import {
  agentOptions,
  initialFormData,
  statusOptions,
  typeOptions,
} from "../Data/CreateLeadData";

const CreateLead = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  const handleRichTextChange = (value) => {
    setFormData({ ...formData, notes: value });
  };

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create New Lead</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Name"
            placeholder="First Name or Full Name"
            value={formData.firstName}
            onChange={handleChange}
            name="firstName"
          />
          <InputField
            label="Last Name"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            name="lastName"
          />
        </div>
        <InputField
          label="Company"
          placeholder="Company"
          value={formData.company}
          onChange={handleChange}
          name="company"
        />
        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Website"
            placeholder="domain.com"
            value={formData.website}
            onChange={handleChange}
            name="website"
          />
          <InputField
            label="Email"
            type="email"
            placeholder="email@domain.com"
            value={formData.email}
            onChange={handleChange}
            name="email"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <InputField
            label="Phone"
            placeholder="+1 (012) 345-6789"
            value={formData.phone}
            onChange={handleChange}
            name="phone"
          />

          <SelectField
            label="Status"
            options={statusOptions}
            value={formData.status}
            onChange={handleChange}
            name="status"
          />
        </div>

        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Type"
            options={typeOptions}
            value={formData.type}
            onChange={handleChange}
            name="type"
          />

          <SelectField
            label="Agent"
            options={agentOptions}
            value={formData.agent}
            onChange={handleChange}
            name="agent"
          />
        </div>

        <RichTextEditor
          placeholder="Lead profile notes"
          value={formData.notes}
          onChange={handleRichTextChange}
        />
        {/* Replace with shadcn button */}
        <Button variant="ghost" size="default" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateLead;
