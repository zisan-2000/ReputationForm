// CreateContactForm.jsx
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useContactForm, validationSchema } from "../Data/ContactFormData";

const CreateContactForm = () => {
  const { initialFormData, handleAddContact } = useContactForm();

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data", values);
    resetForm();
    // Process form data, e.g., sending it to an API
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-4 shadow-lg">
      <h2 className="mb-6 text-2xl">Account Contacts</h2>

      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ values }) => (
          <Form>
            <div className="mb-4">
              <h3 className="mb-4 text-xl font-semibold">Primary User</h3>

              <label className="block text-gray-700">Name</label>
              <Field
                name="primaryName"
                placeholder="John Smith"
                className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
              />
              <ErrorMessage
                name="primaryName"
                component="div"
                className="text-red-500"
              />

              <div className="flex gap-4">
                <div className="w-1/2">
                  <label className="block text-gray-700">Email</label>
                  <Field
                    name="primaryEmail"
                    type="email"
                    placeholder="johnsmith@abccompany.com"
                    className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
                  />
                  <ErrorMessage
                    name="primaryEmail"
                    component="div"
                    className="text-red-500"
                  />
                </div>

                <div className="w-1/2">
                  <label className="block text-gray-700">Phone</label>
                  <Field
                    name="primaryPhone"
                    placeholder="(562) 555-8080"
                    className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
                  />
                  <ErrorMessage
                    name="primaryPhone"
                    component="div"
                    className="text-red-500"
                  />
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h3 className="mb-4 text-xl font-semibold">
                Additional Contacts
              </h3>
              {values.additionalContacts.map((_, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-gray-700">Name</label>
                  <Field
                    name={`additionalContacts[${index}].name`}
                    placeholder="Name"
                    className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
                  />
                  <ErrorMessage
                    name={`additionalContacts[${index}].name`}
                    component="div"
                    className="text-red-500"
                  />

                  <div className="flex gap-4">
                    <div className="w-1/2">
                      <label className="block text-gray-700">Email</label>
                      <Field
                        name={`additionalContacts[${index}].email`}
                        placeholder="Email"
                        className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
                      />
                      <ErrorMessage
                        name={`additionalContacts[${index}].email`}
                        component="div"
                        className="text-red-500"
                      />
                    </div>

                    <div className="w-1/2">
                      <label className="block text-gray-700">Phone</label>
                      <Field
                        name={`additionalContacts[${index}].phone`}
                        placeholder="Phone"
                        className="mb-2 w-full rounded border border-gray-300 px-4 py-2"
                      />
                      <ErrorMessage
                        name={`additionalContacts[${index}].phone`}
                        component="div"
                        className="text-red-500"
                      />
                    </div>
                  </div>
                </div>
              ))}

              <div className="mb-4 flex items-center justify-end">
                <Field type="checkbox" name="sendAccess" className="mr-2" />
                <label htmlFor="sendAccess" className="text-gray-700">
                  Send Access
                </label>
              </div>
            </div>

            <div className="flex justify-end">
              <Button
                variant="ghost"
                size="default"
                type="button"
                onClick={handleAddContact}
                className="mb-4 w-full border border-gray-300 bg-gray-200  text-gray-700 hover:bg-transparent hover:text-black"
              >
                + Add Contact
              </Button>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button type="button" className="text-gray-500 underline">
                Save & Finish Later
              </Button>
              <Button
                variant="solid"
                size="default"
                type="submit"
                className="bg-green-500 text-white"
              >
                Next
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default CreateContactForm;
