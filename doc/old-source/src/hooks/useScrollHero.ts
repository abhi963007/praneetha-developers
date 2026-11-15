import { useEffect, useRef, useState } from 'react';

export function useScrollHero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      const el = trackRef.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
      const raw = -rect.top / scrollable;
      const clamped = Math.min(1, Math.max(0, raw));
      setProgress(clamped);
    };

    const onScroll = () => {
      cancelAnimationFrame(rafId);
      rafId = requestAnimationFrame(updateProgress);
    };

    updateProgress();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll, { passive: true });

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const activeChapter = progress < 0.34 ? 0 : progress < 0.68 ? 1 : 2;

  const jumpToChapter = (chapterIndex: number) => {
    const el = trackRef.current;
    if (!el) return;
    const scrollable = Math.max(1, el.offsetHeight - window.innerHeight);
    const targetProgress = chapterIndex === 0 ? 0.02 : chapterIndex === 1 ? 0.45 : 0.82;
    const top = el.offsetTop + scrollable * targetProgress;
    window.scrollTo({ top, behavior: 'smooth' });
  };

  return { trackRef, progress, activeChapter, jumpToChapter };
}

