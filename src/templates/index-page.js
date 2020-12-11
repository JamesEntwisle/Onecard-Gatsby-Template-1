import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import { FaExternalLinkAlt } from 'react-icons/fa'

import Layout from '../components/Layout'
import CardsHorizontalGrid from '../components/CardsHorizontalGrid'

export const IndexPageTemplate = ({
  intro,
}) => (
  <div>
    <section className="section section--gradient" style={{ paddingTop: '1rem' }}>
      <div className="container">
        <div className="content">
          {
            intro.cards.map((card, index) => (
              <div key={index}>
                <div className="cards-wrapper">
                  <h2 className="cards-wrapper-header">
                    <span itemProp="headline">{card.header}</span>
                  </h2>
                  
                  <h5 style={{ margin: 0 }}>
                    <Link to={card.url} itemProp="url" style={{ color: '#8C5ACC' }}>
                      View All <FaExternalLinkAlt />
                    </Link>
                  </h5>
                </div>
                <CardsHorizontalGrid gridItems={card.data} />
              </div>
            ))
          }
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  title: PropTypes.string,
  intro: PropTypes.shape({
    cards: PropTypes.array,
  }),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        title={frontmatter.title}
        intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        intro {
          cards {
            header
            url
            data {
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
  }
`
