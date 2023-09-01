import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg  bg-secondary text-white">
        <div className="container-fluid x">
          {/* <Link to="/"> */}
            <a className="navbar-brand" href="/">
              Full Stack App
            </a>
          {/* </Link> */}

          <Link className="btn btn-outline-light" to="/adduser">
            Add User
          </Link>
        </div>
      </nav>
    </>
  )
}

export default Navbar