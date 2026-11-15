import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

interface LenisLike {
  scrollTo?: (target: number, opts?: { immediate?: boolean; force?: boolean }) => void;
}

type WindowWithWebflow = Window & {
  __veymontLenis?: LenisLike;
  ScrollTrigger?: { refresh?: () => void };
};

function scrollToTopImmediate() {
  const win = window as WindowWithWebflow;
  if (win.__veymontLenis && typeof win.__veymontLenis.scrollTo === 'function') {
    win.__veymontLenis.scrollTo(0, { immediate: true, force: true });
  }
  window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

/**
 * Synchronizes document title, Webflow `data-wf-page` ID, scroll position,
 * and initializes Webflow IX2/IX3 + GSAP ScrollTrigger once per route change.
 */
export function useWebflowPage(wfPageId: string, title: string) {
  const location = useLocation();
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    document.title = title;
    document.documentElement.setAttribute('data-wf-page', wfPageId);

    const hasTarget = location.hash ? Boolean(document.getElementById(location.hash.slice(1))) : false;
    if (location.hash && hasTarget) {
      document.getElementById(location.hash.slice(1))?.scrollIntoView();
    } else {
      scrollToTopImmediate();
    }

    const rafId = window.requestAnimationFrame(() => {
      if (!hasTarget) {
        scrollToTopImmediate();
      }
      if (window.__reinitWebflowIx3) {
        void window.__reinitWebflowIx3();
      }
    });

    const onWindowLoad = () => {
      (window as WindowWithWebflow).ScrollTrigger?.refresh?.();
    };
    window.addEventListener('load', onWindowLoad, { once: true });

    if (document.fonts && typeof document.fonts.ready?.then === 'function') {
      void document.fonts.ready.then(() => {
        (window as WindowWithWebflow).ScrollTrigger?.refresh?.();
      });
    }

    timerRef.current = window.setTimeout(() => {
      if (!document.documentElement.classList.contains('w-mod-ix3')) {
        if (window.__reinitWebflowIx3) {
          void window.__reinitWebflowIx3();
        } else {
          document.documentElement.classList.add('w-mod-ix3');
        }
      }
      (window as WindowWithWebflow).ScrollTrigger?.refresh?.();
    }, 1200);

    return () => {
      window.cancelAnimationFrame(rafId);
      window.removeEventListener('load', onWindowLoad);
      if (timerRef.current !== null) {
        window.clearTimeout(timerRef.current);
      }
    };
  }, [wfPageId, title, location.pathname, location.hash]);
}
