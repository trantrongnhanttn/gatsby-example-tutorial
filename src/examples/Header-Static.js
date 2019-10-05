import React from 'react'
import {graphql,StaticQuery} from 'gatsby'

const getData = graphql`
    query FirstQuery {
        site {
            siteMetadata {
            siteTitle:title
            description
            author
            data {
                name
                age
            }
            }
        }
    }
`
const HeaderStatic = () => {
    return (
        <StaticQuery query={getData} render={(orange)=>{

            return <div><p>{orange.site.siteMetadata.description}</p></div>
        }}>
            
        </StaticQuery>
    )
}

export default HeaderStatic
