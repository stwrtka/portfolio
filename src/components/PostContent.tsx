import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";

const mdModules = import.meta.glob("../content/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

const schema = {
  ...defaultSchema,
  tagNames: [...(defaultSchema.tagNames ?? []), "iframe", "u", "video", "source"],
  attributes: {
    ...defaultSchema.attributes,
    iframe: ["src", "width", "height", "frameBorder", "allow", "allowFullScreen", "title"],
    video: ["width", "height", "loop", "autoplay", "muted", "controls"],
    source: ["src", "type"],
  },
};

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
        rehypePlugins={[rehypeRaw, [rehypeSanitize, schema]]}
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