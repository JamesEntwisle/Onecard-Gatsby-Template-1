import React from 'react'
import { Link } from 'gatsby'
import faTimesCircle from '../img/times-circle-regular.svg'

const CloseButton = () => (
  <Link to="/" style={{ color: '#E09CED' }}>
    <img src={faTimesCircle} alt="fa-times-circle" className="close-button" />
  </Link>
)

export default CloseButton
