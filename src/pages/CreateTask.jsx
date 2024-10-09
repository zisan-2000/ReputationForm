import { Button } from "@/components/ui/button";
import { useState } from "react";
import AvatarList from "../components/ReuseableComp/AvatarList";
import CheckboxField from "../components/ReuseableComp/CheckboxField";
import DateField from "../components/ReuseableComp/DateField";
import InputField from "../components/ReuseableComp/InputField";
import SelectField from "../components/ReuseableComp/SelectField";
import Textarea from "../components/ReuseableComp/Textarea";
import {
  activityOptions,
  businessOrClientOptions,
  categoryOptions,
  frequencyOptions,
  initialFormData,
  singleUseFrequencyOptions,
  typeOptions,
} from "../Data/CreateTaskData";

const CreateTask = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log("Form Data:", formData);
  };

  const handleAddOwner = () => {
    // Handle the logic for adding a new owner (e.g., open a modal or prompt)
    console.log("Add owner functionality not implemented yet");
  };

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create New Task</h2>
      <form>
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Select Category"
            options={categoryOptions}
            value={formData.category}
            onChange={handleChange}
            name="category"
          />
          <SelectField
            label="Select Type"
            options={typeOptions}
            value={formData.type}
            onChange={handleChange}
            name="type"
          />
        </div>
        <InputField
          label="Task Title"
          placeholder="Task Title"
          value={formData.taskTitle}
          onChange={handleChange}
          name="taskTitle"
        />
        <Textarea
          label="Instructions"
          placeholder="Instructions"
          value={formData.instructions}
          onChange={handleChange}
          name="instructions"
        />

        <h3 className="mb-2 mt-6 text-lg">Template Settings</h3>
        <div className="flex gap-4">
          <CheckboxField
            label="Save to Library"
            checked={formData.saveToLibrary}
            onChange={handleChange}
            name="saveToLibrary"
          />
          <CheckboxField
            label="Require Activity"
            checked={formData.requireActivity}
            onChange={handleChange}
            name="requireActivity"
          />
        </div>

        <SelectField
          label="Select Activity"
          options={activityOptions}
          value={formData.activity}
          onChange={handleChange}
          name="activity"
        />
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Select Frequency"
            options={frequencyOptions}
            value={formData.frequency}
            onChange={handleChange}
            name="frequency"
          />
          <InputField
            label="Due in (number of days)"
            placeholder="Enter number of days"
            value={formData.dueIn}
            onChange={handleChange}
            name="dueIn"
            type="number"
          />
        </div>

        <h3 className="mb-2 mt-6 text-lg">Single Use Settings</h3>
        {/* Add avatars for owners here (can be expanded later) */}
        <AvatarList owners={formData.owners} onAdd={handleAddOwner} />

        <SelectField
          label="Business or Client"
          options={businessOrClientOptions}
          value={formData.businessOrClient}
          onChange={handleChange}
          name="businessOrClient"
        />
        <div className="grid grid-cols-2 gap-4">
          <SelectField
            label="Select Frequency"
            options={singleUseFrequencyOptions}
            value={formData.singleUseFrequency}
            onChange={handleChange}
            name="singleUseFrequency"
          />
          <DateField
            label="Select Date"
            value={formData.date}
            onChange={handleChange}
            name="date"
          />
        </div>
        {/* Replace with shadcn button */}
        <Button variant="ghost" size="default" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateTask;
