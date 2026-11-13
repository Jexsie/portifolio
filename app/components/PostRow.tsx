import Link from "next/link";
import type { PostMeta } from "@/lib/posts";
import { formatDate } from "@/lib/format";

/** Compact post entry used in the home page's Posts section. */
export default function PostRow({ post }: { post: PostMeta }) {
  return (
    <article className="post-row">
      <time className="row-meta" dateTime={post.date}>
        {formatDate(post.date)}
      </time>
      <div className="row-body">
        <h4>
          <Link href={`/posts/${post.slug}`}>{post.title}</Link>
        </h4>
        <p className="copy">{post.description}</p>
        {post.tags.length > 0 && (
          <ul className="tags">
            {post.tags.map((tag) => (
              <li key={tag}>{tag}</li>
            ))}
          </ul>
        )}
      </div>
    </article>
  );
}
