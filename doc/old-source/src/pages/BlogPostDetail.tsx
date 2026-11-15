import { Link, useParams } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { BlogPost } from '../types';

export function BlogPostDetail() {
  const { slug } = useParams<{ slug: string }>();
  const { data: post, loading, error } = useApi<BlogPost>(slug ? `/api/blogs/${slug}` : null);
  const revealRef = useReveal<HTMLElement>([loading, post?.id]);

  if (loading) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-20">
        <div className="h-80 animate-pulse rounded-sm bg-brand-cream" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="mx-auto max-w-3xl px-4 py-32 text-center">
        <h1 className="font-display text-4xl font-semibold text-brand-dark">Article Not Found</h1>
        <Link
          to="/blogs"
          className="mt-6 inline-block rounded-sm bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white"
        >
          ← Back to Insights
        </Link>
      </div>
    );
  }

  return (
    <article ref={revealRef} className="bg-white">
      <header className="border-b border-brand-dark/12 bg-brand-cream py-12">
        <div className="mx-auto max-w-3xl px-4 sm:px-6">
          <Link
            to="/blogs"
            className="text-xs font-semibold uppercase tracking-[0.16em] text-brand-green hover:underline"
          >
            ← All Insights
          </Link>

          <div className="mt-5 flex flex-wrap items-center gap-4 text-[11px] font-semibold uppercase tracking-[0.16em]">
            <span className="rounded-sm bg-brand-dark px-2.5 py-1 text-white">
              {post.category}
            </span>
            <span className="text-brand-slate">{post.readTime}</span>
            <span className="text-brand-slate">{post.publishedAt}</span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            {post.title}
          </h1>
          <p className="mt-3 text-sm text-brand-slate sm:text-base">{post.excerpt}</p>
        </div>
      </header>

      <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6" data-reveal="up">
        <div className="awwwards-image-frame rounded-sm">
          <img
            src={post.coverImage}
            alt={post.title}
            className="aspect-[16/9] w-full object-cover"
          />
        </div>

        <div className="mt-8 space-y-5 text-base leading-relaxed text-brand-ink">
          {post.content.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-12 flex flex-col justify-between gap-4 rounded-sm border border-brand-dark/15 bg-brand-cream p-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-brand-green">
              Related Community
            </p>
            <h2 className="mt-1 font-display text-2xl font-semibold text-brand-dark">
              Explore Our Flagship Luxury Villas
            </h2>
          </div>
          <Link
            to={`/project/${post.relatedProjectSlug}`}
            className="shrink-0 rounded-sm bg-brand-dark px-6 py-3 text-xs font-semibold uppercase tracking-[0.16em] text-white transition-colors hover:bg-brand-green"
          >
            View Project →
          </Link>
        </div>
      </div>
    </article>
  );
}
