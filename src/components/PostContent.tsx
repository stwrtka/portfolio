import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const mdModules = import.meta.glob("../content/*.md", {
  as: "raw",
  eager: true,
}) as Record<string, string>;

interface PostContentProps {
  slug: string;
}

export function PostContent({ slug }: PostContentProps) {
  const raw = mdModules[`../content/${slug}.md`];

  if (!raw) {
    return <p className="text-white/80">Couldn't find this post.</p>;
  }

  return (
    <div
      className="prose prose-invert max-w-none mt-6
        prose-headings:font-extrabold prose-headings:uppercase
        prose-a:text-white prose-blockquote:border-white/50
        prose-code:text-white prose-strong:text-white"
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        components={{
            a: ({ node: _node, ...props }) => (
            <a {...props} target="_blank" rel="noopener noreferrer" />
            ),
        }}
      >
        {raw}
      </ReactMarkdown>
    </div>
  );
}