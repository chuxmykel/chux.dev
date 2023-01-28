import * as React from "react";
import { Link, graphql } from "gatsby";

import Layout from "../../components/layout";
import { Seo } from "../../components/seo";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

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
            },
            id,
          } = node;
          const image = getImage(hero_image);
          return (
            <article
              key={id}
              className="py-4 mb-4 flex items-start gap-4 w-full md:w-3/4"
            >
              <div className="hidden md:block overflow-hidden rounded-md">
                <GatsbyImage image={image} alt={hero_image_alt} />
              </div>
              <div>
                <h2 className="font-extrabold text-3xl text-slate-700 dark:text-slate-200 hover:underline underline-offset-2">
                  <Link to={`/blog/${slug}`}>{title}</Link>
                </h2>
                <p className="text-sm mb-2 text-slate-900 dark:text-slate-50 hidden md:block">
                  Published by {author} on {date}
                </p>
                <p className="text-sm mb-2 text-slate-900 dark:text-slate-50 block md:hidden">
                  Published {date}
                </p>
                <p className="text-lg md:text-base text-slate-900 dark:text-slate-50">
                  {description.slice(0, 50)}...
                </p>
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
        frontmatter {
          author
          date(formatString: "MMM DD, YYYY")
          slug
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
