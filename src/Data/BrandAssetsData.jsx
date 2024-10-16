// BrandAssetsData.jsx
import * as Yup from "yup";

// Initial form data
export const initialFormData = {
  mediaLibrary: null,
  resourceLinks: "",
  additionalInfo: "",
};

// Validation schema using Yup
export const validationSchema = Yup.object().shape({
  mediaLibrary: Yup.mixed().required("A file is required"),
  resourceLinks: Yup.string()
    .url("Invalid URL format")
    .required("Resource Link is required"),
  additionalInfo: Yup.string()
    .min(10, "Additional Information must be at least 10 characters")
    .required("Additional Information is required"),
});
