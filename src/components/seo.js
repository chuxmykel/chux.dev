import React from "react";

import { useSiteMetadata } from "../hooks/use-site-metadata";

export const Seo = ({ title, description, pathname, children, keywords }) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    image,
    siteUrl,
    keywords: defaultKeywords,
    author,
  } = useSiteMetadata();

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname || ``}`,
    keywords: keywords || defaultKeywords,
    author,
  };

  return (
    <>
      <title>{`${seo.title} | ${seo.author}`}</title>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta charSet="UTF-8" />
      <meta name="description" content={seo.description} />
      <meta name="image" content={seo.image} />
      <meta name="keywords" content={seo.keywords} />
      <meta name="author" content={seo.author} />
      {children}
    </>
  );
};
