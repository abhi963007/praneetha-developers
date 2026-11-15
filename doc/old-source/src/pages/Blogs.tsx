import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useApi } from '../hooks/useApi';
import { useReveal } from '../hooks/useReveal';
import type { BlogsResponse } from '../types';

export function Blogs() {
  const { data, loading } = useApi<BlogsResponse>('/api/blogs');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const items = useMemo(() => {
    if (!data?.items) return [];
    if (activeCategory === 'All') return data.items;
    return data.items.filter((b) => b.category === activeCategory);
  }, [data, activeCategory]);

  const revealRef = useReveal<HTMLDivElement>([loading, items.length]);

  return (
    <div ref={revealRef} className="bg-white">
      <section className="border-b border-brand-dark/12 bg-brand-cream py-12">
        <div className="edge-container">
          <nav className="text-[11px] uppercase tracking-[0.16em] text-brand-slate" aria-label="Breadcrumb">
            <Link to="/" className="hover:text-brand-green">
              Home
            </Link>
            <span className="mx-2">/</span>
            <span className="font-semibold text-brand-dark">Blogs</span>
          </nav>

          <h1 className="mt-4 font-display text-4xl font-semibold text-brand-dark sm:text-5xl">
            Insights &amp; Market Guides
          </h1>

          <div className="mt-6 flex flex-wrap gap-6 border-t border-brand-dark/10 pt-4">
            {(data?.categories || ['All']).map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setActiveCategory(cat)}
                className={`border-b-2 pb-1.5 text-xs font-semibold uppercase tracking-[0.14em] transition-colors ${
                  activeCategory === cat
                    ? 'border-brand-green text-brand-dark'
                    : 'border-transparent text-brand-slate hover:text-brand-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="section-pad py-14">
        <div className="edge-container">
          {loading ? (
            <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-80 animate-pulse rounded-sm bg-brand-cream" />
              ))}
            </div>
          ) : (
            <div className="tablet-two-col grid gap-7 md:grid-cols-2 lg:grid-cols-3">
              {items.map((post, idx) => (
                <article
                  key={post.id}
                  data-reveal="up"
                  data-reveal-delay={String((idx % 3) + 1)}
                  className="architectural-card group flex flex-col overflow-hidden"
                >
                  <Link to={`/blogs/${post.slug}`} className="awwwards-image-frame aspect-[16/10]">
                    <img
                      src={post.coverImage}
                      alt={post.title}
                      className="h-full w-full object-cover"
                    />
                  </Link>
                  <div className="flex flex-1 flex-col justify-between p-5">
                    <div>
                      <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.14em]">
                        <span className="font-semibold text-brand-green">{post.category}</span>
                        <span className="text-brand-slate">{post.readTime}</span>
                      </div>
                      <h2 className="mt-2 font-display text-2xl font-semibold text-brand-dark">
                        <Link to={`/blogs/${post.slug}`} className="hover:text-brand-green">
                          {post.title}
                        </Link>
                      </h2>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-brand-dark/10 pt-3 text-xs">
                      <span className="text-brand-slate">{post.publishedAt}</span>
                      <Link
                        to={`/blogs/${post.slug}`}
                        className="font-semibold uppercase tracking-[0.14em] text-brand-dark hover:text-brand-green"
                      >
                        Read →
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
