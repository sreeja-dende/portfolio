// src/components/ui/SectionWrapper.tsx
"use client";

import { useInView } from "@/hooks/useInView";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export function SectionWrapper({ children, className, id }: SectionWrapperProps) {
  const { ref, inView } = useInView<HTMLDivElement>();

  return (
    <div
      id={id}
      ref={ref}
      className={cn("section-animate", inView && "in-view", className)}
    >
      {children}
    </div>
  );
}
