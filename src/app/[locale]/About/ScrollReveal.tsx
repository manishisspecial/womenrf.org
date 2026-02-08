'use client';

import { useEffect, useRef, useState, type ReactNode } from 'react';

type Variant = 'slideLeft' | 'slideRight' | 'slideUp' | 'slideUpSm' | 'slideUpLg' | 'fade';

const TRANSFORMS: Record<Variant, { from: string; to: string }> = {
  slideLeft: { from: 'translateX(-50px)', to: 'translateX(0)' },
  slideRight: { from: 'translateX(50px)', to: 'translateX(0)' },
  slideUp: { from: 'translateY(30px)', to: 'translateY(0)' },
  slideUpSm: { from: 'translateY(20px)', to: 'translateY(0)' },
  slideUpLg: { from: 'translateY(50px)', to: 'translateY(0)' },
  fade: { from: 'translateY(0)', to: 'translateY(0)' },
};

export default function ScrollReveal({
  children,
  variant = 'slideUp',
  className = '',
}: {
  children: ReactNode;
  variant?: Variant;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const transform = TRANSFORMS[variant];

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setVisible(true);
        });
      },
      { rootMargin: '0px 0px -40px 0px', threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? transform.to : transform.from,
        transition: 'opacity 0.6s ease-out, transform 0.6s ease-out',
      }}
    >
      {children}
    </div>
  );
}
