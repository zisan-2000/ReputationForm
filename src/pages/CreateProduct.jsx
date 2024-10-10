import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  initialFormData,
  priceTypeOptions,
  typeOptions,
  validationSchema,
} from "../Data/CreateProductData";

const CreateProduct = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 max-w-3xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create Product</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Type</label>
            <Field
              as="select"
              name="type"
              className="w-full rounded border border-gray-300 px-4 py-2"
            >
              <option value="">Select Type</option>
              {typeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="type"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <Field
              name="name"
              placeholder="Name"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <ErrorMessage
              name="name"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <Field
              name="defaultPrice"
              type="number"
              placeholder="Default Price"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <ErrorMessage
              name="defaultPrice"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Price Type</label>
            <Field
              as="select"
              name="priceType"
              className="w-full rounded border border-gray-300 px-4 py-2"
            >
              <option value="">Select Price Type</option>
              {priceTypeOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="priceType"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <Field
              name="description"
              as="textarea"
              placeholder="Description"
              className="w-full rounded border border-gray-300 px-4 py-2"
              rows="4"
            />
            <ErrorMessage
              name="description"
              component="div"
              className="text-red-500"
            />
          </div>

          <Button variant="ghost" size="default" type="submit">
            Create
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateProduct;
