import * as React from "react";
import { Link, graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { Badge } from "../../ui/badge";
import { ReadingTime } from "../../ui/reading-time";

const readingTime = require("reading-time/lib/reading-time");

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <div className="mt-2 md:mt-10 h-screen font-titillium-web px-10">
        {data.allMdx.nodes.map((node) => {
          const {
            frontmatter: {
              slug,
              title,
              description,
              date,
              hero_image,
              hero_image_alt,
              author,
              tags,
            },
            id,
            body,
          } = node;
          const image = getImage(hero_image);
          const timeToRead = readingTime(body).text;
          return (
            <article
              key={id}
              className="py-4 mb-4 flex items-start gap-4 w-full md:w-3/4 text-slate-900 dark:text-slate-50"
            >
              <div className="hidden md:block overflow-hidden rounded-md h-52 w-52">
                <GatsbyImage image={image} alt={hero_image_alt} />
              </div>
              <div>
                <h2 className="font-extrabold text-3xl text-slate-700 dark:text-slate-200 hover:underline underline-offset-2">
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </h2>
                <p className="text-sm mb-2 hidden md:block">
                  Published by {author} on {date}
                </p>
                <p className="text-sm mb-2 block md:hidden">Published {date}</p>
                <p className="text-lg md:text-base">
                  {description.slice(0, 50)}...
                </p>
                <ReadingTime time={timeToRead} className="text-sm mt-2" />

                <div className="mt-3 flex justify-start gap-4">
                  {tags.map((tag) => (
                    <Badge key={tag}>{tag}</Badge>
                  ))}
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMdx(sort: { frontmatter: { date: DESC } }) {
      nodes {
        id
        parent {
          ... on File {
            modifiedTime(formatString: "MMM DD, YYYY")
          }
        }
        body
        frontmatter {
          author
          date(formatString: "MMM DD, YYYY")
          slug
          tags
          title
          hero_image {
            childImageSharp {
              gatsbyImageData(width: 200)
            }
          }
          hero_image_alt
          description
        }
      }
    }
  }
`;

export const Head = () => <Seo title="Articles" />;

export default BlogPage;
