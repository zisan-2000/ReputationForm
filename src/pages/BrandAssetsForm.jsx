// BrandAssetsForm.jsx
import { Button } from "@/components/ui/button";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { initialFormData, validationSchema } from "../Data/BrandAssetsData"; // Import from the new data file

const BrandAssetsForm = () => {
  const handleSubmit = (values, { resetForm }) => {
    console.log("Form Data:", values);
    resetForm();
  };

  return (
    <div className="mx-auto mt-8 max-w-4xl rounded bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-xl font-bold">Brand Assets</h2>
      <p className="mb-6 text-sm text-gray-600">
        Use this area to provide our team content assets for your marketing. You
        can provide a logo, images, videos, text, and links to content. Feel
        free to upload files directly. More material helps us perform better
        work, and deliver better results.
      </p>

      <Formik
        initialValues={initialFormData}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ setFieldValue }) => (
          <Form>
            {/* Media Library Upload */}
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700">
                Media Library
              </label>
              <div className="rounded border-2 border-dashed border-gray-300 p-6 text-center">
                <input
                  name="mediaLibrary"
                  type="file"
                  onChange={(event) => {
                    setFieldValue("mediaLibrary", event.currentTarget.files[0]);
                  }}
                  className="absolute left-0 top-0 w-full cursor-pointer opacity-0"
                  style={{ height: "100px" }}
                />
                <span className="text-gray-500">+</span>
              </div>
              <ErrorMessage
                name="mediaLibrary"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Resource Links */}
            <div className="mb-4">
              <label className="mb-2 block font-semibold text-gray-700">
                Resource Links
              </label>
              <div className="">
                <Field
                  name="resourceLinks"
                  placeholder="URL Input Field"
                  className="w-full rounded border border-gray-300 px-4 py-2"
                />
                <Button
                  type="button"
                  className=" mt-4 w-full rounded bg-gray-200 px-4 py-2"
                >
                  + Add Link
                </Button>
              </div>
              <ErrorMessage
                name="resourceLinks"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Additional Information */}
            <div className="mb-6">
              <label className="mb-2 block font-semibold text-gray-700">
                Additional Information
              </label>
              <Field
                name="additionalInfo"
                as="textarea"
                placeholder="Please provide any additional details or information we should know or have access to."
                className="w-full rounded border border-gray-300 px-4 py-2"
                rows="4"
              />
              <ErrorMessage
                name="additionalInfo"
                component="div"
                className="text-red-500"
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between">
              <Button type="button" className="text-gray-500 underline">
                Skip & Finish Later
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

export default BrandAssetsForm;
