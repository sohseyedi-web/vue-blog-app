import { ref, watch } from "vue";
import { z } from "zod";
import { PERSIAN_ERROR, TEXT_ERROR } from "../constant/schemaObject";

function useValid(initialValues, schema) {
  const values = ref(initialValues);
  const errors = ref({});

  watch(
    values,
    (newValues) => {
      for (const fieldName of Object.keys(newValues)) {
        const field = fieldName;
        validateField(field);
      }
    },
    { deep: true }
  );

  function validateForm() {
    const res = schema.safeParse(values.value);
    if (res.success) {
      errors.value = {};
      return true;
    } else {
      const formErrors = {};
      for (const [key, val] of Object.entries(
        res.error.formErrors.fieldErrors
      )) {
        formErrors[key] = Array.isArray(val) ? val[0] : val || "";
      }
      errors.value = formErrors;

      return false;
    }
  }

  function validateField(field) {
    try {
      const res = schema.safeParse(values.value);
      const error = res.success ? "" : res.error.formErrors.fieldErrors[field];
      errors.value[field] = Array.isArray(error) ? error[0] : error || "";
    } catch {}
  }

  return {
    values,
    errors,
    validateField,
    validateForm,
  };
}

export default useValid;

export const formSchema = z.object({
  title: z.string().min(1, TEXT_ERROR("عنوان")),
  author: z
    .string()
    .min(1, TEXT_ERROR("نام نویسنده"))
    .regex(/^[\u0600-\u06FF\s]+$/, { message: PERSIAN_ERROR }),
  subject: z.string().min(1, TEXT_ERROR("موضوع")),
  message: z.string().min(1, TEXT_ERROR("متن بلاگ")),
  tags: z.array(z.string()).min(1, TEXT_ERROR("هشتگ بلاگ")),
});
