import axios from "axios";
import { ref } from "vue";

export const createRequest = (config) => {
  const loading = ref(false);
  const data = ref(null);
  const error = ref(null);

  loading.value = true;

  axios({
    method: config?.method || "GET",
    baseURL: config?.baseUrl,
    url: config?.url,
    data: config?.data,
    params: config?.params,
    headers: {
      "Content-Type": config?.contentType || "application/json",
    },
  })
    .then((response) => {
      data.value = response.data;
    })
    .catch((err) => {
      error.value = err; 
      console.log(err);
    })
    .finally(() => {
      loading.value = false;
    });

  return { loading, data, error };
};
