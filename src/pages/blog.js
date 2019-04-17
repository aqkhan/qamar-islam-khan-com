import React from 'react';
import Layouts from '../layouts';
import BlogPost from '../components/BlogPost';
import { graphql } from 'gatsby';

export default ({ data }) => {
    const posts = data.allMarkdownRemark.edges;
    return(
        <Layouts>
            <h1>Blog Archive</h1>
            {
                posts.map(({node}) => (
                    <BlogPost key={ node.id } post={node} />
                ))
            }
        </Layouts>
    )
}

export const query = graphql`
{
    allMarkdownRemark{
      edges{
        node{
          frontmatter{
            title,
            date(formatString: "DD MMMM, YYYY"),
            img
          },
          html
        }
      }
    }
}
`