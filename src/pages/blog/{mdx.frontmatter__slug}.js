import * as React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { MDXProvider } from "@mdx-js/react";
import { FaClock } from "react-icons/fa";

import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { CodeBlock } from "../../components/code-block";

const readingTime = require("reading-time/lib/reading-time");

const BlogPost = ({ data, children }) => {
  const { body } = data.mdx;
  const timeToRead = readingTime(body).text;
  const {
    hero_image,
    title,
    date,
    hero_image_alt,
    hero_image_credit_link,
    hero_image_credit_text,
    // author,
    tags,
  } = data.mdx.frontmatter;
  const components = {
    pre: (props) => <div {...props} className="text-base md:text-lg"></div>,
    code: CodeBlock,
  };
  const image = getImage(hero_image);
  return (
    <Layout>
      <div className="flex justify-center font-titillium-web w-full min-h-screen">
        <div className="min-h-full w-full md:flex justify-center mt-10">
          <article
            className={`prose dark:prose-invert prose-lg xl:prose-xl prose-slate prose-img:rounded-sm prose-h1:underline prose-headings:underline-offset-8 prose-a:text-blue-600 hover:prose-a:text-blue-400 prose-a:dark:text-blue-400 dark:hover:prose-a:text-blue-300 prose-a:underline prose-a:underline-offset-8 prose-pre:font-source-code-pro`}
          >
            <div className="flex flex-col">
              <div className="flex flex-col items-center">

                <h1 className="text-center">{title}</h1>

                <div className="flex flex-col items-center -mt-10 mb-10">
                  <p className="italic text-base">
                    Published: {date}
                  </p>
                  <span className="flex items-center -mt-8 text-sm gap-2">
                    <FaClock />
                    <p className="font-bold">{timeToRead}</p>
                  </span>
                </div>

              </div>

              <GatsbyImage image={image} alt={hero_image_alt} />

              <div className="flex justify-center">
                <p className="text-base italic">
                  Photo Credit:{" "}
                  <a
                    href={hero_image_credit_link}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {hero_image_credit_text}
                  </a>
                </p>
              </div>
            </div>
            <MDXProvider components={components}>{children}</MDXProvider>
            <div className="mt-20 flex justify-start gap-4">
              {tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-slate-200 dark:bg-slate-700 px-2 rounded font-thin text-xs md:text-base"
                >
                  {tag}
                </span>
              ))}
            </div>
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
        tags
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
export const Head = ({
  data: {
    mdx: {
      frontmatter: { title, description, tags },
    },
  },
}) => <Seo title={title} description={description} keywords={tags.join(",")} />;


export default BlogPost;
