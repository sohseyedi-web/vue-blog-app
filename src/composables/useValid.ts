import type { ZodTypeAny } from "zod";
import { PERSIAN_ERROR, TEXT_ERROR } from "@/constant/schemaObject";
import { ref, type Ref, watch } from "vue";
import { z } from "zod";

function useValid<T extends ZodTypeAny>(initialValues: unknown, schema: T) {
  type ZodForm = z.infer<T>;

  const values = ref<ZodForm>(initialValues);
  const errors = ref<Record<string, string>>({});

  watch(
    values,
    (newValues: ZodForm) => {
      for (const fieldName of Object.keys(newValues)) {
        const field = fieldName;
        validateField(field);
      }
    },
    { deep: true }
  );

  function validateForm() {
    const res = schema.safeParse(values.value) as z.infer<T>;
    if (res.success) {
      errors.value = {};
      return true;
    } else {
      const formErrors: Record<string, string> = {};
      for (const [key, val] of Object.entries(
        res.error.formErrors.fieldErrors
      )) {
        formErrors[key] = Array.isArray(val) ? val[0] : val || "";
      }
      errors.value = formErrors;

      return false;
    }
  }

  function validateField(field: keyof ZodForm) {
    try {
      const res = schema.safeParse(values.value) as z.infer<T>;
      const error = res.success ? "" : res.error.formErrors.fieldErrors[field];
      errors.value[field as string] = Array.isArray(error)
        ? error[0]
        : error || "";
    } catch {}
  }

  return {
    values: values as Ref<ZodForm>,
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
