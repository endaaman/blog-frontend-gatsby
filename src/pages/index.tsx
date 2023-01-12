// import React from 'react';
// import Title from '@/components/Title';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiBlog {
      edges {
        node {
          strapiId
          title
        }
      }
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <ul>
        {data.allStrapiBlog.edges.map((b) => (
          <li key={b.node.strapiId}>{b.node.title}</li>
        ))}
      </ul>
    )}
  />
);

export default IndexPage;
