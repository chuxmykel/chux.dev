import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";

import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { CodeBlock } from "../../components/code-block";

const BlogPost = ({ data, children }) => {
  const components = {
    pre: (props) => <div {...props} className="text-base md:text-lg"></div>,
    code: CodeBlock,
  };
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout>
      <div className="flex justify-center font-titillium-web w-full min-h-screen">
        <div className="min-h-full w-full md:flex justify-center mt-10">
          <article
            className={`prose dark:prose-invert prose-lg xl:prose-xl prose-slate prose-img:rounded-sm prose-h1:underline prose-headings:underline-offset-8 prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:dark:text-blue-400 dark:hover:prose-a:text-blue-300 prose-a:underline prose-a:underline-offset-8 prose-pre:font-source-code-pro`}
          >
            <div className="mb-10">
              <h1 className="text-4xl md:text-5xl font-extrabold">
                {data.mdx.frontmatter.title}
              </h1>
              <p className="mb-10">
                Published {data.mdx.frontmatter.date} by{" "}
                {data.mdx.frontmatter.author}
              </p>
              <div className="py-4">
                <GatsbyImage
                  image={image}
                  alt={data.mdx.frontmatter.hero_image_alt}
                />
              </div>
              <p>
                Photo Credit:{" "}
                <a
                  href={data.mdx.frontmatter.hero_image_credit_link}
                  target="_blank"
                  rel="noreferrer"
                >
                  {data.mdx.frontmatter.hero_image_credit_text}
                </a>
              </p>
            </div>
            <MDXProvider components={components}>{children}</MDXProvider>
          </article>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        author
        description
        date(formatString: "MMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`;
export const Head = ({ data }) => (
  <Seo
    title={data.mdx.frontmatter.title}
    description={data.mdx.frontmatter.description}
  />
);

export default BlogPost;
