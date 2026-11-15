/// <reference types="vite/client" />

declare global {
  interface Window {
    __reinitWebflowIx3?: () => Promise<void>;
    __reinitParallax?: () => void;
    __wf_ix3_initialized_once?: boolean;
    __veymontLenis?: unknown;
  }
}

export {};
