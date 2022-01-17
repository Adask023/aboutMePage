import * as Yup from "yup";
const validate = Yup.object({
  name: Yup.string()
    .min(2, "Field must contains at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  message: Yup.string()
    .min(4, "Field must contains at least 4 characters")
    .required("Required"),
});

export default validate;
