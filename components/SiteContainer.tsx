import type { ReactNode } from "react";

interface SiteContainerProps {
  children: ReactNode;
  className?: string;
}

export const SiteContainer: React.FC<SiteContainerProps> = ({
  children,
  className = "",
}) => (
  <div
    className={`w-full max-w-[80rem] mx-auto px-4 sm:px-6 lg:px-8 ${className}`.trim()}
  >
    {children}
  </div>
);
