import { reactive } from "vue";

export const formData = reactive({
  title: "",
  author: "",
  subject: "",
  message: "",
  tags: [""],
});
