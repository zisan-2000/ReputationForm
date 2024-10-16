import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import {
  agentOptions,
  initialFormData,
  statusOptions,
  typeOptions,
  validationSchema,
} from "../Data/CreateLeadData";

const CreateLead = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create New Lead</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">First Name</label>
              <Field
                name="firstName"
                placeholder="First Name or Full Name"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-700">Last Name</label>
              <Field
                name="lastName"
                placeholder="Last Name"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Company</label>
            <Field
              name="company"
              placeholder="Company"
              className="w-full rounded border border-gray-300 px-4 py-2"
            />
            <ErrorMessage
              name="company"
              component="div"
              className="text-red-500"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">Website</label>
              <Field
                name="website"
                placeholder="domain.com"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="website"
                component="div"
                className="text-red-500"
              />
            </div>
            <div>
              <label className="mb-2 block text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                placeholder="email@domain.com"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="mb-2 block text-gray-700">Phone</label>
              <Field
                name="phone"
                placeholder="+1 (012) 345-6789"
                className="w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-red-500"
              />
            </div>

            <div>
              <label className="mb-2 block text-gray-700">Status</label>
              <Field
                as="select"
                name="status"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Status</option>
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="status"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
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

            <div>
              <label className="mb-2 block text-gray-700">Agent</label>
              <Field
                as="select"
                name="agent"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Agent</option>
                {agentOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="agent"
                component="div"
                className="text-red-500"
              />
            </div>
          </div>

          <div className="mb-4">
            <label className="mb-2 block text-gray-700">Notes</label>
            <Field
              name="notes"
              as="textarea"
              placeholder="Lead profile notes"
              className="w-full rounded border border-gray-300 px-4 py-2"
              rows="4"
            />
            <ErrorMessage
              name="notes"
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

export default CreateLead;
