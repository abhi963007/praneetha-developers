import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Synchronizes document title, Webflow `data-wf-page` ID, scroll position,
 * and re-initializes Webflow IX2/IX3 + Sliders/Lightboxes + GSAP Parallax on route changes.
 */
export function useWebflowPage(wfPageId: string, title: string) {
  const location = useLocation();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    document.title = title;
    document.documentElement.setAttribute('data-wf-page', wfPageId);

    if (location.hash) {
      const target = document.getElementById(location.hash.slice(1));
      if (target) {
        target.scrollIntoView();
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }

    const rafId = window.requestAnimationFrame(() => {
      if (window.__reinitWebflowIx3) {
        void window.__reinitWebflowIx3();
      }
    });

    timerRef.current = window.setTimeout(() => {
      if (!document.documentElement.classList.contains('w-mod-ix3')) {
        if (window.__reinitWebflowIx3) {
          void window.__reinitWebflowIx3();
        } else {
          document.documentElement.classList.add('w-mod-ix3');
        }
      }
    }, 1200);

    return () => {
      window.cancelAnimationFrame(rafId);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [wfPageId, title, location.pathname, location.hash]);
}
