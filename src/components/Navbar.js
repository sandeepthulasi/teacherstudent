import React from 'react'
import {Link} from 'react-router-dom';
function Navbar(props) {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container-fluid ">
    <a className="navbar-brand" href="#">{props.form}</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
 
        <li className="nav-item">
          <Link className="nav-link" to={'/teacher/addstudent'} hidden={props.hidden}>Add Student</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link " to={'/'} >Sign Out<i className="fa-solid px-2 fa-right-from-bracket"></i></Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar