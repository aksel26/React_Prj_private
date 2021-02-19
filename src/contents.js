import React, { useState } from "react"
import "./App.css"
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap"

function Contents(props) {
  console.log(props.data[1].props.children)
  return (
    <div className="container">
      <div className="row"></div>
    </div>
  )
}

export default Contents
