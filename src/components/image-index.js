import React from 'react'
import BackgroundImage from 'gatsby-background-image'
import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import { convertToBgImage } from 'gbimage-bridge'

export default function BackgroundRequest() {
  const { background } = useStaticQuery(
    graphql`
    query {
        background: file(relativePath: { eq: "homepage.jpg" }) {
            childImageSharp {
                gatsbyImageData(
                    width: 1920,
                    quality: 80,
                )
                }
            }
        }
    `)

  const image = getImage(background)
  const bgImage = convertToBgImage(image)

  return (
    <>
      <BackgroundImage
        Tag="section"
        {...bgImage}
        preserveStackingContext
      >
      </BackgroundImage>
    </>
  )
}