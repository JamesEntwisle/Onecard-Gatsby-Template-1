import React from 'react'
import { Link } from 'gatsby'

const headers = [
  { url: '/blogs', label: 'Blogs' },
  { url: '/videos', label: 'Videos' },
  { url: '/podcasts', label: 'Podcasts' },
  { url: '/socials', label: 'Socials' },
];

const ViewCardsHeader = ({ activeIndex }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 20, alignItems: 'baseline' }}>
      {
        headers.map((h, index) => (
          <Link key={index} to={h.url} className={`${activeIndex === index && 'active-header'}`}>
            <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700,  }}>
              {h.label}
            </h3>
          </Link>
        ))
      }
    </div>
  )
}

export default ViewCardsHeader
