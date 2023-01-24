import type { GatsbyConfig } from 'gatsby';

import dotenv from 'dotenv';

dotenv.config({
  path: `.env.${process.env.NODE_ENV}`,
})

const config: GatsbyConfig = {
  // Since `gatsby-plugin-typescript` is automatically included in Gatsby you
  // don't need to define it here (just if you need to change the options)
  plugins: [
    `gatsby-plugin-pnpm`,
    'gatsby-plugin-postcss',
    {
      resolve: 'gatsby-source-strapi',
      options: {
        apiURL: process.env.STRAPI_API_URL || 'http://127.0.0.1:1337',
        accessToken: process.env.STRAPI_TOKEN,
        collectionTypes: [
          'article',
          'tag',
          'category',
        ],
      },
    },
  ],

  jsxRuntime: `automatic`,
};

export default config;
