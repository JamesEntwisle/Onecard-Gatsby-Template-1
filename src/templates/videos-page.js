import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardsVerticalGrid from '../components/CardsVerticalGrid'
import ViewCardsHeader from '../components/ViewCardsHeader'
import CloseButton from '../components/CloseButton'

export const VideosPageTemplate = ({
  intro,
}) => (
  <div className="content">
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <ViewCardsHeader activeIndex={1} />
        <div className="section" style={{ paddingTop: '1rem' }}>
          <CardsVerticalGrid gridItems={intro.blurbs} />
        </div>
      </div>
      <CloseButton />
    </section>
  </div>
)

VideosPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const VideosPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <VideosPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

VideosPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default VideosPage

export const videosPageQuery = graphql`
  query VideosPageTemplate($id: String!) {
    markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
        }
      }
    }
  }
`
