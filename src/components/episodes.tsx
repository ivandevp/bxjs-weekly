import React from "react"

const Episodes = ({ data }) => {
  return (
    <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <div>
            {node.frontmatter.image && (
              <img src={node.frontmatter.image} alt={node.frontmatter.title} />
            )}
            <p>{node.frontmatter.title}</p>
          </div>
          <div>
            <p>{node.frontmatter.description}</p>
            <p>Fecha de publicación: {node.frontmatter.date}</p>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default Episodes
