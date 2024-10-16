import { Button } from "@/components/ui/button";
import {
  agentOptions,
  initialFormData,
  leadOptions,
  planOptions,
  statusOptions,
  typeOptions,
  validationSchema,
} from "@/Data/CreateIntakeData";
import { ErrorMessage, Field, Form, Formik } from "formik";
import RichTextEditor from "../components/ReuseableComp/RichTextEditor";

const CreateNewIntake = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm(); // Reset form after submission
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Create New Intake</h2>
      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
        validateOnChange={true}
        validateOnBlur={true}
      >
        {({ setFieldValue }) => (
          <Form>
            {/* Lead */}
            <div className="mb-4">
              <label htmlFor="lead" className="block text-gray-700">
                Lead
              </label>
              <Field
                as="select"
                name="lead"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Lead</option>
                {leadOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="lead"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Name and Company */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block text-gray-700">
                  Name
                </label>
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
              <div>
                <label htmlFor="company" className="block text-gray-700">
                  Company
                </label>
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
            </div>

            {/* Website and Phone */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="website" className="block text-gray-700">
                  Website
                </label>
                <Field
                  name="website"
                  placeholder="https://domain.com"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <ErrorMessage
                  name="website"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-gray-700">
                  Phone
                </label>
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
            </div>

            {/* Email and Type */}
            <div className="mt-4 grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-gray-700">
                  Email
                </label>
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
              <div>
                <label htmlFor="type" className="block text-gray-700">
                  Type
                </label>
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

            {/* Agent, Plan, Status */}
            <div className="mt-4">
              <label htmlFor="agent" className="block text-gray-700">
                Agent
              </label>
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

            <div className="mt-4">
              <label htmlFor="plan" className="block text-gray-700">
                Plan
              </label>
              <Field
                as="select"
                name="plan"
                className="w-full rounded border border-gray-300 px-4 py-2"
              >
                <option value="">Select Plan</option>
                {planOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </Field>
              <ErrorMessage
                name="plan"
                component="div"
                className="text-red-500"
              />
            </div>

            <div className="mt-4">
              <label htmlFor="status" className="block text-gray-700">
                Status
              </label>
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

            {/* Billing Details */}
            <h3 className="mb-2 mt-6 text-lg">Billing Details</h3>
            <div className="grid grid-cols-2 gap-4">
              {/* Billing fields */}
              <div>
                <label
                  htmlFor="billingDetails.cardNumber"
                  className="block text-gray-700"
                >
                  Card Number
                </label>
                <Field
                  name="billingDetails.cardNumber"
                  placeholder="1234 5678 9012 3456"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <ErrorMessage
                  name="billingDetails.cardNumber"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="billingDetails.cardHolderName"
                  className="block text-gray-700"
                >
                  Card Holder Name
                </label>
                <Field
                  name="billingDetails.cardHolderName"
                  placeholder="John Doe"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <ErrorMessage
                  name="billingDetails.cardHolderName"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="billingDetails.street1"
                  className="block text-gray-700"
                >
                  Street Address
                </label>
                <Field
                  name="billingDetails.street1"
                  placeholder="Street Address 1"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <ErrorMessage
                  name="billingDetails.street1"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div>
                <label
                  htmlFor="billingDetails.city"
                  className="block text-gray-700"
                >
                  City
                </label>
                <Field
                  name="billingDetails.city"
                  placeholder="City"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <ErrorMessage
                  name="billingDetails.city"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            {/* RichTextEditor Fields */}
            <h3 className="mb-2 mt-6 text-lg">Lead Profile Notes</h3>
            <Field name="leadProfileNotes">
              {({ field, form }) => (
                <RichTextEditor
                  value={field.value}
                  onChange={(value) => form.setFieldValue(field.name, value)}
                  placeholder="Lead profile notes"
                />
              )}
            </Field>
            <ErrorMessage
              name="leadProfileNotes"
              component="div"
              className="text-red-500"
            />

            <h3 className="mb-2 mt-6 text-lg">Special Notes</h3>
            <Field name="createNotes">
              {({ field, form }) => (
                <RichTextEditor
                  value={field.value}
                  onChange={(value) => form.setFieldValue(field.name, value)}
                  placeholder="Special Notes: Campaign Critical Insights, Timelines, Other"
                />
              )}
            </Field>
            <ErrorMessage
              name="createNotes"
              component="div"
              className="text-red-500"
            />

            {/* File Uploads */}
            <h3 className="mb-2 mt-6 text-lg">File Uploads</h3>
            <div className="mb-4 space-y-4">
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <label className="mb-2 text-gray-600 sm:mb-0">
                  Final Proposal
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setFieldValue("finalProposal", e.currentTarget.files[0])
                  }
                  name="finalProposal"
                  className="rounded border border-gray-300 px-2 py-1"
                />
                <ErrorMessage
                  name="finalProposal"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <label className="mb-2 text-gray-600 sm:mb-0">
                  Pre-Sale Email History
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setFieldValue(
                      "preSaleEmailHistory",
                      e.currentTarget.files[0],
                    )
                  }
                  name="preSaleEmailHistory"
                  className="rounded border border-gray-300 px-2 py-1"
                />
                <ErrorMessage
                  name="preSaleEmailHistory"
                  component="div"
                  className="text-red-500"
                />
              </div>
              <div className="flex flex-col items-start justify-between sm:flex-row sm:items-center">
                <label className="mb-2 text-gray-600 sm:mb-0">
                  CC Authorization
                </label>
                <input
                  type="file"
                  onChange={(e) =>
                    setFieldValue("ccAuthorization", e.currentTarget.files[0])
                  }
                  name="ccAuthorization"
                  className="rounded border border-gray-300 px-2 py-1"
                />
                <ErrorMessage
                  name="ccAuthorization"
                  component="div"
                  className="text-red-500"
                />
              </div>
            </div>

            <Button variant="ghost" size="default" type="submit">
              Submit to Billing
            </Button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateNewIntake;
