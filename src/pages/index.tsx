// import React from 'react';
// import Title from '@/components/Title';

import { StaticQuery, graphql } from 'gatsby';

const query = graphql`
  query {
    allStrapiArticle {
      edges {
        node {
          id
          title
          digest
          tags {
            name
          }
        }
      }
    }
  }
`;

const IndexPage = () => (
  <StaticQuery
    query={query}
    render={(data) => (
      <div>
        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">ボタン</button>
        <ul>
          {data.allStrapiArticle.edges.map((b) => (
            <li key={b.node.strapiId}>
              <div>
                <p>{b.node.title}</p>
                <pre>{JSON.stringify(b.node)}</pre>
                {/* {b.node.tags.map((t) => ( */}
                {/*     <p>{t.name}</p> */}
                {/* ))} */}
              </div>
            </li>
          ))}
        </ul>
      </div>
    )}
  />
);

export default IndexPage;
