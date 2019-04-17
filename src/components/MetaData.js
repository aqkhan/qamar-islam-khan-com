import React from 'react';
import { Helmet } from 'react-helmet';
import { graphql, useStaticQuery } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`
        query{
            site{
                siteMetadata{
                    title
                }
            }
        }
    `)
    console.log('Daekh BC: ', data)
    return(
        <Helmet defaultTitle={data.site.siteMetadata.title}>
            <meta name="author" value="A Q Khan" />
        </Helmet>
    )
}

// GraphQL tooch