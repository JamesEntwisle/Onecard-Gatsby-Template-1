import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import CardsVerticalGrid from '../components/CardsVerticalGrid'
import ViewCardsHeader from '../components/ViewCardsHeader'
import CloseButton from '../components/CloseButton'

export const BlogsPageTemplate = ({
  intro,
}) => (
  <div className="content">
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <ViewCardsHeader activeIndex={0} />
        <div className="section" style={{ paddingTop: '1rem' }}>
          <CardsVerticalGrid gridItems={intro.blurbs} />
        </div>
      </div>
      <CloseButton />
    </section>
  </div>
)

BlogsPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
}

const BlogsPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <BlogsPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

BlogsPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default BlogsPage

export const blogsPageQuery = graphql`
  query BlogsPageTemplate($id: String!) {
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
            link
            text
          }
        }
      }
    }
  }
`
