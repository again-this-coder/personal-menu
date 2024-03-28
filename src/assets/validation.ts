import * as yup from "yup";

export const shoppingItemValidationSchema = yup.object().shape({
  quantity: yup
    .number()
    .typeError("Quantity must be a number")
    .required("Quantity is required")
    .positive("Quantity must be positive")
    .integer("Quantity must be an integer"),
  product: yup
    .string()
    .required("Product name is required")
    .min(1, "Product name must have at least 1 symbol"),
});
