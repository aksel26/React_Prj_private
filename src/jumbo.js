import React from "react"
import "./App.css"
import { Button, Jumbotron } from "react-bootstrap"

function jumbo() {
  return (
    <Jumbotron className="background">
      <h1>20% Season OFF!</h1>
      <p>
        This is a simple hero unit, a simple jumbotron-style component for
        calling extra attention to featured content or information.
      </p>
      <p>
        <Button variant="primary">Learn more</Button>
      </p>
    </Jumbotron>
  )
}

export default jumbo
