import { axios } from "@/api/axiosInstance";

export const getPosts = async (params: {
  page: number | undefined;
  pageSize: number | undefined;
}) => {
  return await axios.get("/api/posts", {
    params: {
      "pagination[page]": params.page,
      "pagination[pageSize]": params.pageSize,
    },
  });
};
