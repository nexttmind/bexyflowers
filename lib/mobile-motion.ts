/** Same breakpoint as storefront mobile layout (gift-edits / immersive.css). */
export const DESKTOP_REVEAL_MEDIA = '(min-width: 761px)';

export const PHONE_STATIC_MEDIA = '(max-width: 760px), (max-width: 932px) and (pointer: coarse)';

/** Scroll-reveal section effects — desktop only. */
export function isDesktopRevealMotionEnabled(): boolean {
  if (typeof window === 'undefined') return false;
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
  return window.matchMedia(DESKTOP_REVEAL_MEDIA).matches;
}

export function isPhoneMotionStatic(): boolean {
  if (typeof window === 'undefined') return false;
  return !isDesktopRevealMotionEnabled();
}

/** Undo scroll-reveal Web Animations inline opacity/transform (phone / resize). */
export function clearRevealMotionStyles(): void {
  document
    .querySelectorAll(
      '.bexy-immersive-hero .bexy-hero-copy,.bexy-hero-copy,.reference-section-heading,.about-contact,.bexy-discover,.story-step,.story-heading,.gift-comparison-heading,.occasion-editorial-heading,.bexy-home-rail .reference-section-heading'
    )
    .forEach((node) => {
      const el = node as HTMLElement;
      el.style.opacity = '';
      el.style.transform = '';
    });
}
