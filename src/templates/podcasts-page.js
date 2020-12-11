import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardsVerticalGrid from '../components/CardsVerticalGrid'
import ViewCardsHeader from '../components/ViewCardsHeader'
import CloseButton from '../components/CloseButton'

export const PodcastsPageTemplate = ({
  intro,
}) => (
  <div className="content">
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <ViewCardsHeader activeIndex={2} />
        <div className="section" style={{ paddingTop: '1rem' }}>
          <CardsVerticalGrid gridItems={intro.blurbs} />
        </div>
      </div>
      <CloseButton />
    </section>
  </div>
)

PodcastsPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const PodcastsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <PodcastsPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

PodcastsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default PodcastsPage

export const podcastsPageQuery = graphql`
  query PodcastsPageTemplate($id: String!) {
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
