"use client";

import { useGetPosts } from "@/api/hooks";
import { PostCard } from "@/components";
import React from "react";

export default function Home() {
  const { data: posts, isLoading, error } = useGetPosts();

  if (isLoading) {
    return <div className="container my-12">Loading...</div>;
  }

  if (error) {
    return <div className="container my-12">An error occurred!</div>;
  }

  if (posts?.length === 0) {
    return <div className="container my-12">No content to show!</div>;
  }

  return (
    <div className="container my-8">
      <section className="flex flex-col xl:flex-row gap-x-8">
        <PostCard
          type="vertical"
          data={{
            cover: `${process.env.NEXT_PUBLIC_BASE_URL}${posts?.[0].attributes.cover.data.attributes.formats.large.url}`,
            title: posts?.[0].attributes.title!,
            summary: posts?.[0].attributes.summary!,
          }}
          className="xl:w-3/5"
          imgClassName="h-[300px] md:h-[400px] lg:h-[500px]"
        />

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-10 xl:mt-0 xl:w-2/5 xl:grid-cols-1">
          {posts?.slice(1, 5).map((post) => (
            <React.Fragment key={post.id}>
              <PostCard
                type="horizontal"
                data={{
                  cover: `${process.env.NEXT_PUBLIC_BASE_URL}${post.attributes.cover.data.attributes.formats.large.url}`,
                  title: post.attributes.title,
                  summary: post.attributes.summary,
                }}
                className="hidden xl:flex"
                imgClassName="w-[750px]"
              />

              <PostCard
                type="vertical"
                data={{
                  cover: `${process.env.NEXT_PUBLIC_BASE_URL}${post.attributes.cover.data.attributes.formats.large.url}`,
                  title: post.attributes.title,
                  summary: post.attributes.summary,
                }}
                className="xl:hidden"
                imgClassName="h-[250px]"
              />
            </React.Fragment>
          ))}
        </div>
      </section>

      <section>
        <h1 className="font-bold text-3xl mt-20 mb-8">New Blog Posts</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
          {posts?.slice(6).map((post) => (
            <PostCard
              key={post.id}
              type="vertical"
              imgClassName="h-[250px]"
              data={{
                cover: `${process.env.NEXT_PUBLIC_BASE_URL}${post.attributes.cover.data.attributes.formats.large.url}`,
                title: post.attributes.title,
                summary: post.attributes.summary,
              }}
            />
          ))}
        </div>
      </section>
    </div>
  );
}
