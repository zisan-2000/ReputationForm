import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  activityOptions,
  businessOrClientOptions,
  categoryOptions,
  frequencyOptions,
  initialFormData,
  singleUseFrequencyOptions,
  typeOptions,
  validationSchema,
} from "../Data/CreateTaskData";

const CreateTask = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create New Task</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">
                Select Category
              </label>
              <Field
                as="select"
                name="category"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Category</option>
                {categoryOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="category"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Select Type</label>
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
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Task Title</label>
            <Field
              name="taskTitle"
              placeholder="Task Title"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <ErrorMessage
              name="taskTitle"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Instructions</label>
            <Field
              name="instructions"
              as="textarea"
              placeholder="Instructions"
              className="w-full rounded border border-gray-300 px-4 py-2"
              rows="4"
            />
            <ErrorMessage
              name="instructions"
              component="div"
              className="text-red-500"
            />
          </div>

          <h3 className="mb-2 mt-6 text-lg">Template Settings</h3>
          <div className="mb-4 flex gap-4">
            <label>
              <Field type="checkbox" name="saveToLibrary" />
              Save to Library
            </label>
            <label>
              <Field type="checkbox" name="requireActivity" />
              Require Activity
            </label>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Select Activity</label>
            <Field
              as="select"
              name="activity"
              className="w-full rounded border border-gray-300 px-4 py-2"
            >
              <option value="">Select Activity</option>
              {activityOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="activity"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">
                Select Frequency
              </label>
              <Field
                as="select"
                name="frequency"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Frequency</option>
                {frequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="frequency"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-700">
                Due in (number of days)
              </label>
              <Field
                name="dueIn"
                type="number"
                placeholder="Enter number of days"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="dueIn"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <h3 className="mb-2 mt-6 text-lg">Single Use Settings</h3>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">
              Business or Client
            </label>
            <Field
              as="select"
              name="businessOrClient"
              className="w-full rounded border border-gray-300 px-4 py-2"
            >
              <option value="">Select Business or Client</option>
              {businessOrClientOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="businessOrClient"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="mb-4 grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">
                Select Frequency
              </label>
              <Field
                as="select"
                name="singleUseFrequency"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Frequency</option>
                {singleUseFrequencyOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="singleUseFrequency"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-700">Select Date</label>
              <Field
                name="date"
                type="date"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="date"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <Button variant="ghost" size="default" type="submit">
            Create
          </Button>
        </Form>
      </Formik>
    </div>
  );
};

export default CreateTask;
