import React, { useState } from "react"
import logo from "./logo.svg"
import "./App.css"
import { Navbar, Nav, NavDropdown, Button, Jumbotron } from "react-bootstrap"
import product1 from "./1.png"
import product2 from "./2.png"
import product3 from "./3.png"
import Info from "./data.js"
import Navigation from "./navbar.js"
import Jumbo from "./jumbo.js"
import Contents from "./contents.js"

function App() {
  let [product, productChange] = useState(Info)

  let [showDetail, showDetailChange] = []
  let productImg = [product1, product2, product3]

  showDetail = [...product]
  // const _product = showDetail.map(function (showDetail, i) {
  //   console.log("showDetail[0] : ", showDetail.title)
  //   return (
  //     <div className="col-4" key={i}>
  //       <img src={productImg[i]} alt="p1" width="100%" height="50%" />
  //       <h4>{showDetail.title}</h4>
  //       <p>{showDetail.content}</p>
  //     </div>
  //   )
  // })

  return (
    <div className="App">
      <Navigation />
      <Jumbo />
      <div className="container">
        <div className="row">
          {/* {_product} */}
          {showDetail.map(function (a, i) {
            return <Card show={showDetail[i]} i={i} img={productImg[i]} />
          })}
          {/* <Card show={showDetail[0]} img={productImg[0]} />
          <Card show={showDetail[1]} img={productImg[1]} />
          <Card show={showDetail[2]} img={productImg[2]} /> */}
        </div>
      </div>
    </div>
  )
}
function Card(props) {
  console.log(props.show)
  return (
    <div className="col-4">
      <img src={props.img} alt="p" width="100%" height="50%" />
      <h4>{props.show.title}</h4>
      <p>
        {props.show.content} & {props.show.price}
      </p>
    </div>
  )
}
export default App
