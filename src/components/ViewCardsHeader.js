import React from 'react'
import { Link } from 'gatsby'

const ViewCardsHeader = () => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', marginLeft: 20, alignItems: 'baseline' }}>
      <Link to="/videos">
        <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700,  }}>
          Blogs
        </h3>
      </Link>
      <Link to="/videos">
        <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700,  }}>
          Videos
        </h3>
        <Link hrefLang="#" style={{ content: "", width: 7.5, height: 7.5, borderRadius: 10, color: "#8C5ACC" }} />
      </Link>
      <Link to="/videos">
        <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700,  }}>
          Podcasts
        </h3>
      </Link>
      <Link to="/videos">
        <h3 style={{ fontFamily: 'Montserrat', fontWeight: 700,  }}>
          Socials
        </h3>
      </Link>
    </div>
  )
}

export default ViewCardsHeader
