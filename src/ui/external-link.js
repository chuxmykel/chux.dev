import React from "react";

export function ExternalLink({ href, className, children, ...props }) {
  return (
    <a href={href} target="_blank" rel="noreferrer" className={className} {...props}>
      {children}
    </a>
  );
}
