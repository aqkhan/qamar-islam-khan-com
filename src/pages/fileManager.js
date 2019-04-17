import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../layouts'

export default ({ data }) => (
    <Layout>
    <div>
        <ul>
        {
            data.allFile.edges.map( (item, i) => (
                <li key={i}>{item.node.relativePath}</li>
            ))
        }
        </ul>
    </div>
    </Layout>
)

export const query = graphql`
query{
    allFile{
      edges{
        node{
          id,
          absolutePath,
          relativePath,
          extension,
          size,
          dir
        }
      }
    }
}
`