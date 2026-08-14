import { useState } from "react";
import { posts } from "../data/posts";
import { PostContent } from "./PostContent";

export default function BlogLayout() {
  const [selectedId, setSelectedId] = useState<string>(posts[0]?.id ?? "");
  const selected = posts.find((p) => p.id === selectedId) ?? null;

  return (
    <div className="min-h-screen text-white grid grid-cols-1 md:grid-cols-[25%_75%]">
      <div className="p-1 overflow-y-auto max-h-screen no-scrollbar">
        <h2 className="text-4xl font-extrabold uppercase tracking-wide ">
          Blog Posts
        </h2>
        <div className="w-60 h-1 bg-white my-5" />

        <ul className="space-y-6">
          {posts.map((post) => (
            <li key={post.id}>
              <button
                onClick={() => setSelectedId(post.id)}
                className={`text-left w-full rounded-md px-2 py-1 -mx-2 ${
                  selectedId === post.id ? "bg-white/10" : "hover:bg-white/5"
                }`}
              >
                <div className="font-medium text-base">{post.title}</div>
                <div className="text-sm text-white/80">{post.date}</div>
                <div className="text-sm text-white/80">{post.course}</div>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="px-10 overflow-y-auto max-h-screen no-scrollbar">
        {selected ? (
          <>
            <h1 className="text-5xl font-extrabold uppercase tracking-wide">
              {selected.title}
            </h1>
            <p className="font-semibold text-white/90 mt-2">{selected.course}</p>
            <PostContent slug={selected.slug} />
          </>
        ) : (
          <p>Select a post to read it.</p>
        )}
      </div>
    </div>
  );
}