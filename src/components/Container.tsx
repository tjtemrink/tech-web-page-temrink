import React from "react";

interface Props {
  className?: string;
  /** When true, removes the max width and centers to allow full-bleed sections */
  fluid?: boolean;
}

const Container: React.FC<React.PropsWithChildren<Props>> = ({
  children,
  className,
  fluid = false,
}) => {
  const base = fluid
    ? "w-full px-5"                    // full width
    : "w-full max-w-7xl mx-auto px-5"; // constrained width (default)

  return <div className={`${base} ${className ?? ""}`.trim()}>{children}</div>;
};

export default Container;
