import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardsVerticalGrid from '../components/CardsVerticalGrid'
import ViewCardsHeader from '../components/ViewCardsHeader'
import CloseButton from '../components/CloseButton'

export const SocialsPageTemplate = ({
  intro,
}) => (
  <div className="content">
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <ViewCardsHeader activeIndex={3} />
        <div className="section" style={{ paddingTop: '1rem' }}>
          <CardsVerticalGrid gridItems={intro.blurbs} />
        </div>
      </div>
      <CloseButton />
    </section>
  </div>
)

SocialsPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const SocialsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SocialsPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

SocialsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default SocialsPage

export const socialsPageQuery = graphql`
  query SocialsPageTemplate($id: String!) {
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
