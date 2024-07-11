import { useQuery } from "@tanstack/react-query";

import { getPosts } from "@/api/https";

export const useGetPosts = (params?: { page: number; pageSize: number }) => {
  const page = params?.page;
  const pageSize = params?.pageSize;

  return useQuery({
    queryKey: ["posts", page, pageSize],
    queryFn: () => getPosts({ page, pageSize }),
  });
};
