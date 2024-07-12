import { AxiosResponse } from "axios";

import { axios } from "@/api/axiosInstance";
import { Post, Response } from "@/lib/interfaces";

export const getPosts = async (params: {
  page: number | undefined;
  pageSize: number | undefined;
}): Promise<AxiosResponse<Response<Post[]>>> => {
  return await axios.get("/api/posts?populate=cover", {
    params: {
      "pagination[page]": params.page,
      "pagination[pageSize]": params.pageSize,
    },
  });
};
