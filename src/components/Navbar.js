import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.svg'
import phoneLogo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <nav
        className="navbar is-transparent"
        role="navigation"
        aria-label="main-navigation"
      >
        <div className="header-wrapper">
          <Link to="/">
            
            <img
              src={phoneLogo}
              alt="phone-logo"
              style={{
              height: 65,
              borderRadius: 1000,
              width: 'auto',
              background:'#ffffff',
              marginLeft: 12
              }}
            />
          </Link>
          <p
            style={{
            fontSize: 32,
            letterSpacing: 1.25,
            fontFamily: 'Montserrat',
            fontWeight: 600,
            margin: 20,
            color: '#ffffff'
            }}
          >
            onecard.bio
          </p>
        </div>
      </nav>
    )
  }
}

export default Navbar
