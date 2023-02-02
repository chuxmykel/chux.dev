/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Chukwudi Ngwobia | Fullstack software developer`,
    description: "Personal website/blog for Chukwudi Ngwobia.",
    image: "src/images/icon.png",
    siteUrl: `https://www.chux.dev`,
    keywords:
      "HTML,CSS,JavaScript,React,Engineering,Software,Web development,Tech Blog,Portfolio website",
    author: "Ngwobia, Chukwudi Mike",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/src/blog`,
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: "gatsby-plugin-mdx",
      options: {
        extensions: [".mdx", ".md"],
        gatsbyRemarkPlugins: [`gatsby-remark-images`],
      },
    },
    "gatsby-plugin-postcss",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Chukwudi Ngwobia. | Fullstack Software Engineer.",
        short_name: "chux.dev",
        start_url: "/",
        background_color: "#fff",
        theme_color: "#f1f5f9",
        icon: "src/images/icon.png",
        theme_color_in_head: false,
        display: "minimal-ui",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: false,
        id: 3324975,
        sv: 6,
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: ["G-C14PSMX7J5"],
        pluginConfig: {
          head: true,
        },
      },
    },
    `gatsby-plugin-sitemap`,
  ],
};
