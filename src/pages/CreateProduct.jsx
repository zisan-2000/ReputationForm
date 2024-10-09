import { Button } from "@/components/ui/button";
import { useState } from "react";
import InputField from "../components/ReuseableComp/InputField";
import SelectField from "../components/ReuseableComp/SelectField";
import Textarea from "../components/ReuseableComp/Textarea";
import {
  initialFormData,
  priceTypeOptions,
  typeOptions,
} from "../Data/CreateProductData";

const CreateProduct = () => {
  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    console.log("Form Data:", formData);
  };

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create Product</h2>
      <form>
        <SelectField
          label="Type"
          options={typeOptions}
          value={formData.type}
          onChange={handleChange}
          name="type"
        />
        <InputField
          label="Name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          name="name"
        />
        <InputField
          label="Default Price"
          placeholder="Default Price"
          value={formData.defaultPrice}
          onChange={handleChange}
          name="defaultPrice"
          type="number"
        />
        <SelectField
          label="Price Type"
          options={priceTypeOptions}
          value={formData.priceType}
          onChange={handleChange}
          name="priceType"
        />
        <Textarea
          label="Description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
          name="description"
        />
        {/* Replace with shadcn button */}
        <Button variant="ghost" size="default" onClick={handleSubmit}>
          Create
        </Button>
      </form>
    </div>
  );
};

export default CreateProduct;
