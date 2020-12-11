import React from 'react'

import SocialIcons from '../components/SocialIcons'

const Footer = class extends React.Component {
  render() {
    return (
      <footer className="footer has-background-black has-text-white-ter" style={{ padding: 0 }}>
        <SocialIcons />
      </footer>
    )
  }
}

export default Footer
