import { useEffect, useRef } from 'react';

/**
 * useScrollReveal — attaches an IntersectionObserver to a ref element.
 * When the element enters the viewport it adds the class "revealed".
 * direction: 'left' | 'right' | 'up' | 'fade'
 */
export function useScrollReveal(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el); // only animate once
        }
      },
      { threshold: options.threshold ?? 0.12, rootMargin: options.rootMargin ?? '0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return ref;
}
