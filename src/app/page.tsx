"use client";

import { useGetPosts } from "@/api/hooks";
import { PostCard } from "@/components";

export default function Home() {
  const { data: posts, isLoading } = useGetPosts();

  if (posts?.length === 0) {
    return <div className="container my-12">No content to show!</div>;
  }

  if (isLoading) {
    return <div className="container my-12">Loading...</div>;
  }

  return (
    <div className="container my-8">
      <section className="flex flex-col lg:flex-row gap-x-8">
        <PostCard
          type="vertical"
          data={{
            cover: `${process.env.NEXT_PUBLIC_BASE_URL}${posts[0].attributes.cover.data.attributes.formats.large.url}`,
            title: posts[0].attributes.title,
            summary: posts[0].attributes.summary,
          }}
          className="lg:w-3/5"
          imgClassname="h-[300px] lg:h-[500px]"
        />

        <div className="space-y-10 lg:w-2/5">
          {posts.slice(1, 5).map((post) => (
            <>
              <PostCard
                key={post.id}
                type="horizontal"
                data={{
                  cover: `${process.env.NEXT_PUBLIC_BASE_URL}${post.attributes.cover.data.attributes.formats.large.url}`,
                  title: post.attributes.title,
                  summary: post.attributes.summary,
                }}
                className="hidden lg:flex"
              />
            </>
          ))}
        </div>
      </section>

      <section>
        <h1 className="font-bold text-3xl mt-20 mb-8">New Blog Posts</h1>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-10">
          {posts.slice(0).map((post) => (
            <PostCard
              key={post.id}
              type="vertical"
              imgClassname="h-[250px]"
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
